import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-f22c370b.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-f22c370b.js","_app/immutable/chunks/index-8e1005e2.js","_app/immutable/chunks/stores-06992c39.js","_app/immutable/chunks/index-43523b37.js"];
export const stylesheets = ["_app/immutable/assets/_page-709e95b6.css"];
export const fonts = [];
