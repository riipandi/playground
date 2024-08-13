/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import type { Component } from "solid-js";

import { AppProvider } from "#/stores/provider";
import RootLayout from "#/layouts/root-layout";
import routes from "#/routes";

import "./assets/styles/main.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Check if it's in your index.html or if the id is correct."
  );
}

const App: Component = () => {
  return (
    <AppProvider count={1}>
      <Router root={RootLayout} preload={false} children={routes} />
    </AppProvider>
  );
};

render(() => <App />, root!);
