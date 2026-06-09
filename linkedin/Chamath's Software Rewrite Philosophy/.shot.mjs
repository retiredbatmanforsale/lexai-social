import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import path from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const htmlPath = process.argv[2];
const outPath = process.argv[3];
const W = 1480, H = 833, SCALE = 2;
const fileUrl = 'file://' + path.resolve(htmlPath);

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars',
  '--allow-file-access-from-files', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=9222', '--user-data-dir=/tmp/cdp-shot',
  `--window-size=${W},${H}`, 'about:blank'
], { stdio: 'ignore' });

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch('http://127.0.0.1:9222/json/list');
      const list = await r.json();
      const page = list.find(t => t.type === 'page');
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(150);
  }
  throw new Error('Chrome devtools not reachable');
}

const wsUrl = await getWs();
const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let nextId = 1;
const pending = new Map();
const loadWaiters = [];
ws.onmessage = ev => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); }
  if (msg.method === 'Page.loadEventFired') { while (loadWaiters.length) loadWaiters.shift()(); }
};
const cmd = (method, params = {}) => new Promise(res => {
  const id = nextId++;
  pending.set(id, res);
  ws.send(JSON.stringify({ id, method, params }));
});

await cmd('Page.enable');
await cmd('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: SCALE, mobile: false });
const loaded = new Promise(res => loadWaiters.push(res));
await cmd('Page.navigate', { url: fileUrl });
await loaded;
await sleep(700); // let local fonts + grain settle

const { data } = await cmd('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: true,
  clip: { x: 0, y: 0, width: W, height: H, scale: SCALE }
});
writeFileSync(outPath, Buffer.from(data, 'base64'));
ws.close();
chrome.kill();
console.log('wrote', outPath, `(${W * SCALE}x${H * SCALE})`);
process.exit(0);
