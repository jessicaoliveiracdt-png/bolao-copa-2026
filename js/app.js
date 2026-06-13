const F={"México":"🇲🇽","África do Sul":"🇿🇦","Coreia do Sul":"🇰🇷","Rep. Tcheca":"🇨🇿","Canadá":"🇨🇦","Bósnia":"🇧🇦","Catar":"🇶🇦","Suíça":"🇨🇭","Brasil":"🇧🇷","Marrocos":"🇲🇦","Haiti":"🇭🇹","Escócia":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","Estados Unidos":"🇺🇸","Paraguai":"🇵🇾","Austrália":"🇦🇺","Turquia":"🇹🇷","Alemanha":"🇩🇪","Curaçau":"🇨🇼","Costa do Marfim":"🇨🇮","Equador":"🇪🇨","Holanda":"🇳🇱","Japão":"🇯🇵","Suécia":"🇸🇪","Tunísia":"🇹🇳","Bélgica":"🇧🇪","Egito":"🇪🇬","Irã":"🇮🇷","Nova Zelândia":"🇳🇿","Espanha":"🇪🇸","Cabo Verde":"🇨🇻","Arábia Saudita":"🇸🇦","Uruguai":"🇺🇾","França":"🇫🇷","Senegal":"🇸🇳","Iraque":"🇮🇶","Noruega":"🇳🇴","Áustria":"🇦🇹","Jordânia":"🇯🇴","Argentina":"🇦🇷","Argélia":"🇩🇿","Portugal":"🇵🇹","RD do Congo":"🇨🇩","Uzbequistão":"🇺🇿","Colômbia":"🇨🇴","Inglaterra":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","Croácia":"🇭🇷","Gana":"🇬🇭","Panamá":"🇵🇦"};

// [id, dia, horário Brasília, grupo, time1, time2] — ordem cronológica
const MATCHES=[
["A0","11/06","16h","A","México","África do Sul"],
["A1","11/06","23h","A","Coreia do Sul","Rep. Tcheca"],
["B0","12/06","16h","B","Canadá","Bósnia"],
["D0","12/06","22h","D","Estados Unidos","Paraguai"],
["B1","13/06","16h","B","Catar","Suíça"],
["C0","13/06","19h","C","Brasil","Marrocos"],
["C1","13/06","22h","C","Haiti","Escócia"],
["D1","14/06","01h","D","Austrália","Turquia"],
["E0","14/06","14h","E","Alemanha","Curaçau"],
["F0","14/06","17h","F","Holanda","Japão"],
["E1","14/06","20h","E","Costa do Marfim","Equador"],
["F1","14/06","23h","F","Suécia","Tunísia"],
["H0","15/06","13h","H","Espanha","Cabo Verde"],
["G0","15/06","16h","G","Bélgica","Egito"],
["H1","15/06","19h","H","Arábia Saudita","Uruguai"],
["G1","15/06","22h","G","Irã","Nova Zelândia"],
["I0","16/06","16h","I","França","Senegal"],
["I1","16/06","19h","I","Iraque","Noruega"],
["J1","16/06","22h","J","Argentina","Argélia"],
["J0","17/06","01h","J","Áustria","Jordânia"],
["K0","17/06","14h","K","Portugal","RD do Congo"],
["L0","17/06","17h","L","Inglaterra","Croácia"],
["L1","17/06","20h","L","Gana","Panamá"],
["K1","17/06","21h","K","Uzbequistão","Colômbia"],
["A2","18/06","13h","A","Rep. Tcheca","África do Sul"],
["B2","18/06","16h","B","Suíça","Bósnia"],
["B3","18/06","19h","B","Canadá","Catar"],
["A3","18/06","22h","A","México","Coreia do Sul"],
["D3","19/06","16h","D","Estados Unidos","Austrália"],
["C2","19/06","19h","C","Escócia","Marrocos"],
["C3","19/06","21h30","C","Brasil","Haiti"],
["D2","20/06","00h","D","Turquia","Paraguai"],
["F3","20/06","14h","F","Holanda","Suécia"],
["E2","20/06","17h","E","Alemanha","Costa do Marfim"],
["E3","20/06","21h","E","Equador","Curaçau"],
["F2","20/06","23h","F","Tunísia","Japão"],
["H2","21/06","13h","H","Espanha","Arábia Saudita"],
["G2","21/06","16h","G","Bélgica","Irã"],
["H3","21/06","19h","H","Uruguai","Cabo Verde"],
["G3","21/06","22h","G","Nova Zelândia","Egito"],
["J2","22/06","14h","J","Argentina","Áustria"],
["I2","22/06","18h","I","França","Iraque"],
["I3","22/06","21h","I","Noruega","Senegal"],
["J3","23/06","00h","J","Jordânia","Argélia"],
["K2","23/06","14h","K","Portugal","Uzbequistão"],
["L2","23/06","17h","L","Inglaterra","Gana"],
["L3","23/06","20h","L","Panamá","Croácia"],
["K3","23/06","23h","K","Colômbia","RD do Congo"],
["B4","24/06","16h","B","Suíça","Canadá"],
["B5","24/06","16h","B","Bósnia","Catar"],
["C4","24/06","19h","C","Escócia","Brasil"],
["C5","24/06","19h","C","Marrocos","Haiti"],
["A4","24/06","22h","A","Rep. Tcheca","México"],
["A5","24/06","22h","A","África do Sul","Coreia do Sul"],
["E4","25/06","17h","E","Equador","Alemanha"],
["E5","25/06","17h","E","Curaçau","Costa do Marfim"],
["F4","25/06","20h","F","Japão","Suécia"],
["F5","25/06","20h","F","Tunísia","Holanda"],
["D4","25/06","23h","D","Turquia","Estados Unidos"],
["D5","25/06","23h","D","Paraguai","Austrália"],
["I4","26/06","16h","I","Noruega","França"],
["I5","26/06","16h","I","Senegal","Iraque"],
["H4","26/06","21h","H","Cabo Verde","Arábia Saudita"],
["H5","26/06","21h","H","Uruguai","Espanha"],
["G4","27/06","00h","G","Egito","Irã"],
["G5","27/06","00h","G","Nova Zelândia","Bélgica"],
["L4","27/06","18h","L","Panamá","Inglaterra"],
["L5","27/06","18h","L","Croácia","Gana"],
["K4","27/06","20h30","K","Colômbia","Portugal"],
["K5","27/06","20h30","K","RD do Congo","Uzbequistão"],
["J4","27/06","23h","J","Argélia","Áustria"],
["J5","27/06","23h","J","Jordânia","Argentina"]
];

const DOW={"11/06":"Quinta","12/06":"Sexta","13/06":"Sábado","14/06":"Domingo","15/06":"Segunda","16/06":"Terça","17/06":"Quarta","18/06":"Quinta","19/06":"Sexta","20/06":"Sábado","21/06":"Domingo","22/06":"Segunda","23/06":"Terça","24/06":"Quarta","25/06":"Quinta","26/06":"Sexta","27/06":"Sábado"};

const TOTAL=72;
let picks={},results={};
try{picks=JSON.parse(localStorage.getItem("bolao2026")||"{}")}catch(e){picks={}}
try{results=JSON.parse(localStorage.getItem("bolao2026res")||"{}")}catch(e){results={}}

function makeRow(m,info){
  const[id,,,,t1,t2]=m;
  const row=document.createElement("div");
  row.className="match";row.dataset.id=id;
  row.innerHTML=`
    <span class="mdate">${info}</span>
    <button class="team" data-v="1"><span class="fl">${F[t1]}</span><span class="nm">${t1}</span></button>
    <button class="draw" data-v="X">E</button>
    <button class="team right" data-v="2"><span class="fl">${F[t2]}</span><span class="nm">${t2}</span></button>
    <button class="res" title="Marcar certo / errado">·</button>`;
  row.querySelectorAll("[data-v]").forEach(b=>b.addEventListener("click",()=>pick(id,b.dataset.v)));
  row.querySelector(".res").addEventListener("click",()=>cycleRes(id));
  return row;
}

/* ===== SEÇÃO 1: POR DATA ===== */
const bydate=document.getElementById("bydate");
const dates=[...new Set(MATCHES.map(m=>m[1]))];
dates.forEach(d=>{
  const ms=MATCHES.filter(m=>m[1]===d);
  const card=document.createElement("div");card.className="group";
  card.innerHTML=`<div class="ghead"><span class="gname">${DOW[d]} · ${d}</span><span class="gsub">${ms.length} jogo${ms.length>1?"s":""}</span></div>`;
  ms.forEach(m=>card.appendChild(makeRow(m,`${m[2]} · Grupo ${m[3]}`)));
  bydate.appendChild(card);
});

/* ===== SEÇÃO 2: POR GRUPO ===== */
const bygroup=document.getElementById("bygroup");
"ABCDEFGHIJKL".split("").forEach(g=>{
  const ms=MATCHES.filter(m=>m[3]===g).sort((a,b)=>a[0]<b[0]?-1:1);
  const teams=[...new Set(ms.flatMap(m=>[m[4],m[5]]))];
  const card=document.createElement("div");card.className="group";
  card.innerHTML=`<div class="ghead"><span class="gname">Grupo ${g}</span><span class="gteams">${teams.map(t=>F[t]).join(" ")}</span></div>`;
  ms.forEach(m=>card.appendChild(makeRow(m,`${m[1]} · ${m[2]}`)));
  bygroup.appendChild(card);
});

/* ===== ESTADO (sincronizado entre as duas seções) ===== */
function rowsOf(id){return document.querySelectorAll(`.match[data-id="${id}"]`)}

function pick(id,v){
  if(picks[id]===v){delete picks[id];delete results[id]}else{picks[id]=v}
  if(!picks[id])delete results[id];
  rowsOf(id).forEach(r=>{paint(r,picks[id]);paintRes(r,results[id])});
  save();
}
function cycleRes(id){
  if(!picks[id])return;
  results[id]=results[id]==="ok"?"err":(results[id]==="err"?undefined:"ok");
  if(!results[id])delete results[id];
  rowsOf(id).forEach(r=>paintRes(r,results[id]));
  save();
}
function paint(row,v){
  row.classList.toggle("haspick",!!v);
  row.querySelectorAll("[data-v]").forEach(b=>{
    b.classList.remove("picked","loser");
    if(!v)return;
    if(b.dataset.v===v)b.classList.add("picked");
    else if(b.classList.contains("team"))b.classList.add("loser");
  });
}
function paintRes(row,r){
  row.classList.toggle("ok",r==="ok");
  row.classList.toggle("err",r==="err");
  row.querySelector(".res").textContent=r==="ok"?"✓":(r==="err"?"✗":"·");
}
function save(){
  localStorage.setItem("bolao2026",JSON.stringify(picks));
  localStorage.setItem("bolao2026res",JSON.stringify(results));
  const n=Object.keys(picks).length;
  const ok=Object.values(results).filter(r=>r==="ok").length;
  const err=Object.values(results).filter(r=>r==="err").length;
  document.getElementById("count").innerHTML=
    n+" / "+TOTAL+" palpites"+
    ((ok||err)?` · <span style="color:var(--green)">${ok} ✓</span> · <span style="color:var(--red)">${err} ✗</span>`:"");
  document.getElementById("fill").style.width=(n/TOTAL*100)+"%";
}
function resetAll(){
  if(!confirm("Limpar todos os palpites?"))return;
  picks={};results={};
  document.querySelectorAll(".match").forEach(r=>{paint(r,null);paintRes(r,null)});
  save();
}
document.querySelectorAll(".match").forEach(r=>{paint(r,picks[r.dataset.id]);paintRes(r,results[r.dataset.id])});
save();

/* ===== NOME DO JOGADOR ===== */
const playerEl=document.getElementById("player");
playerEl.value=localStorage.getItem("bolao2026nome")||"";
playerEl.addEventListener("input",()=>localStorage.setItem("bolao2026nome",playerEl.value.trim()));

/* ===== COMPARTILHAR / IMPORTAR ===== */
function encode(){
  const data={n:playerEl.value.trim()||"Anônimo",p:picks,r:results};
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}
function decode(str){
  return JSON.parse(decodeURIComponent(escape(atob(str.trim()))));
}
function sharePicks(){
  const code=encode();
  const link=location.href.split("#")[0]+"#b="+code;
  const msg="⚽ Bolão da Copa 2026 — palpites de "+(playerEl.value.trim()||"Anônimo")+
    "\n\nPara importar: abra o seu arquivo do bolão, toque em IMPORTAR PALPITES e cole o código abaixo:\n\n"+code;
  const done=()=>alert("Copiado! Cole no WhatsApp ou onde quiser.\n\nQuem receber importa pelo botão 'Importar palpites'.");
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(msg).then(done).catch(()=>prompt("Copie o texto abaixo:",msg));
  }else{prompt("Copie o texto abaixo:",msg)}
  // se a página estiver hospedada online, o link direto também funciona:
  if(location.protocol.startsWith("http"))console.log("Link direto:",link);
}
function importPicks(){
  const input=prompt("Cole aqui o código (ou link) de palpites recebido:");
  if(!input)return;
  loadShared(input.includes("#b=")?input.split("#b=")[1]:input);
}
function loadShared(code){
  let data;
  try{data=decode(code)}catch(e){alert("Código inválido. Confira se copiou tudo.");return}
  if(!confirm("Carregar palpites de \""+(data.n||"Anônimo")+"\"?\n\nIsso substitui os palpites salvos neste navegador."))return;
  picks=data.p||{};results=data.r||{};
  document.querySelectorAll(".match").forEach(r=>{paint(r,picks[r.dataset.id]);paintRes(r,results[r.dataset.id])});
  save();
  alert("Palpites de \""+(data.n||"Anônimo")+"\" carregados!");
}
/* expõe as funções usadas pelos botões inline */
window.sharePicks=sharePicks;
window.importPicks=importPicks;
window.resetAll=resetAll;
/* link com #b=... abre direto com os palpites */
if(location.hash.startsWith("#b="))loadShared(location.hash.slice(3));
