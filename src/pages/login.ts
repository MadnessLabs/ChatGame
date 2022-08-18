import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { observeState } from "lit-element-state";
import { appState } from "../store";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
// @ts-ignore
@customElement("page-login")
export default class PageLogin extends observeState(LitElement) {
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

  private _renderLoginButton() {
    return !appState?.session?.uid
      ? html`<ion-button
          @click=${(event: PointerEvent) =>
            this.dispatchEvent(
              new CustomEvent("fireenjinTrigger", {
                detail: { event },
                bubbles: true,
              })
            )}
          data-trigger="login"
          data-type="google"
        >
          Login with Google
        </ion-button>`
      : null;
  }

  render() {
    return html`
      ${this._renderLoginButton()}
      <div class="card">
        <fireenjin-accordion> </fireenjin-accordion>
        <fireenjin-form>
          <input name="name" value="Popcorn245" />
        </fireenjin-form>
        <h1>Counter</h1>
        <ion-button id="counter" type="button"></ion-button>
      </div>
      <ion-button href="/play">Play</ion-button>
    `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}
