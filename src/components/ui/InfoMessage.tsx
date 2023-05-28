import React, { FC, useEffect } from "react";
import { message } from "antd";

export const InfoMessageTypes = {
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
} as const;

export type InfoMessageType =
  (typeof InfoMessageTypes)[keyof typeof InfoMessageTypes];

interface InfoMessageProps {
  text: string;
  type: InfoMessageType;
}

const InfoMessage: FC<InfoMessageProps> = ({ text, type }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    text !== "" &&
      messageApi.open({
        type: type,
        content: text,
      });
  }, [text]);

  return <>{contextHolder}</>;
};

export default InfoMessage;
