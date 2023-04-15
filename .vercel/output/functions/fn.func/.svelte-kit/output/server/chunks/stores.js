import { w as writable } from "./index2.js";
function createLink() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    updateLink: (props) => update((n) => props),
    reset: () => set([])
  };
}
function createLinkIndex() {
  const { subscribe, set, update } = writable(0);
  return {
    subscribe,
    updateIndex: (props) => update((n) => props),
    reset: () => set(0)
  };
}
const LinkDataState = createLink();
const LinkIndexState = createLinkIndex();
export {
  LinkIndexState as L,
  LinkDataState as a
};
