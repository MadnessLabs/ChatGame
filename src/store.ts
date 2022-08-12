import { LitState, stateVar } from "lit-element-state";

class MyState extends LitState {
  @stateVar() counter = 0;
}

export const myState = new MyState();
