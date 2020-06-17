import { updateContainer } from "./reconciler";

export function render(element, container) {
  const rootFiber = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: null,
  };
  updateContainer(rootFiber);
}
