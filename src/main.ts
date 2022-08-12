import "./style.css";
import { Router } from "@vaadin/router";
import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";
import { initializeApp } from "@firebase/app";
import PageLogin from "./pages/login";
import PageHome from "./pages/home";
import PageNew from "./pages/new";
import PagePlay from "./pages/play";

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
});

declare global {
  interface HTMLElementTagNameMap {
    "page-home": PageHome;
    "page-login": PageLogin;
    "page-new": PageNew;
    "page-play": PagePlay;
  }
}
const outletEl = document.querySelector('[role="main"]');
export const router = new Router(outletEl);

router.setRoutes([
  {
    path: "/",
    component: "page-login",
    action: async () => {
      await import("./pages/login");
      if (session?.uid?.length)
        document
          .querySelectorAll('[data-trigger="login"]')
          .forEach((el) => el.remove());
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
    },
  },
  {
    path: "/home",
    component: "page-home",
    action: async () => {
      await import("./pages/home");
    },
  },
  {
    path: "/new",
    component: "page-new",
    action: async () => {
      await import("./pages/new");
    },
  },
  {
    path: "/play",
    component: "page-play",
    action: async () => {
      await import("./pages/play");
    },
  },
]);
