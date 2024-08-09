/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";

// biome-ignore lint/style/noNonNullAssertion: div#root in index.html
const root = document.getElementById("root")!;

render(() => <App />, root);
