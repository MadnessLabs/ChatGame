import { LitElement, css, html, property } from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export default class PageLogin extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  render() {
    return html`
      <ion-button data-trigger="login" data-type="google"
        >Login with Google</ion-button
      >
      <div class="card">
        <h1>Counter</h1>
        <ion-button id="counter" type="button"></ion-button>
      </div>
      <ion-button href="#start">Start</ion-button>
    `;
  }

  static styles = css``;
}
