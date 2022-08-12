import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("page-play")
export default class PagePlay extends LitElement {
  @property()
  name = "Mr. X";

  render() {
    return html`
      <div class="container">
        <div class="child">
          <p class="bold">${this.name}</p>
        </div>
      </div>
    `;
  }
  static styles = css`
    .container {
      background-color: bisque;
      width: 1000px;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
    }
    .child {
      margin: 0 auto;
    }
    .bold {
      font-weight: 900;
    }
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: crimson;
      cursor: pointer;
      transition: border-color 0.25s;
    }
  `;
}
