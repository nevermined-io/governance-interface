import { useWeb3React } from "@web3-react/core";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { providers } from "ethers";
import {
  JsonRpcSigner,
  Web3Provider,
} from "ethers/node_modules/@ethersproject/providers";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useProvider = (): Web3Provider => {
  const { library }: Web3ReactContextInterface<Web3Provider> = useWeb3React();

  return library
    ? library
    : // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      new providers.Web3Provider((window as any).ethereum);
};

export const useProviderOrSigner = (): Web3Provider | JsonRpcSigner => {
  const { account } = useWeb3React();
  const provider = useProvider();
  return useMemo(() => {
    return account ? provider?.getSigner(account) : provider;
  }, [provider, account]);
};

export const useGetConnectedSigner = (): (() => Promise<JsonRpcSigner>) => {
  const provider = useProvider();
  const { account } = useWeb3React();
  return useCallback(async () => {
    if (account && provider) {
      return provider.getSigner(account);
    }
    const accounts = await provider.listAccounts();
    return provider.getSigner(accounts[0]);
  }, [provider, account]);
};

export const useLazyConnectedSigner = (): {
  signer: JsonRpcSigner | null;
  address: string | null;
  getConnectedSigner: () => Promise<JsonRpcSigner>;
} => {
  const getConnectedSigner = useGetConnectedSigner();
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const getConnectedSignerCb = useCallback(async () => {
    const theSigner = await getConnectedSigner();
    setSigner(theSigner);
    return theSigner;
  }, [getConnectedSigner, setSigner]);
  return {
    signer,
    getConnectedSigner: getConnectedSignerCb,
    address: signer?._address ?? null,
  };
};

export const useConnectedSigner = (): JsonRpcSigner | null => {
  const getConnectedSigner = useGetConnectedSigner();
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  useEffect(() => {
    void (async () => {
      setSigner(await getConnectedSigner());
    })();
  }, [getConnectedSigner, setSigner]);
  return signer;
};
