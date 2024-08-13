import type { ParentComponent } from "solid-js";

const AuthLayout: ParentComponent = (props) => {
  return <div class="font-mono">{props.children}</div>;
};

export default AuthLayout;
