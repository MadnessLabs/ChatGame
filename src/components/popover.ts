import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("fireenjin-popover")
export class Popover extends LitElement {
  @property()
  open: boolean = false;
  @property()
  label: any;
  @property()
  position?: "left" | "right" | "center";

  toggle(event: any) {
    this.open = !this.open;
    console.log(event);
    let popEl = this.shadowRoot.querySelector("#pop-id") as HTMLDivElement;
    console.log(popEl.style, event.clientX);
    popEl.style.left = event?.clientX;
  }
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  render() {
    return html`
      <div
        class="container"
        @click=${this.toggle}
        style="cursor:pointer; text-align:${this.position}"
      >
        ${this.label}
        <div
          id="pop-id"
          class="popover-div"
          style=${`background: #ccc; left:auto; ${
            this.open ? "position: absolute;" : "opacity: 0; height: 0px;"
          }`}
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}
