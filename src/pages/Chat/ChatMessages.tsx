import React from "react";
import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CHatMessageLocalType } from "../../Redux/chat-reducer";
import { ChatMessage } from "./ChatMessage";
import { getChatData } from "../../Redux/chat-selectors";

export const ChatMessages: FC = () => {
  const messages = useSelector(getChatData).messages;
  const messagesAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    isAutoScrolling === true &&
      messagesAnchorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
  }, [messages]);

  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;

    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 300
    ) {
      !isAutoScrolling && setIsAutoScrolling(true);
    } else {
      isAutoScrolling && setIsAutoScrolling(false);
    }
  };

  return (
    <div
      style={{ height: "400px", overflowY: "auto" }}
      onScroll={scrollHandler}
    >
      messages
      {messages?.map((message: CHatMessageLocalType, i) => (
        <ChatMessage key={message.id} {...message} />
      ))}
      <div ref={messagesAnchorRef}></div>
    </div>
  );
};
