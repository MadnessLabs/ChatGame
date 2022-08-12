import { LitElement, html, css, property, customElement } from "lit-element";

@customElement("page-new")
export class PageNew extends LitElement {
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
