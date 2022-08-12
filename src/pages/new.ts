import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("page-new")
export default class PageNew extends LitElement {
  @property({ type: String })
  name = "CJ";

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <h1>${this.name}</h1>
      </div>
    `;
  }
}
