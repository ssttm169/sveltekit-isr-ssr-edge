import * as server from '../entries/pages/ssr/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/ssr/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/ssr/_page.svelte-f9270c79.js';
export { server };
export const imports = ["_app/immutable/components/pages/ssr/_page.svelte-f9270c79.js","_app/immutable/chunks/index-8e1005e2.js"];
export const stylesheets = [];
export const fonts = [];
