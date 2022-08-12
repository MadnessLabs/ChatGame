import "./style.css";
import { Router } from "@vaadin/router";
import { AuthService, DatabaseService, FireEnjin } from "@fireenjin/sdk";
import { initializeApp } from "@firebase/app";
import PageLogin from "./pages/login";
import PageHome from "./pages/home";
import PageNew from "./pages/new";
import PagePlay from "./pages/play";

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

auth.onAuthChanged(async (session: any) => {
  // state.session = session;
  const res = await sdk.fetch("users", { id: session?.uid });
  console.log(res);
});

document.addEventListener("fireenjinTrigger", (event: any) => {
  console.log(event);
  const clickedEl = event?.detail?.event?.target as HTMLElement;
  const trigger = clickedEl?.dataset?.trigger;
  if (trigger === "login") {
    const loginType = clickedEl?.dataset?.type as string;
    auth.withSocial(loginType);
  }
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
