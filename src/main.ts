import "./style.css";
import PageHome from "./pages/home";
import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";
import { initializeApp } from "@firebase/app";
import AppRouter from "./router";
import PageLogin from "./pages/login";

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

declare global {
  interface HTMLElementTagNameMap {
    "app-router": AppRouter;
    "page-login": PageLogin;
    "page-home": PageHome;
  }
}
window.customElements.define("page-login", PageLogin);
window.customElements.define("page-home", PageHome);
window.customElements.define("app-router", AppRouter);

window.addEventListener("load", async () => {
  const routerEl = document.createElement("app-router");
  document.body.appendChild(routerEl);
  console.dir(routerEl.querySelector("ion-router"));
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
