import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("fireenjin-accordion")
export class Accordion extends LitElement {
  @property()
  expanded = true;

  toggle() {
    this.expanded = !this.expanded;
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<div>
      <div class="header-wrapper" @click=${this.toggle}>Toggle</div>
      ${this.expanded ? html`<div class="content-wrapper">Testing</div>` : null}
    </div>`;
  }
}
