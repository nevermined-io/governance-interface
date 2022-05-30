import { useAsyncState } from "./useAsyncState";
import { useProvider } from "./useProviderOrSigner";

export const useLatestBlockNumber = () => {
  const provider = useProvider();
  const getBlockNumber = async () => {
    return provider ? await provider.getBlockNumber() : 0;
  };
  const [BlockNumber, RefreshBlockNumber] = useAsyncState(0, getBlockNumber);
  return { BlockNumber, RefreshBlockNumber };
};
