import { createEffect, JSX, Suspense } from "solid-js";
import { useCounter } from "#/stores/provider";

export default function About(): JSX.Element {
  // FIXME
  const [count] = useCounter();

  createEffect(() => {
    console.info("NAME:", count());
  });

  return (
    <section class="bg-pink-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">About</h1>
      <p class="mt-4">A page all about this website.</p>
      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{count()}</span>
        </Suspense>
      </p>
    </section>
  );
}
