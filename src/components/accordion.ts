import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("fireenjin-accordion")
export class Accordion extends LitElement {
  @property()
  expanded = false;

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
      <div
        class="header-wrapper"
        @click=${this.toggle}
        style="cursor: pointer;"
      >
        Toggle
      </div>
      <div
        class="content-wrapper"
        style=${`background: #ccc; transition: all ease 0.3s; ${
          this.expanded
            ? "opacity: 1; height: 100px;"
            : "opacity: 0; height: 0px;"
        }`}
      >
        Testing
      </div>
    </div>`;
  }
}
