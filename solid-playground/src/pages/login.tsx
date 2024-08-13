import { JSX } from "solid-js";
import { A } from "@solidjs/router";

export default function Login(): JSX.Element {
  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Sign in</h1>
      <p>
        <A href="/">back to homepage</A>
      </p>
    </section>
  );
}
