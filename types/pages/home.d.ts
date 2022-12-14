import { LitElement } from "lit-element";
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
    docsHint: string;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    static styles: import("lit-element").CSSResult;
}
