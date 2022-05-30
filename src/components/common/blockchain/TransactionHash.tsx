import { ContractReceipt, ContractTransaction } from "ethers";
import React, { useEffect, useState } from "react";
import { Link, Text } from "theme-ui";
import { EXPLORER_BASE_URL } from "../../../util/config";

interface IProps {
  value: ContractTransaction | null;
}

export const TransactionHash: React.FC<IProps> = ({ value }: IProps) => {
  const [receipt, setReceipt] = useState<ContractReceipt | null>(null);
  useEffect(() => {
    if (value) {
      void (async () => {
        setReceipt(await value.wait());
      })();
    }
  }, [value]);

  if (!value) {
    return <Text sx={{ display: "block" }}>--</Text>;
  }
  return (
    <Link
      href={`${EXPLORER_BASE_URL}/tx/${value.hash}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value.hash}
      {receipt ? " (completed)" : ""}
    </Link>
  );
};
