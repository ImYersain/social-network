import React from "react";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../Redux/chat-reducer";
import { Button } from "antd";
import { getChatData } from "../../Redux/chat-selectors";

export const ChatAddMessageForm: FC = () => {
  const [message, setMessage] = useState<string>("");
  const status = useSelector(getChatData).status;
  const dispatch = useDispatch();

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }
    dispatch(sendMessageThunk(message));
    setMessage("");
  };

  const onEnterSend = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    sendMessageHandler();
  };

  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyUp={(e) => e.key === "Enter" && !e.shiftKey && onEnterSend(e)}
        />
      </div>
      <div>
        <Button disabled={status !== "ready"} onClick={sendMessageHandler}>
          Send
        </Button>
      </div>
    </div>
  );
};
