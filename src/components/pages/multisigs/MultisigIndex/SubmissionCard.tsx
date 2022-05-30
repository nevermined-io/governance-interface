import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { FunctionCall } from "../../../common/FunctionCall";
import { Submission } from ".";
import { Card, Link, Text } from "theme-ui";
import { EXPLORER_BASE_URL } from "../../../../util/config";

interface Props {
  submission: Submission;
}

export const SubmissionCard: React.FC<Props> = ({ submission }: Props) => {
  return (
    <Card>
      <Text mr={2}>{submission.id}</Text>
      <Link
        href={`${EXPLORER_BASE_URL}/tx/${submission.submissionHash}`}
        target="_blank"
        rel="noreferrer"
      >
        <FaExternalLinkAlt />
      </Link>
      <FunctionCall
        address={submission.destination}
        data={submission.data}
        value={submission.value}
      />
    </Card>
  );
};
