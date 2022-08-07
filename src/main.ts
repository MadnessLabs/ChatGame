import "./style.css";
import { setupCounter } from "./counter";
import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";
import { initializeApp } from "@firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyBg-JMXxVXG6-eMqqzZLIXnYosnYGETHfs",
  authDomain: "madness-chat.firebaseapp.com",
  databaseURL: "https://madness-chat-default-rtdb.firebaseio.com",
  projectId: "madness-chat",
  storageBucket: "madness-chat.appspot.com",
  messagingSenderId: "486880332851",
  appId: "1:486880332851:web:3a99734999c7b86a90a746",
  measurementId: "G-CCKK9GKY4K",
});
const auth = new AuthService({
  app,
});
auth.onAuthChanged((session: any) => {
  console.log(session);
});
const db = new DatabaseService({
  app,
});
const sdk = new FireEnjin({
  connections: [
    {
      name: "default",
      url: "https://madness.chat/api",
      type: "firebase",
      db,
    },
  ],
});

const res = await sdk.fetch("users", { id: "test" });
console.log(res);

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
