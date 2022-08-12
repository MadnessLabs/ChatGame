import { LitElement, css, html, property } from "lit-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export default class PageHome extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <slot></slot>
      <ion-card class="card">
        <ion-button @click=${this._onClick} part="button">
          count is ${this.count}
        </ion-button>
      </ion-card>
      <p class="read-the-docs">${this.docsHint}</p>
    `;
  }

  private _onClick() {
    this.count++;
  }

  static styles = css`
    ion-button {
    }
  `;
}
