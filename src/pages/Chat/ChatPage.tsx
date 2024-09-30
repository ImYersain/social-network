import { Button } from "antd";
import React, { FC, useEffect, useState } from "react";

const wsChannel = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);

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
  return (
    <div>
      <Messages />
      <ChatAddMessageForm />
    </div>
  );
};

const Messages: FC = () => {
  const [messages, setMessages] = useState<Array<ChatMessageType>>([]);

  useEffect(() => {
    wsChannel.addEventListener("message", (e: MessageEvent) => {
      const newMessages = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    });
  }, []);

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
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message) {
      return;
    }
    wsChannel.send(message);
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
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
};
