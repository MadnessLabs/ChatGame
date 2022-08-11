import "./style.css";
import PageHome from "./pages/home";
declare global {
    interface HTMLElementTagNameMap {
        "page-home": PageHome;
    }
}
