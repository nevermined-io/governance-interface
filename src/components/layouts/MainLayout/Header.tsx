import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useWeb3React } from "@web3-react/core";
import copyToClipboard from "copy-to-clipboard";
import Link from "next/link";
import React from "react";
import { Box, Button, Flex, Text } from "theme-ui";

import { injected } from "../../../util/Connector";

export const truncateAddress = (addr: string): string =>
  addr.slice(0, 6) + "..." + addr.slice(addr.length - 4);

export const Header: React.FC = () => {
  const { account, activate, deactivate } = useWeb3React();

  return (
    <Flex
      sx={{ justifyContent: "space-between", alignItems: "center" }}
      pt={[4, 3]}
      mb={4}
    >
      <Link href="/">
        <Text
          css={css`
            cursor: pointer;
            user-select: none;
          `}
        >
          <Text variant="logo" sx={{ fontSize: 4 }}>
            🏛️<Text sx={{ display: ["none", "inherit"] }}> Romulus</Text>
          </Text>
        </Text>
      </Link>
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Box
          sx={{ textAlign: "center", width: "100%", minWidth: "fit-content" }}
        >
          {account ? (
            <>
              <ClickableText
                onClick={() => {
                  copyToClipboard(account);
                }}
              >
                {truncateAddress(account)}{" "}
              </ClickableText>
              <br />
              <ClickableText
                color="secondary"
                onClick={() => {
                  void deactivate();
                }}
              >
                (disconnect)
              </ClickableText>
            </>
          ) : (
            <Button
              onClick={() => {
                void activate(injected);
              }}
            >
              Connect Wallet
            </Button>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

const ClickableText = styled(Text)`
  cursor: pointer;
`;
