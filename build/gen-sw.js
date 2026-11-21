// 產生 sw.js：預先快取整個 repo 的 App 檔案＋外部字型 CSS、函式庫
const fs = require('fs'), path = require('path'), cp = require('child_process');
const root = process.argv[2];
const files = cp.execSync('git ls-files -co --exclude-standard', { cwd: root }).toString().trim().split('\n')
  .filter(f => !/\.(md|txt)$/i.test(f) && !/^(sw\.js|\.|build\/)/.test(f) && !/(^|\/)admin\.json$/.test(f));
const local = files.map(f => f === 'index.html' ? './' : f.replace(/(^|\/)index\.html$/, '$1')).map(f => f === './' ? f : './' + f);
const ext = new Set();
for (const f of files.filter(f => /\.(html|js)$/.test(f))) {
  const s = fs.readFileSync(path.join(root, f), 'utf8');
  (s.match(/https:\/\/fonts\.googleapis\.com\/css2?\?[^"'`) ]+/g) || []).forEach(u => ext.add(u.replace(/&amp;/g, '&')));
  (s.match(/https:\/\/(cdn\.jsdelivr\.net\/npm|cdnjs\.cloudflare\.com\/ajax\/libs|unpkg\.com)\/[^"'`) ]+\.(js|css)/g) || []).forEach(u => ext.add(u));
}
const ver = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12);
const sw = `/* Roke 的 App：離線支援（自動產生，請用 build/gen-sw.js 重建） */
const VER = "${ver}";
const CACHE = "roke-apps-" + VER, RUNTIME = "roke-runtime";
const LOCAL = ${JSON.stringify(local, null, 0)};
const EXT = ${JSON.stringify([...ext], null, 0)};
const CDN = /^https:\\/\\/(fonts\\.googleapis\\.com|fonts\\.gstatic\\.com|cdn\\.jsdelivr\\.net|cdnjs\\.cloudflare\\.com|unpkg\\.com)\\//;

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
          (await caches.match(key.replace(/index\\.html$/, ""), { ignoreSearch: true }));
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
`;
fs.writeFileSync(path.join(root, 'sw.js'), sw);
console.log('files', local.length, 'ext', ext.size, 'ver', ver);
