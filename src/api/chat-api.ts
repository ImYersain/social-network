type SubscriberType = (messages: ChatMessageType[]) => void;

let subscribers = [] as SubscriberType[];

let ws: WebSocket | null = null;

const closeHandler = () => {
    console.log("close ws");
    setTimeout(createChannel, 3000);
};
const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages));
}


function createChannel() {
    ws?.removeEventListener("close", closeHandler);
    ws?.close();

    ws = new WebSocket(
      "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
    );
    ws.addEventListener("close", closeHandler);
    ws.addEventListener("message", messageHandler);
  }



export const chatAPI = {
    start: () => {
        createChannel();
    },

    stop: () => {
        subscribers = [];
        ws?.removeEventListener("close", closeHandler);
        ws?.removeEventListener("message", messageHandler);
        ws?.close();
    },

    subscribe: (callback: SubscriberType) => {
        subscribers.push(callback);
        return () => {
            subscribers = subscribers.filter(item => item !== callback);
        }
    },

    unsunscribe: (callback: SubscriberType) => {
        subscribers = subscribers.filter(item => item !== callback);
    },

    sendMessage: (message: string) => {
        ws?.send(message);
    }
}

export type ChatMessageType = {
    message: string;
    photo: string;
    userId: number;
    userName: string;
  };