import React, { FC } from "react";
import { ChatMessageType } from "./ChatPage";

export const ChatMessage: FC<ChatMessageType> = React.memo(
  ({ photo, userName, message }) => {
    return (
      <div style={{ marginBottom: "10px" }}>
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
  }
);
