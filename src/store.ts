import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  session: JSON.parse(localStorage?.getItem?.("chat:session") || "null"),
});

onChange("session", async (value) => {
  localStorage.setItem("chat:session", JSON.stringify(value));
});

export default state;
