import React, { FC } from "react";
import { Chat } from "./Chat";

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

// const Chat: FC = () => {
//   const dispatch = useDispatch<any>();
//   const status = useSelector((state: AppStateType) => state.chat.status);

//   useEffect(() => {
//     dispatch(startMessagesListening());

//     return () => dispatch(stopMessagesListening());
//   }, []);

//   return (
//     <div>
//       {status === "error" && (
//         <div>Some error occurred. Please refresh page</div>
//       )}
//       <Messages />
//       <ChatAddMessageForm />
//     </div>
//   );
// };

// const Messages: FC = () => {
//   const messages = useSelector((state: AppStateType) => state.chat.messages);
//   const messagesAnchorRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     isAutoScrolling === true &&
//       messagesAnchorRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "end",
//       });
//   }, [messages]);

//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
//     const element = e.currentTarget;

//     if (
//       Math.abs(
//         element.scrollHeight - element.scrollTop - element.clientHeight
//       ) < 300
//     ) {
//       !isAutoScrolling && setIsAutoScrolling(true);
//     } else {
//       isAutoScrolling && setIsAutoScrolling(false);
//     }
//   };

//   return (
//     <div
//       style={{ height: "400px", overflowY: "auto" }}
//       onScroll={scrollHandler}
//     >
//       messages
//       {messages?.map((message: CHatMessageLocalType, i) => (
//         <Message key={message.id} {...message} />
//       ))}
//       <div ref={messagesAnchorRef}></div>
//     </div>
//   );
// };

// const Message: FC<ChatMessageType> = React.memo(
//   ({ photo, userName, message }) => {
//     console.log("message <<<<<<<<");
//     return (
//       <div style={{ marginBottom: "10px" }}>
//         <img
//           style={{ width: "50px", marginRight: "5px" }}
//           alt="avatar"
//           src={photo}
//         ></img>
//         <b>{userName}: </b>
//         {message}
//         <hr />
//       </div>
//     );
//   }
// );

// const ChatAddMessageForm: FC = () => {
//   const [message, setMessage] = useState<string>("");
//   const status = useSelector((state: AppStateType) => state.chat.status);
//   const dispatch = useDispatch();

//   const sendMessageHandler = () => {
//     if (!message) {
//       return;
//     }
//     dispatch(sendMessageThunk(message));
//     setMessage("");
//   };

//   const onEnterSend = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     e.preventDefault();
//     sendMessageHandler();
//   };

//   return (
//     <div>
//       <div>
//         <textarea
//           onChange={(e) => setMessage(e.target.value)}
//           value={message}
//           onKeyUp={(e) => e.key === "Enter" && !e.shiftKey && onEnterSend(e)}
//         />
//       </div>
//       <div>
//         <Button disabled={status !== "ready"} onClick={sendMessageHandler}>
//           Send
//         </Button>
//         {/* <Checkbox
//         value={autoScrolling}
//         onChange={() => setAutoScrolling((prev) => !prev)}
//         /> */}
//       </div>
//     </div>
//   );
// };
