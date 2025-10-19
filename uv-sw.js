importScripts("https://cdn.jsdelivr.net/gh/NebuliLabs/uv@master/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
