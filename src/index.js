import logMessage from "./js/logger";
import "./css/style.css";

logMessage("Welcome To Expack!");

if (typeof module.hot !== "undefined") {
  module.hot.accept(); // eslint-disable-link no undef
}
