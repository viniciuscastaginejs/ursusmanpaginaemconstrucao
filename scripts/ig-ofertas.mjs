// Busca o catálogo de parceiro da Instant Gaming e gera ig/ofertas.json
// com 6 "Em destaque" (Top sellers) e 6 "Maiores descontos".
// Roda pelo GitHub Actions (.github/workflows/ig-ofertas.yml).
// Regras da IG: user agent IG-ExportCatalog-Fetcher, no máximo 1x por hora,
// nunca no minuto 0. Se o feed falhar, o arquivo antigo é mantido.

import { readFile, writeFile, mkdir } from 'node:fs/promises';

const AFILIADO = 'ursusman';
const QTD = 6;
const SAIDA = new URL('../ig/ofertas.json', import.meta.url);
const FEED = `https://www.instant-gaming.com/pt/exportCatalog/json/?igr=${AFILIADO}&currency=BRL&topseller=1`;

// Itens que não são jogos (cartões pré-pagos, saldo, assinaturas)
const NAO_JOGO = /gift ?card|cart[aã]o|wallet|saldo|prepaid|pr[ée]-?pago|points|pontos|v-?bucks|robux|credits|cr[ée]ditos|subscription|assinatura|membership|game pass|ps plus|playstation plus|xbox live|nintendo switch online|ea play|ubisoft\+/i;

const num = v => {
  if (typeof v === 'number') return v;
  const n = parseFloat(String(v ?? '').replace(/[^\d.,-]/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
};

function linkAfiliado(url) {
  try {
    const u = new URL(url, 'https://www.instant-gaming.com');
    u.searchParams.set('igr', AFILIADO);
    return u.toString();
  } catch { return `https://www.instant-gaming.com/pt/?igr=${AFILIADO}`; }
}

function normaliza(p) {
  const price = num(p.price);
  const retail = num(p.retail);
  let discount = Math.round(num(p.discount));
  if (!discount && retail > price && retail > 0) discount = Math.round((1 - price / retail) * 100);
  return {
    id: Number(p.id),
    name: String(p.name || '').trim(),
    img: String(p.img || ''),
    price,
    retail: retail > price ? retail : null,
    discount: discount > 0 ? discount : 0,
    type: String(p.type || ''),
    region: String(p.region || ''),
    url: linkAfiliado(p.url),
    topseller: Number(p.topseller) === 1,
  };
}

async function main() {
  const res = await fetch(FEED, { headers: { 'User-Agent': 'IG-ExportCatalog-Fetcher', Accept: 'application/json' } });
  const texto = await res.text();
  if (!res.ok) throw new Error(`Feed respondeu ${res.status}: ${texto.slice(0, 120)}`);
  let dados;
  try { dados = JSON.parse(texto); } catch { throw new Error(`Feed não é JSON: ${texto.slice(0, 120)}`); }
  const lista = Array.isArray(dados) ? dados : Object.values(dados.products || dados.data || dados);

  const jogos = lista
    .filter(p => Number(p.stock) === 1)
    .map(normaliza)
    .filter(p => p.name && p.img && p.price > 0 && !NAO_JOGO.test(p.name));

  if (jogos.length < QTD * 2) throw new Error(`Poucos produtos válidos no feed (${jogos.length})`);

  const tops = jogos.filter(p => p.topseller);
  // Maiores descontos: entre os Top 200 (se houver), para não aparecer jogo desconhecido
  const baseDesc = (tops.length >= QTD * 2 ? tops : jogos.filter(p => (p.retail || 0) >= 40))
    .filter(p => p.discount > 0);
  const descontos = [...baseDesc].sort((a, b) => b.discount - a.discount || (b.retail || 0) - (a.retail || 0)).slice(0, QTD);
  const usados = new Set(descontos.map(p => p.id));

  // Em destaque: Top sellers que não estão nos descontos, os títulos maiores primeiro
  const baseTop = tops.length >= QTD ? tops : jogos;
  const destaques = baseTop
    .filter(p => !usados.has(p.id))
    .sort((a, b) => (b.retail || b.price) - (a.retail || a.price))
    .slice(0, QTD);

  const limpa = ({ topseller, ...p }) => p;
  const novo = {
    atualizado: new Date().toISOString(),
    destaques: destaques.map(limpa),
    descontos: descontos.map(limpa),
  };

  // Só reescreve se os jogos/preços mudaram (evita commit a cada execução)
  let antigo = null;
  try { antigo = JSON.parse(await readFile(SAIDA, 'utf8')); } catch {}
  const chave = o => JSON.stringify([o?.destaques, o?.descontos]);
  if (antigo && chave(antigo) === chave(novo)) { console.log('Sem mudanças.'); return; }

  await mkdir(new URL('.', SAIDA), { recursive: true });
  await writeFile(SAIDA, JSON.stringify(novo, null, 2) + '\n');
  console.log(`OK: ${destaques.length} destaques, ${descontos.length} descontos (de ${jogos.length} jogos).`);
}

main().catch(e => {
  // Não derruba o site: mantém o ofertas.json anterior
  console.error('Falha ao atualizar ofertas:', e.message);
  process.exitCode = 1;
});
