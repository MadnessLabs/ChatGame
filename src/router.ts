import { Router } from "@vaadin/router";
const outlet = document.querySelector("#outlet");
export const router = new Router(outlet);

router.setRoutes([
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
