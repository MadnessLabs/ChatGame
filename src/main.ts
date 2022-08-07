import "./style.css";
import { setupCounter } from "./counter";
import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";
import { initializeApp } from "@firebase/app";

let session = JSON.parse(localStorage?.getItem?.("chat:session") || "null");

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

auth.onAuthChanged(async (authSession: any) => {
  localStorage.setItem("chat:session", JSON.stringify(authSession));
  console.log(authSession);
  session = authSession;
  const res = await sdk.fetch("users", { id: authSession?.uid });
  console.log(res);
  if (session?.uid?.length)
    document
      .querySelectorAll('[data-trigger="login"]')
      .forEach((el) => el.remove());
});

window.addEventListener("load", async () => {
  document.querySelectorAll("[data-trigger]").forEach((el) =>
    el.addEventListener("click", (event) => {
      const triggerEl = event?.target as HTMLElement;
      const trigger = triggerEl?.dataset?.trigger;
      if (trigger === "login") {
        const loginType = triggerEl?.dataset?.type as string;
        auth.withSocial(loginType);
      }
    })
  );
});

window.addEventListener("hashchange", (event) => {
  console.log(event);
});

setupCounter(db, document.querySelector<HTMLButtonElement>("#counter")!);
