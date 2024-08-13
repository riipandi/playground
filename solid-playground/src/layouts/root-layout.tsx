import { For, type ParentComponent } from "solid-js";
import { A, useLocation } from "@solidjs/router";

const RootLayout: ParentComponent = (props) => {
  const location = useLocation();

  const navlinks = [
    { href: "/", label: "Home", end: true },
    { href: "/about", label: "About" },
    { href: "/auth/login", label: "Sign in" },
    { href: "/auth/register", label: "Register" },
  ];

  return (
    <>
      <nav class="bg-gray-200 text-gray-900 px-4">
        <ul class="flex items-center">
          <For each={navlinks} fallback={<div>Loading...</div>}>
            {(item) => (
              <li class="py-2 px-4">
                <A
                  href={item.href}
                  class="hover:underline"
                  activeClass="underline"
                  inactiveClass="no-underline"
                  end={item.end}
                >
                  {item.label}
                </A>
              </li>
            )}
          </For>

          <li class="text-sm flex items-center space-x-1 ml-auto">
            <span>URL:</span>
            <input
              type="text"
              class="w-75px p-1 bg-white text-sm rounded-lg"
              value={location.pathname}
              readOnly
            />
          </li>
        </ul>
      </nav>

      <main>{props.children}</main>
    </>
  );
};

export default RootLayout;
