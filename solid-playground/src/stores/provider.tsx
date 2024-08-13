import { createSignal, createContext, useContext } from "solid-js";

const StoreContext = createContext();

// FIXME
export function AppProvider(props: any) {
  const [count, setCount] = createSignal(props.count || 0);
  const counter = [
    count,
    {
      increment() {
        setCount((prev) => prev + 1);
      },
      decrement() {
        setCount((prev) => prev - 1);
      },
    },
  ];

  return (
    <StoreContext.Provider value={counter}>
      {props.children}
    </StoreContext.Provider>
  );
}

export function useCounter() {
  return useContext(StoreContext);
}
