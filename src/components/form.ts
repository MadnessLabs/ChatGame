import { LitElement, html, css } from "lit";

export default class FireEnjinForm extends LitElement {
  formEl?: any;
  disabled?: boolean;
  endpoint?: string;
  formData?: any = {};
  // This will opt you out of ShadowDOM
  // createRenderRoot() {
  //   return this;
  // }

  // How we set props without decorators
  static get properties() {
    return {
      endpoint: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
    };
  }

  // Ran once before the render
  constructor() {
    super();
    this.disabled = false;
    this.endpoint = "";
    this.formData = {};
  }

  // Runs only once after the component has finished render
  firstUpdated() {
    // Get the Form Element
    this.formEl = this.shadowRoot?.querySelector("form");
    // Listen for input and update our form data
    this.shadowRoot?.addEventListener("input", (event: any) => {
      if (!event?.target?.name) return;
      this.formData[event.target.name] = event?.target?.value;
    });
  }

  handleSlotchange(event: any) {
    console.log("Slot changed");
    const childNodes = event.target.assignedNodes();
    // ... do something with childNodes ...
    childNodes.forEach((childEl: any) => {
      if (childEl?.name) this.formData[childEl.name] = childEl?.value;
      const childInputEls = childEl?.querySelectorAll?.("[name]");
      if (childInputEls)
        childInputEls.forEach((el: any) => {
          if (!el?.name) return;
          this.formData[el.name] = el?.value;
        });
    });
  }

  // Runs when the form is submitted passed in @submit in render method
  submit(event: any) {
    event.preventDefault();
    console.log(event, this.formData);
    // Emit fireenjinSubmit event
    const FireEnjinSubmit = new CustomEvent("fireenjinSubmit", {
      bubbles: true,
      detail: {
        data: this.formData,
      },
    });
    this.dispatchEvent(FireEnjinSubmit);
  }

  // Set CSS styles
  static get styles() {
    return css`
      :host {
        display: var(--fireenjin-form-display, block);
        box-sizing: inherit;
      }
    `;
  }

  render() {
    return html`
      <form
        endpoint=${this.endpoint}
        disabled=${this.disabled}
        @submit=${this.submit}
      >
        <div class="form-wrapper">
          <slot @slotchange=${this.handleSlotchange}></slot>
        </div>
        <div class="form-controls">
          <button type="submit">Save</button>
        </div>
      </form>
    `;
  }
}

customElements.define("fireenjin-form", FireEnjinForm);
