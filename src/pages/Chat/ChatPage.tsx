import { Button } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendMessageThunk,
  startMessagesListening,
  stopMessagesListening,
} from "../../Redux/chat-reducer";
import { AppStateType } from "../../Redux/redux-store";

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ChatPage: FC = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

export default ChatPage;

const Chat: FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(startMessagesListening());

    return () => dispatch(stopMessagesListening());
  }, []);

  return (
    <div>
      <Messages />
      <ChatAddMessageForm />
    </div>
  );
};

const Messages: FC = () => {
  // const [messages, setMessages] = useState<Array<ChatMessageType>>([]);
  const messages = useSelector((state: AppStateType) => state.chat.messages);

  return (
    <div style={{ height: "400px", overflowY: "auto" }}>
      messages
      {messages?.map((message: ChatMessageType) => <Message {...message} />)}
    </div>
  );
};

const Message: FC<ChatMessageType> = ({ userId, photo, userName, message }) => {
  return (
    <div key={userId} style={{ marginBottom: "10px" }}>
      <img
        style={{ width: "50px", marginRight: "5px" }}
        alt="avatar"
        src={photo}
      ></img>
      <b>{userName}: </b>
      {message}
      <hr />
    </div>
  );
};

const ChatAddMessageForm: FC = () => {
  const [message, setMessage] = useState<string>("");
  const [readyStatus, setReadyStatus] = useState<"pending" | "ready">(
    "pending"
  );
  const dispatch = useDispatch();

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }
    dispatch(sendMessageThunk(message));
    setMessage("");
  };

  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <div>
        <Button onClick={sendMessageHandler}>Send</Button>
      </div>
    </div>
  );
};
