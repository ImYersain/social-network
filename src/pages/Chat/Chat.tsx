import React from "react";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startMessagesListening,
  stopMessagesListening,
} from "../../Redux/chat-reducer";
import { ChatMessages } from "./ChatMessages";
import { ChatAddMessageForm } from "./ChatAddMessageForm";
import { getChatData } from "../../Redux/chat-selectors";

export const Chat: FC = () => {
  const dispatch = useDispatch<any>();
  const status = useSelector(getChatData).status;

  useEffect(() => {
    dispatch(startMessagesListening());

    return () => dispatch(stopMessagesListening());
  }, []);

  return (
    <div>
      {status === "error" && (
        <div>Some error occurred. Please refresh page</div>
      )}
      <ChatMessages />
      <ChatAddMessageForm />
    </div>
  );
};
