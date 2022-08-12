import { LitElement, css, html, property } from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export default class AppRouter extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  render() {
    return html`
      <ion-router use-hash="false">
        <ion-router url="/" component="page-login"></ion-router>
        <ion-router url="/login" component="page-login"></ion-router>
        <ion-router url="/home" component="page-home"></ion-router>
      </ion-router>
    `;
  }

  static styles = css``;
}
