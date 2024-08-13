import { JSX, createSignal, onMount } from "solid-js";

export default function Home(): JSX.Element {
  // const [count, { increment, decrement }] = useCounter();
  const [count, setCount] = createSignal<number>(0);

  let btnRef: HTMLButtonElement;

  onMount(() => {
    btnRef!.focus();
  });

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <h1 class="text-2xl font-bold">Home</h1>
      <p class="mt-4">This is the home page.</p>

      <div class="flex items-center space-x-2">
        <button
          class="border rounded-lg px-2 border-gray-900"
          onClick={() => setCount(count() - 1)}
        >
          -
        </button>

        <output class="p-10px">Count: {count()}</output>

        <button
          class="border rounded-lg px-2 border-gray-900"
          onClick={() => setCount(count() + 1)}
          ref={(el) => (btnRef = el)}
        >
          +
        </button>
      </div>
    </section>
  );
}
