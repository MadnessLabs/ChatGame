import { DatabaseService } from "@fireenjin/sdk";

export function setupCounter(db: DatabaseService, element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    db.update("counters", "test", {
      count,
    });
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(++counter));
  setCounter(0);
}
