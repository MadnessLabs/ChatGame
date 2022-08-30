import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("fireenjin-popover")
export class Popover extends LitElement {
  @property()
  open: boolean = false;
  @property()
  position?: "left" | "right" | "center";

  @state()
  left: string;

  toggle(event: any) {
    this.open = !this.open;
    this.left = event?.clientX;
  }
  static styles = [
    css`
      :host {
        display: block;
      }
      .container {
        background: inherit;
        color: inherit;
        border: none;
        font-size: 1rem;
      }
      .container:hover {
        cursor: pointer;
      }
    `,
  ];
  render() {
    return html`
      <button
        class="container"
        @click=${this.toggle}
        style="text-align:${this.position}"
      >
        <slot></slot>
        <div
          id="pop-id"
          class="popover-div"
          style=${`background: #ccc; left:${this.left}px; ${
            this.open ? "position: absolute;" : "opacity: 0; height: 0px;"
          }`}
        >
          <slot name="popover-content"></slot>
        </div>
      </button>
    `;
  }
}
