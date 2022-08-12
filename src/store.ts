import { LitState } from "lit-element-state";

class AppState extends LitState {
  static get stateVars() {
    return {
      session: JSON.parse(localStorage?.getItem?.("chat:session") || "null"),
    };
  }
}

export const appState = new AppState() as LitState & { session?: any };
