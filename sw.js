self.addEventListener("install",e=>e.waitUntil(caches.open("mimo-v1").then(c=>c.addAll(["./","index.html","style.css","app.js","messages.json","pairs.json"])).then(()=>self.skipWaiting())));self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

