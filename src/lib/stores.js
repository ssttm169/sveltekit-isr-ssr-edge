import { writable } from 'svelte/store';


function createLink() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        updateLink: (props) => update(n => props),
        reset: () => set([])
    };
}


function createLinkIndex() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        updateIndex: (props) => update(n => props),
        reset: () => set(0)
    };
}


export const LinkDataState = createLink();

export const LinkIndexState = createLinkIndex();