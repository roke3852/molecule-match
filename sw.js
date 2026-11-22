/* Roke 的 App：離線支援（自動產生，請用 build/gen-sw.js 重建） */
const VER = "202611221435";
const CACHE = "roke-apps-" + VER, RUNTIME = "roke-runtime";
const LOCAL = ["./abc-chain/","./back-care/","./ball-stick/","./barista-guide/","./bean-hunter/","./blackcup/","./brew-log/","./brew-notes/inbox.json","./brew-notes/","./cafe-wishlist/","./cat-food/","./coffee-expo/","./coffee-lab-plan/","./coffee-recall/","./coffee-terroir/","./cupping/","./eink-notes/","./eink-notes/lines.js","./extraction-sim/","./fukuoka-trip/Cubic_11.woff2","./fukuoka-trip/Unifont.woff2","./fukuoka-trip/","./fukuoka-trip/zoo-map.webp","./gear-atlas/","./grinder-guide/","./","./molecule-reactions/","./molecule/","./molecule/privacy.html","./mtx-sim/","./outfit/","./sanchao/","./shengshi/","./smell-training/","./spelling/","./us-market/en/","./us-market/","./yoshi-combos/"];
const EXT = ["https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap","https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap","https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600&family=Noto+Sans+TC:wght@400;500;700;900&family=Press+Start+2P&display=swap","https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@700;900&display=swap","https://fonts.googleapis.com/css2?family=DotGothic16&family=Noto+Serif+TC:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;700&display=swap","https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap","https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@600;700&display=swap","https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;700&display=swap","https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js","https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@600;900&display=swap","https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@600;900&family=Noto+Sans+TC:wght@400;500;700&display=swap","https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@600;900&family=Noto+Sans+TC:wght@400;500;700&family=IBM+Plex+Mono:wght@500;600&display=swap","https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=IBM+Plex+Mono:wght@500&display=swap","https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&display=swap","https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Noto+Sans+JP:wght@500;700&display=swap","https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+TC:wght@400;500;700;900&display=swap","https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@700;900&display=swap","https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;800&family=JetBrains+Mono:wght@500;700&display=swap","https://cdn.jsdelivr.net/npm/smiles-drawer@1.2.0/dist/smiles-drawer.min.js","https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&family=Noto+Sans+TC:wght@400;500;700&display=swap","https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600;900&display=swap","https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&family=Noto+Sans+TC:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap","https://cdn.jsdelivr.net/npm/smiles-drawer@2.0.1/dist/smiles-drawer.min.js","https://fonts.googleapis.com/css2?family=Andika:wght@400;700&family=Baloo+2:wght@600;800&display=swap","https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Rubik:wght@600;800&family=JetBrains+Mono:wght@500;700&display=swap"];
const CDN = /^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com|cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com|unpkg\.com)\//;

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(LOCAL.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {})));
    const r = await caches.open(RUNTIME);
    await Promise.all(EXT.map(async u => {
      try {
        if (await r.match(u)) return;
        const res = await fetch(u, { mode: "cors" });
        if (res.ok) await r.put(u, res.clone());
      } catch (err) {}
    }));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("roke-apps-") && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

const timeout = (p, ms) => new Promise((ok, no) => { const t = setTimeout(() => no(new Error("timeout")), ms); p.then(v => { clearTimeout(t); ok(v) }, err => { clearTimeout(t); no(err) }) });

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin && url.pathname.startsWith(new URL("./", self.registration.scope).pathname)) {
    // 自己的檔案：先拿網路上的新版，網路慢或斷線就用快取
    e.respondWith((async () => {
      try {
        const res = await timeout(fetch(req), 4000);
        if (res.ok) { const c = await caches.open(CACHE); c.put(url.origin + url.pathname, res.clone()); }
        return res;
      } catch (err) {
        const key = url.origin + url.pathname;
        const hit = (await caches.match(key, { ignoreSearch: true })) ||
          (await caches.match(key.replace(/index\.html$/, ""), { ignoreSearch: true }));
        return hit || new Response("離線中，這個頁面還沒存到手機", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
      }
    })());
  } else if (CDN.test(req.url)) {
    // 字型與函式庫：快取優先，用過一次就存起來
    e.respondWith((async () => {
      const c = await caches.open(RUNTIME);
      const hit = await c.match(req, { ignoreVary: true });
      if (hit) return hit;
      try { const res = await fetch(req); if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }
      catch (err) { return hit || Response.error(); }
    })());
  }
});

self.addEventListener("message", async e => {
  if (e.data === "status") {
    const c = await caches.open(CACHE);
    const keys = await c.keys();
    e.source.postMessage({ type: "status", ver: VER, cached: keys.length, total: LOCAL.length });
  }
});
