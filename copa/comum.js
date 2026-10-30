/* ═════════════════════════════════════════════════════════════
   COPA DE CHARADA — código comum (chave + competidores)
   A tela da chave é o "juiz": sorteia as palavras, confere os
   palpites e conta os pontos. Os competidores conversam com ela
   por um servidor MQTT público, com mensagens criptografadas
   com o código da partida.
   ═════════════════════════════════════════════════════════════ */

// pontos por rodada conforme a tentativa em que acertou (1ª, 2ª, … 6ª); errou = 0
const POINTS = [10, 7, 5, 4, 3, 2];
const MAX_GUESSES = 6;
const NEXT_ROUND_MS = 6000;       // intervalo entre rodadas
const HEARTBEAT_MS = 3000;
const PLAYER_TIMEOUT_MS = 12000;
const HOST_TIMEOUT_MS = 15000;

const BROKERS = [
  'wss://broker.hivemq.com:8884/mqtt',
  'wss://broker.emqx.io:8084/mqtt'
];
const PARAMS = new URLSearchParams(location.search);
if (PARAMS.get('broker')) BROKERS.unshift(PARAMS.get('broker')); // só para testes
const TOPIC_ROOT = 'ursusman/copa/v1/';

const $ = id => document.getElementById(id);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  $('toast-container').appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
function randomId(n) {
  const a = new Uint8Array(n); crypto.getRandomValues(a);
  return [...a].map(x => 'abcdefghijkmnpqrstuvwxyz23456789'[x % 32]).join('');
}
function evaluateGuess(guess, word) {
  const res = Array(5); const freq = {};
  for (const ch of word) freq[ch] = (freq[ch] || 0) + 1;
  for (let i = 0; i < 5; i++) if (guess[i] === word[i]) { res[i] = { l: guess[i], r: 'correct' }; freq[guess[i]]--; }
  for (let i = 0; i < 5; i++) {
    if (res[i]) continue;
    if (freq[guess[i]] > 0) { res[i] = { l: guess[i], r: 'present' }; freq[guess[i]]--; }
    else res[i] = { l: guess[i], r: 'absent' };
  }
  return res;
}
function pointsFor(tries, solved) { return solved ? (POINTS[tries - 1] || 0) : 0; }

/* rede */
const _enc = new TextEncoder(), _dec = new TextDecoder();
async function deriveRoom(code) {
  const h = new Uint8Array(await crypto.subtle.digest('SHA-256', _enc.encode('ursus-copa:' + code)));
  const topicHash = [...h.slice(0, 12)].map(b => b.toString(16).padStart(2, '0')).join('');
  const key = await crypto.subtle.importKey('raw', h, 'AES-GCM', false, ['encrypt', 'decrypt']);
  return { base: TOPIC_ROOT + topicHash + '/', key };
}
async function seal(key, obj) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, _enc.encode(JSON.stringify(obj))));
  const out = new Uint8Array(12 + ct.length); out.set(iv); out.set(ct, 12);
  return out;
}
async function open_(key, buf) {
  const u = new Uint8Array(buf);
  if (u.length < 13) return null;
  try {
    const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: u.slice(0, 12) }, key, u.slice(12));
    return JSON.parse(_dec.decode(pt));
  } catch (e) { return null; }
}
function connectBroker(url, opts) {
  return new Promise((resolve, reject) => {
    if (!window.mqtt) return reject(new Error('mqtt'));
    const c = mqtt.connect(url, Object.assign({ connectTimeout: 9000, reconnectPeriod: 2000, keepalive: 20, clean: true }, opts));
    const fail = setTimeout(() => { try { c.end(true); } catch (e) {} reject(new Error('timeout')); }, 10000);
    c.once('connect', () => { clearTimeout(fail); resolve(c); });
    c.once('error', () => {});
  });
}

/* tabuleiro */
function renderBoard(el, guesses, opts) {
  opts = opts || {};
  el.innerHTML = '';
  for (let r = 0; r < MAX_GUESSES; r++) {
    const row = document.createElement('div'); row.className = 'board-row';
    const g = guesses[r];
    for (let i = 0; i < 5; i++) {
      const d = document.createElement('div');
      let cls = 'cell';
      if (g) {
        cls += ' ' + g[i].r;
        d.textContent = opts.hideLetters ? '' : g[i].l;
        if (opts.flipRow === r) { cls += ' flip'; d.style.animationDelay = (i * 0.12) + 's'; }
      } else if (opts.activeRow === r) {
        const ch = (opts.current || '')[i];
        cls += ' active-row' + (ch && ch !== ' ' ? ' filled' : '') + (opts.cursor === i ? ' cursor' : '');
        d.textContent = ch && ch !== ' ' ? ch : '';
        if (opts.onCell) d.addEventListener('click', () => opts.onCell(i));
      }
      d.className = cls;
      row.appendChild(d);
    }
    el.appendChild(row);
  }
}
