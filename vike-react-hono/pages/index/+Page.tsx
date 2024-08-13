import React from "react";
import { Counter } from "./Counter.js";

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-3xl pb-4">React Vike App</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
