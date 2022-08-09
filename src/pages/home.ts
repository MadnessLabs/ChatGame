export default class PageHome extends HTMLElement {
  name = "Look Ma no JSX!";
  counter = 0;

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.render();
    const buttonEl = this.querySelector("ion-button") as HTMLElement;
    if (buttonEl)
      buttonEl.onclick = () => {
        console.log("clicked", this.counter);
        this.counter = this.counter + 1;
        this.connectedCallback();
      };
  }

  render() {
    return `<div>${this.name}<span>${this.counter}</span><ion-button>Add One</ion-button></div>`;
  }
}
