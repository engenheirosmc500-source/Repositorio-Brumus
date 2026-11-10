/* Brumus Agência — scripts do site */
// >>> TROQUE AQUI pelo WhatsApp da Brumus: 55 + DDD + número, só dígitos (ex.: 5582999998888)
const WHATSAPP = "5500000000000";
const MAP = window.BRAZIL_MAP;
const INFO = {
 ac:["Rio Branco","Norte"],al:["Maceió","Nordeste"],ap:["Macapá","Norte"],am:["Manaus","Norte"],ba:["Salvador","Nordeste"],ce:["Fortaleza","Nordeste"],
 df:["Brasília","Centro-Oeste"],es:["Vitória","Sudeste"],go:["Goiânia","Centro-Oeste"],ma:["São Luís","Nordeste"],mt:["Cuiabá","Centro-Oeste"],ms:["Campo Grande","Centro-Oeste"],
 mg:["Belo Horizonte","Sudeste"],pa:["Belém","Norte"],pb:["João Pessoa","Nordeste"],pr:["Curitiba","Sul"],pe:["Recife","Nordeste"],pi:["Teresina","Nordeste"],
 rj:["Rio de Janeiro","Sudeste"],rn:["Natal","Nordeste"],rs:["Porto Alegre","Sul"],ro:["Porto Velho","Norte"],rr:["Boa Vista","Norte"],sc:["Florianópolis","Sul"],
 sp:["São Paulo","Sudeste"],se:["Aracaju","Nordeste"],to:["Palmas","Norte"]
};
// Depoimentos: substitua pelos depoimentos reais (modelo: true mostra o selo "Modelo")
const DEPOIMENTOS = [
  {nome:"Tom", negocio:"Proprietário da Em Casa Eventos · Goiânia/GO", instagram:"emcasa.eventos", foto:"assets/img/depoimento-tom-em-casa-eventos.jpg", texto:"A Brumus entendeu exatamente o que a Em Casa Eventos é: um espaço completo para eventos exclusivos. O site ficou bonito, rápido e transmite a sofisticação do nosso espaço. O vídeo comercial mostrou nossos três ambientes, o LED e toda a estrutura do jeito que sempre quisemos apresentar. Atendimento atencioso do início ao fim. Recomendo!"},
  {nome:"Chácara Alegria", negocio:"Ribeirão Preto/SP", instagram:"chacaraalegriarp", foto:"assets/img/logo-chacara-alegria.jpg", texto:"A Brumus fez o nosso site e o vídeo comercial, e os dois mostram a Chácara Alegria do jeito que ela é: elegante, acolhedora e perfeita para celebrar. Ficou com cara de produção profissional e hoje é a nossa principal apresentação para quem pede orçamento."},
  {nome:"Gerson", negocio:"Proprietário da Chácara Família Fontes · Lagarto/SE", instagram:"chacarafamiliafontes", foto:"assets/img/logo-chacara-familia-fontes.jpg", texto:"A Brumus entendeu o clima tropical e familiar da nossa chácara e transformou isso em um vídeo comercial lindo. Atendimento rápido, atencioso e com resultado acima do que eu esperava. Recomendo de olhos fechados."},
  {nome:"Carla", negocio:"Proprietária do Sanfest Club · Guarulhos/SP", instagram:"sanfestclub", foto:"assets/img/logo-sanfest-club.jpg", texto:"Piscina, salão coberto, espaço de jogos e área gourmet: o comercial da Brumus mostrou tudo o que o Sanfest Club oferece de um jeito claro e bonito. Foi fácil trabalhar com eles do começo ao fim."},
  {nome:"Renato Caputo", negocio:"Proprietário da Casa Verde Ocidental · Cidade Ocidental/GO", instagram:"casaverdeocidental", foto:"assets/img/logo-casa-verde-ocidental.jpg", texto:"A Brumus valorizou cada detalhe do nosso espaço e deixou a Casa Verde com uma apresentação muito mais profissional. Equipe comprometida e que cumpre o que promete."},
  {nome:"Vitor", negocio:"Proprietário da Chácara Santa Fé · Goiânia/GO", instagram:"chacara.santafe1", foto:"assets/img/logo-chacara-santa-fe.jpg", texto:"Ficamos muito felizes com o trabalho da Brumus. O comercial mostrou a Chácara Santa Fé como um lugar de gente feliz, do jeito que a gente sempre quis. Atendimento próximo, mesmo à distância."},
  {nome:"Marcão Braz", negocio:"Darvida Soluções em Compostagem · São Bernardo do Campo/SP", instagram:"darvida.br", foto:"assets/img/logo-darvida.jpg", texto:"Explicar compostagem de forma simples não é fácil, e a Brumus conseguiu. O vídeo comercial ficou claro, bonito e passa exatamente a proposta da Darvida. Parceria que recomendo."},
  {nome:"Evandro", negocio:"Proprietário da Chácara Florestal · São Paulo/SP", instagram:"chacara_florestal", foto:"assets/img/logo-chacara-florestal.jpg", texto:"A Brumus captou a natureza e o charme da Chácara Florestal com muita sensibilidade. O comercial ficou elegante e ajuda casais e famílias a se imaginarem celebrando aqui."},
  {nome:"Teixeira", negocio:"Proprietário do Espaço Teixeira Eventos · Goiânia/GO", instagram:"espacoteixeiraeventos", foto:"assets/img/logo-espaco-teixeira.jpg", texto:"Boate com LED, piscina aquecida, hidro e espaço gourmet: a Brumus destacou cada diferencial do Espaço Teixeira. Trabalho profissional, rápido e com ótimo atendimento."},
  {nome:"Casa de Eventos FSA", negocio:"Feira de Santana/BA", instagram:"casa.eventos.fsa2023", foto:"assets/img/logo-casa-de-eventos-fsa.jpg", texto:"O vídeo comercial da Brumus apresentou nosso espaço com o conceito moderno que queríamos. Ficou profissional, chamou atenção nas redes e foi entregue no prazo combinado."},
  {nome:"Vlamir", negocio:"Proprietário da Chácara Porto Velho · Porto Velho/RO", foto:"assets/img/logo-chacara-porto-velho.jpg", texto:"Mesmo de Rondônia, foi como ter a Brumus aqui do lado. O vídeo comercial mostrou o verde, a tranquilidade e o jeito acolhedor da Chácara Porto Velho. Ficou profissional e já ajuda a apresentar o nosso espaço para quem procura um lugar para celebrar."}
];
const STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>';
const testi = document.getElementById("testi");
DEPOIMENTOS.forEach(d=>{
  const c = document.createElement("article"); c.className = "tcard";
  const ini = d.modelo ? "?" : d.nome.split(" ").map(w=>w[0]).slice(0,2).join("").toUpperCase();
  c.innerHTML = `<div class="stars" aria-label="5 de 5 estrelas">${STAR.repeat(5)}</div><blockquote></blockquote><div class="tperson"><div class="tav"></div><div><b></b><small></small></div></div>`;
  c.querySelector("blockquote").textContent = d.modelo ? d.texto : "“" + d.texto + "”";
  if(d.foto){ const im = document.createElement("img"); im.src = d.foto; im.alt = "Foto de " + d.nome; im.width = 44; im.height = 44; c.querySelector(".tav").appendChild(im); }
  else c.querySelector(".tav").textContent = ini;
  c.querySelector("b").textContent = d.nome; c.querySelector("small").textContent = d.negocio;
  if(d.modelo){ const m = document.createElement("span"); m.className = "tmodel"; m.textContent = "Modelo"; c.prepend(m); }
  if(d.instagram){
    const a = document.createElement("a"); a.className = "ig"; a.href = "https://www.instagram.com/" + d.instagram + "/"; a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("aria-label", "Abrir o Instagram @" + d.instagram);
    a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg><span></span>';
    a.querySelector("span").textContent = "@" + d.instagram;
    c.querySelector(".tperson small").after(a);
  }
  testi.appendChild(c);
});
// Carrossel de depoimentos: movimento contínuo e suave
(function(){
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const originals = [...testi.children];
  originals.forEach(c=>{ const k = c.cloneNode(true); k.setAttribute("aria-hidden","true"); k.querySelectorAll("a").forEach(a=>a.tabIndex=-1); testi.appendChild(k); });
  const step = ()=> (testi.children[0]?.getBoundingClientRect().width || 300) + 20;
  const half = ()=> testi.scrollWidth / 2;
  let pos = 0, last = 0, pausedUntil = 0, hover = false, visible = false, anim = null;
  const SPEED = 32; // pixels por segundo
  const wrap = ()=>{ const h = half(); if(pos >= h) pos -= h; if(pos < 0) pos += h; };
  function frame(now){
    const dt = Math.min(64, now - (last || now)); last = now;
    if(anim){ const k = Math.min(1,(now - anim.t0)/550), e = 1 - Math.pow(1-k,3); pos = anim.from + anim.dist*e; if(k>=1) anim = null; }
    else if(!reduce && !hover && visible && now > pausedUntil) pos += SPEED*dt/1000;
    wrap(); testi.scrollLeft = pos;
    requestAnimationFrame(frame);
  }
  function jump(dir){ wrap(); anim = {from:pos, dist:dir*step(), t0:performance.now()}; pausedUntil = performance.now() + 2500; }
  document.getElementById("t-prev").addEventListener("click", ()=>{ if(pos - step() < 0) pos += half(); jump(-1); });
  document.getElementById("t-next").addEventListener("click", ()=>jump(1));
  const wrapEl = testi.parentElement;
  wrapEl.addEventListener("mouseenter", ()=>hover = true);
  wrapEl.addEventListener("mouseleave", ()=>hover = false);
  wrapEl.addEventListener("focusin", ()=>hover = true);
  wrapEl.addEventListener("focusout", ()=>hover = false);
  // arrastar com o dedo
  testi.addEventListener("touchstart", ()=>{ pausedUntil = Infinity; }, {passive:true});
  testi.addEventListener("touchend", ()=>{ pos = testi.scrollLeft; pausedUntil = performance.now() + 2500; }, {passive:true});
  testi.addEventListener("scroll", ()=>{ if(pausedUntil === Infinity) pos = testi.scrollLeft; }, {passive:true});
  if("IntersectionObserver" in window) new IntersectionObserver(es=>es.forEach(e=>visible = e.isIntersecting)).observe(testi); else visible = true;
  requestAnimationFrame(frame);
})();
// Clientes atendidos (portfólio)
const CLIENTES = [
  {nome:"Chácara Alegria", local:"Ribeirão Preto/SP", logo:"assets/img/logo-chacara-alegria.jpg"},
  {nome:"Chácara Família Fontes", local:"Lagarto/SE", logo:"assets/img/logo-chacara-familia-fontes.jpg"},
  {nome:"Sanfest Club", local:"Guarulhos/SP", logo:"assets/img/logo-sanfest-club.jpg"},
  {nome:"Casa Verde Ocidental", local:"Cidade Ocidental/GO", logo:"assets/img/logo-casa-verde-ocidental.jpg"},
  {nome:"Chácara Santa Fé", local:"Goiânia/GO", logo:"assets/img/logo-chacara-santa-fe.jpg"},
  {nome:"Darvida Soluções em Compostagem", local:"São Bernardo do Campo/SP", logo:"assets/img/logo-darvida.jpg"},
  {nome:"Chácara Florestal", local:"São Paulo/SP", logo:"assets/img/logo-chacara-florestal.jpg"},
  {nome:"Espaço Teixeira Eventos", local:"Goiânia/GO", logo:"assets/img/logo-espaco-teixeira.jpg"},
  {nome:"Casa de Eventos FSA", local:"Feira de Santana/BA", logo:"assets/img/logo-casa-de-eventos-fsa.jpg"},
  {nome:"Chácara Porto Velho", local:"Porto Velho/RO", logo:"assets/img/logo-chacara-porto-velho.jpg"}
];
const track = document.getElementById("logo-track");
const makeItem = (c, hidden)=>{
  const li = document.createElement("li"); li.className = "logo-item"; if(hidden) li.setAttribute("aria-hidden","true");
  li.innerHTML = `<img alt="" width="52" height="52"><span><b></b><small></small></span>`;
  li.querySelector("img").src = c.logo; li.querySelector("img").alt = hidden ? "" : "Logo " + c.nome;
  li.querySelector("b").textContent = c.nome; li.querySelector("small").textContent = c.local;
  return li;
};
CLIENTES.forEach(c=>track.appendChild(makeItem(c,false)));
CLIENTES.forEach(c=>track.appendChild(makeItem(c,true)));
const REG_TXT = {
 "Norte":"Na região Norte, onde muitas vezes o cliente está longe, um bom site e um agente de IA no WhatsApp fazem seu negócio ser encontrado e responder na hora, mesmo fora do expediente.",
 "Nordeste":"No Nordeste, com turismo forte e comércio local muito ativo, landing pages e anúncios bem segmentados levam clientes da sua cidade e de fora direto para o seu WhatsApp.",
 "Centro-Oeste":"No Centro-Oeste, onde agronegócio, serviços e comércio crescem rápido, automações com IA ajudam a atender mais gente sem aumentar a equipe.",
 "Sudeste":"No Sudeste, a concorrência no digital é alta. Um site rápido, SEO local e comerciais bem produzidos fazem sua marca se destacar entre tantas opções.",
 "Sul":"No Sul, clientes pesquisam bastante antes de decidir. Um site que transmite confiança e um atendimento ágil com IA fazem a diferença na escolha."
};
const svg = document.getElementById("map");
svg.setAttribute("viewBox", "0 0 728 639");
const ns = "http://www.w3.org/2000/svg";
const paths = {};
const sorted = [...MAP.l].sort((a,b)=>a.n.localeCompare(b.n,"pt-BR"));
const tip = document.getElementById("map-tip"), box = svg.parentElement;
MAP.l.forEach((s,i)=>{
  const p = document.createElementNS(ns,"path");
  p.setAttribute("d", s.p); p.setAttribute("class","st"); p.dataset.id = s.id;
  p.style.animationDelay = (i*45) + "ms";
  const t = document.createElementNS(ns,"title"); t.textContent = s.n + " — atendido"; p.appendChild(t);
  p.addEventListener("mousemove", e=>{
    const r = box.getBoundingClientRect();
    tip.hidden = false; tip.textContent = s.n + " (" + s.id.toUpperCase() + ") · atendido ✓";
    tip.style.left = (e.clientX - r.left) + "px"; tip.style.top = (e.clientY - r.top) + "px";
  });
  p.addEventListener("mouseleave", ()=>tip.hidden = true);
  svg.appendChild(p); paths[s.id] = p;
});
const fuf = document.getElementById("f-uf");
sorted.forEach(s=>fuf.add(new Option(s.n + " (" + s.id.toUpperCase() + ")", s.id)));
fuf.value = "sp";
const $ = id => document.getElementById(id);
const regList = document.getElementById("reg-list");
["Norte","Nordeste","Centro-Oeste","Sudeste","Sul"].forEach(reg=>{
  const ufs = Object.keys(INFO).filter(k=>INFO[k][1]===reg).sort();
  const li = document.createElement("li"); li.tabIndex = 0;
  li.innerHTML = `<div class="reg-top"><span>${reg}</span><small><span class="ck sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>${ufs.length} de ${ufs.length} atendidos</small></div><div class="ufs">${ufs.map(u=>`<span>${u.toUpperCase()}</span>`).join("")}</div>`;
  const on = ()=>{ svg.classList.add("dim"); ufs.forEach(u=>paths[u].classList.add("on")); };
  const off = ()=>{ svg.classList.remove("dim"); ufs.forEach(u=>paths[u].classList.remove("on")); };
  li.addEventListener("mouseenter", on); li.addEventListener("mouseleave", off);
  li.addEventListener("focus", on); li.addEventListener("blur", off);
  regList.appendChild(li);
});

// Selo de pagamento seguro: reanima a checklist quando entra na tela
const secure = document.getElementById("secure");
if("IntersectionObserver" in window){
  new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ secure.classList.remove("play"); void secure.offsetWidth; secure.classList.add("play"); }
  }),{threshold:.45}).observe(secure);
}
const presence = document.getElementById("presence");
if("IntersectionObserver" in window){
  new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){ [presence,svg].forEach(el=>el.classList.remove("play","lit")); void presence.offsetWidth; presence.classList.add("play"); svg.classList.add("lit"); }
  }),{threshold:.3}).observe(presence);
}
// ===== Animações de entrada =====
(function(){
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector(".site-header");
  const onScroll = ()=>header.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, {passive:true}); onScroll();
  // contadores do topo
  if(!reduce) document.querySelectorAll("[data-count]").forEach(el=>{
    const n = +el.dataset.count, suf = el.dataset.suf || "", t0 = performance.now() + 500, dur = 1400;
    const tick = now=>{ const k = Math.min(1, Math.max(0,(now - t0)/dur)); el.textContent = Math.round(n*(1-Math.pow(1-k,3))) + suf; if(k<1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
  // ícones que se desenham
  document.querySelectorAll(".svc-icon svg *, .trust-item svg *").forEach(s=>{ s.setAttribute("pathLength","1"); s.setAttribute("data-d",""); });
  if(reduce || !("IntersectionObserver" in window)) return;
  const groups = [".sec-head",".svc",".chip",".map-box",".panel",".step",".member",".trust-item",".pay-flow li",".method",".secure",".testi",".faq details",".contact-info",".form"];
  const els = [];
  groups.forEach(sel=>{
    const byParent = new Map();
    document.querySelectorAll(sel).forEach(el=>{
      const i = byParent.get(el.parentElement) || 0; byParent.set(el.parentElement, i+1);
      el.dataset.rvDelay = Math.min(i*90, 540); els.push(el);
    });
  });
  const vh = innerHeight;
  const io = new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target; io.unobserve(el);
    el.style.animationDelay = el.dataset.rvDelay + "ms";
    el.classList.remove("rv"); el.classList.add("rv-in","draw-in");
    el.addEventListener("animationend", ev=>{ if(ev.target===el){ el.style.animationDelay = ""; } }, {once:true});
  }), {threshold:.12, rootMargin:"0px 0px -6% 0px"});
  els.forEach(el=>{ if(el.getBoundingClientRect().top > vh*.92){ el.classList.add("rv"); io.observe(el); } else el.classList.add("draw-in"); });
  // linha do processo
  const steps = document.querySelector(".steps");
  new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ steps.classList.add("go"); o.disconnect(); } }),{threshold:.4}).observe(steps);
})();
// Sede em Maceió
const HQ = (()=>{ const b = paths.al.getBBox(); return [b.x + b.width*.74, b.y + b.height*.62]; })();
(function(){
  const [x,y] = HQ, g = document.createElementNS(ns,"g"); g.setAttribute("class","hq");
  const lx = x + 22, ly = y + 30;
  g.innerHTML = `<line class="hq-line" x1="${x}" y1="${y}" x2="${lx}" y2="${ly-2}"/>
    <g class="hq-tag" transform="translate(${lx} ${ly})"><rect x="0" y="-2" width="96" height="44" rx="8"/><text class="t1" x="11" y="14">SEDE</text><text class="t2" x="11" y="33">Maceió · AL</text></g>
    <circle class="hq-pulse" cx="${x}" cy="${y}" r="7"/><circle class="hq-pulse d2" cx="${x}" cy="${y}" r="7"/><circle class="hq-dot" cx="${x}" cy="${y}" r="7"/>`;
  svg.appendChild(g);
  paths.al.querySelector("title").textContent = "Alagoas — sede da Brumus em Maceió";
})();
// Checks verdes saindo do mapa
(function(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const arcs = document.createElementNS(ns,"g"); arcs.setAttribute("class","arcs"); svg.insertBefore(arcs, svg.querySelector(".hq"));
  const layer = document.createElementNS(ns,"g"); layer.setAttribute("class","pk-layer"); svg.insertBefore(layer, svg.querySelector(".hq"));
  const centers = {};
  // ajustes finos de centro para estados com formato irregular
  const nudge = {pa:[10,10], ma:[0,10], pe:[10,0], go:[0,6], mg:[6,0], sp:[4,6], rj:[0,-2], sc:[4,0], ba:[-6,4], to:[0,8]};
  const center = id=>{
    if(!centers[id]){ const b = paths[id].getBBox(), n = nudge[id]||[0,0]; centers[id] = [b.x+b.width/2+n[0], b.y+b.height/2+n[1]]; }
    return centers[id];
  };
  function pop(id){
    const [x,y] = center(id);
    const delay = id==="al" ? 0 : 520;
    if(id!=="al"){
      const [hx,hy] = HQ, mx = (hx+x)/2, my = (hy+y)/2, dx = x-hx, dy = y-hy, L = Math.hypot(dx,dy);
      const cx = mx - dy/L*L*.22, cy = my + dx/L*L*.22 * -1 + 0;
      const a = document.createElementNS(ns,"path");
      a.setAttribute("d",`M${hx.toFixed(1)} ${hy.toFixed(1)} Q${(mx + dy*.22).toFixed(1)} ${(my - Math.abs(dx)*.22 - 10).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`);
      a.setAttribute("class","arc"); a.setAttribute("pathLength","1");
      arcs.appendChild(a); setTimeout(()=>a.remove(), 2000);
    }
    setTimeout(()=>{ if(running) place(x,y); }, delay);
  }
  function place(x,y){
    const g = document.createElementNS(ns,"g"); g.setAttribute("transform",`translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    g.innerHTML = `<circle class="pk-ring" r="10"/><g class="pk"><circle class="b" r="10.5"/><path d="M-4.6 0.2l3.2 3.3 6.2-6.6"/></g>`;
    layer.appendChild(g);
    setTimeout(()=>g.remove(), 2400);
  }
  const ids = MAP.l.map(s=>s.id);
  let loop = null, running = false, order = [], k = 0;
  const shuffle = a=>{ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
  function start(){
    if(running) return; running = true;
    layer.innerHTML = "";
    ids.forEach((id,i)=>setTimeout(()=>running && pop(id), 200 + i*60));
    setTimeout(()=>{
      if(!running) return;
      loop = setInterval(()=>{
        if(k >= order.length){ order = shuffle(ids.slice()); k = 0; }
        pop(order[k++]);
      }, 650);
    }, 200 + ids.length*60 + 1600);
  }
  function stop(){ running = false; clearInterval(loop); loop = null; }
  new IntersectionObserver(es=>es.forEach(e=> e.isIntersecting ? start() : stop()), {threshold:.35}).observe(svg);
})();
// Formulário: monta a mensagem e abre o WhatsApp
document.getElementById("lead-form").addEventListener("submit", e=>{
  e.preventDefault();
  const nome = $("f-nome").value.trim(), tel = $("f-tel").value.trim();
  const ok = $("form-ok");
  if(!nome || !tel){
    ok.hidden = false;
    ok.innerHTML = "<b>Preencha seu nome e WhatsApp</b><span>Precisamos desses dados para retornar o contato.</span>";
    (nome ? $("f-tel") : $("f-nome")).focus();
    return;
  }
  const uf = fuf.options[fuf.selectedIndex].text;
  const txt = `Olá, Brumus! Sou ${nome} (${uf}). Tenho interesse em: ${$("f-svc").value}.` + ($("f-msg").value.trim() ? `\n\n${$("f-msg").value.trim()}` : "") + `\n\nMeu WhatsApp: ${tel}`;
  const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(txt);
  ok.hidden = false;
  ok.innerHTML = "";
  const h = document.createElement("b"); h.textContent = "Mensagem pronta, " + nome.split(" ")[0] + ".";
  const p = document.createElement("span"); p.textContent = "Toque no botão para abrir o WhatsApp com sua mensagem preenchida e enviar para nossa equipe.";
  const a = document.createElement("a"); a.href = url; a.target = "_blank"; a.rel = "noopener"; a.className = "btn btn-dark"; a.textContent = "Abrir WhatsApp";
  ok.append(h, p, a);
});
