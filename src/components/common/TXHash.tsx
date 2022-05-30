import React from "react";
import { Link, Text } from "theme-ui";
import { EXPLORER_BASE_URL } from "../../util/config";

interface Props {
  value?: string | null;
  truncate?: boolean;
}

export const TXHash: React.FC<Props> = ({ value, truncate = true }: Props) => {
  if (!value) {
    return <Text sx={{ display: "block" }}>--</Text>;
  }
  const rendered = truncate
    ? `${value.slice(0, 15)}...${value.slice(value.length - 5)}`
    : value;
  return (
    <Link
      href={`${EXPLORER_BASE_URL}/tx/${value}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {rendered}
    </Link>
  );
};
