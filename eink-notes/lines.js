(function(){var el=document.getElementById("p-lines");if(!el)return;el.innerHTML="<style>\n.ln-ctrl{display:flex;flex-direction:column;gap:10px}\n.ln-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.ln-btn{font:500 14px var(--sans);border:1px solid var(--line);background:var(--panel);color:var(--fg);border-radius:8px;padding:6px 12px;cursor:pointer;min-height:36px}\n.ln-btn:hover{border-color:var(--accent)}\n.ln-play{margin-left:auto}\n.ln-now{flex:1;min-width:150px}.ln-now .l{font-size:12px;color:var(--muted)}.ln-now .v{font-weight:700;font-size:17px}\n#lnRange{width:100%;accent-color:var(--accent)}\n.ln-chips{display:flex;flex-wrap:wrap;gap:5px}\n.ln-chips button{font:500 12px var(--mono);border:1px solid var(--line);background:var(--panel);color:var(--muted);border-radius:999px;padding:3px 9px;cursor:pointer}\n.ln-chips button[aria-pressed=\"true\"]{background:var(--accent);border-color:var(--accent);color:var(--panel)}\n.ln-late{display:inline-block;font-size:12px;font-weight:500;padding:1px 8px;border-radius:999px;background:rgba(235,104,52,.15);color:#c2501f;white-space:nowrap}\n.ln-dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:6px;vertical-align:0}\n.ln-big{font-size:18px;font-weight:700;display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.ln-act{margin-top:6px;font-size:13px;color:var(--muted)}\n</style>\n  <header>\n    <div class=\"eyebrow\">產線時程互動圖 · 2022～2026 共 17 次法說</div>\n    <h1>每條新產線，公司每次說什麼時候量產？</h1>\n    <div class=\"sub\">選一次法說會，看當時公司對 H4、H5、H6、觀音新廠給的量產／貢獻時間，以及跟前一次相比是延後還是不變。</div>\n  </header>\n\n  <section>\n    <div class=\"card ln-ctrl\">\n      <div class=\"ln-row\">\n        <button type=\"button\" class=\"ln-btn\" id=\"lnPrev\" aria-label=\"上一次法說\">◀</button>\n        <div class=\"ln-now\"><div class=\"l\">選定的法說會</div><div class=\"v\" id=\"lnNow\"></div></div>\n        <button type=\"button\" class=\"ln-btn\" id=\"lnNext\" aria-label=\"下一次法說\">▶</button>\n        <button type=\"button\" class=\"ln-btn ln-play\" id=\"lnPlay\">▶ 播放</button>\n      </div>\n      <input type=\"range\" id=\"lnRange\" min=\"0\" max=\"16\" value=\"16\" step=\"1\" aria-label=\"選擇法說會\">\n      <div class=\"ln-chips\" id=\"lnChips\"></div>\n    </div>\n  </section>\n\n  <section>\n    <h2>當時的預期（藍色）vs 之前的說法（灰色）</h2>\n    <div class=\"card\" style=\"padding:10px 6px 4px\"><div id=\"lnGantt\" style=\"position:relative;width:100%\"></div>\n      <div class=\"legend\" style=\"padding:6px 8px 2px\">\n        <span><i style=\"background:var(--accent);border-radius:2px\"></i>這次法說的預期</span>\n        <span><i style=\"background:var(--muted);opacity:.35;border-radius:2px\"></i>之前法說的說法</span>\n        <span><i style=\"background:#eb6834;height:3px\"></i>比上次延後</span>\n        <span><i style=\"background:transparent;border:2px solid var(--fg);width:9px;height:9px;transform:rotate(45deg);border-radius:1px\"></i>實際量產</span>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h2 id=\"lnCardsTitle\">這次法說，每條線怎麼說</h2>\n    <div class=\"grid2\" id=\"lnCards\"></div>\n  </section>\n\n  <section>\n    <h2>延後軌跡：每次法說說的時間點</h2>\n    <div class=\"card\" style=\"padding:10px 6px 4px\"><div id=\"lnSlip\" style=\"position:relative;width:100%\"></div>\n      <div class=\"legend\" style=\"padding:6px 8px 2px\" id=\"lnSlipLegend\"></div>\n    </div>\n    <p class=\"note\">橫軸是法說日期，縱軸是公司當時說的量產／貢獻時間。線越往右上斜，代表每開一次法說就往後延一次；如果時程守得住，線會是水平的。虛線是「法說當天」，越貼近虛線代表「總是說快了」。</p>\n  </section>\n\n  <section class=\"key\">\n    <h2>怎麼看這張圖</h2>\n    <ul>\n      <li><b>H4</b> 是唯一只小延後的線：2022 年 3 月說 2022 Q4，最後 2023 Q2 量產，延約 2 季（設備交期）。</li>\n      <li><b>H5</b> 的線從 2024 一路斜到 2025 下半年，2024～2025 年幾乎每次法說都在「明年／下半年」之間移動，最後良率拖了一年多。</li>\n      <li><b>H6</b> 的線最陡：2022 年說 2025，2024 年變 2026，2025 年變 2027，2026 年 8 月又變 2028，平均每年延一年。</li>\n      <li><b>觀音新廠</b>從「2025 年底～2026 量產」變成「新建 2028～2029 完工」，期間還改了做法（承租既有廠房、先放一條線）。</li>\n    </ul>\n    <p class=\"note\">時間點依各季筆記整理；公司用語不一（量產、貢獻、開出產能），圖上統一當作「開始量產／貢獻」。只講年份的畫成整年長條。沒提到的那次沿用上一次說法，並標「未更新」。</p>\n  </section>\n";})();

(function(){
var CALLS=["2022-03-23","2022-05-18","2022-08-17","2022-11-17","2023-03-09","2023-05-17","2023-08-16","2024-03-07","2024-05-22","2025-03-05","2025-05-21","2025-08-13","2025-11-19","2026-03-12","2026-05-08","2026-08-13","2026-11-12"];
var CALLQ={"2022-03-23":"2021 Q4","2022-05-18":"2022 Q1","2022-08-17":"2022 Q2","2022-11-17":"2022 Q3","2023-03-09":"2022 Q4","2023-05-17":"2023 Q1","2023-08-16":"2023 Q2","2024-03-07":"2023 Q4","2024-05-22":"2024 Q1","2025-03-05":"2024 Q4","2025-05-21":"2025 Q1","2025-08-13":"2025 Q2","2025-11-19":"2025 Q3","2026-03-12":"2025 Q4","2026-05-08":"2026 Q1","2026-08-13":"2026 Q2","2026-11-12":"2026 Q3"};
/* lo/hi = "YYYYQn"；null = 有提到但沒給時間 */
var LINES=[
 {id:"H4",name:"H4（第 4 條材料線）",color:"#2a78d6",actual:"2023Q2",actualTxt:"2023 Q2 量產",pts:[
  ["2022-03-23","2022Q4","2022Q4","2022 年擴 3 條線，最後一條 2022 Q4 開出"],
  ["2022-05-18","2023Q1","2023Q1","設備交期延遲，第 4 條延到 2023 Q1"],
  ["2022-08-17","2023Q1","2023Q1","年底前 3 條、明年初最後 1 條"],
  ["2022-11-17","2023Q1","2023Q1","第 4 條明年第一季量產"],
  ["2023-05-17","2023Q2","2023Q2","第 4 條 2Q23 開始量產"]]},
 {id:"H5",name:"H5（大幅寬，新竹）",color:"#eb6834",actual:"2025Q4",actualTxt:"2025 下半年量產（11 月確認）",pts:[
  ["2022-08-17","2024Q1","2024Q4","董事會通過 H5、H6，最快 23Q4 裝機，2024 開出產能"],
  ["2022-11-17","2024Q1","2024Q4","新竹新大樓明年底完工，第 5 條 2024 量產"],
  ["2023-05-17","2024Q1","2024Q4","大成長要等 2024 年兩條大幅寬線"],
  ["2023-08-16","2024Q1","2024Q4","H5 貢獻時程 2024"],
  ["2024-03-07","2024Q3","2024Q4","2024 下半年裝機量產"],
  ["2024-05-22","2024Q4","2024Q4","24Q4 開始貢獻"],
  ["2025-03-05","2025Q2","2025Q2","正在提升良率；原訂 1Q 底～4 月開始運作，Q3 有較好貢獻"],
  ["2025-05-21","2025Q2","2025Q2","良率「比想像中更困難」，量產從 4 月延到 6 月（同一季內延後 2 個月）"],
  ["2025-08-13","2025Q3","2025Q3","還在客戶送樣，本季開始爬坡量產"],
  ["2025-11-19","2025Q4","2025Q4","本季已量產，挹注明年"],
  ["2026-03-12","2025Q4","2025Q4","已量產、持續調良率，目標 3Q26 達內部標準"],
  ["2026-08-13","2025Q4","2025Q4","今年主要由 H5 拉升產能"],
  ["2026-11-12","2025Q4","2025Q4","H5 慢慢起來，3Q 比 2Q 改善但偶有波折"]]},
 {id:"H6",name:"H6（更大世代，新竹）",color:"#1baf7a",actual:null,actualTxt:"尚未量產",pts:[
  ["2022-08-17","2024Q1","2024Q4","與 H5 一起通過，2024 開出產能"],
  ["2022-11-17","2025Q1","2025Q4","第 6 條 2025 量產"],
  ["2023-05-17","2025Q1","2025Q4","第 5、6 條貢獻時程 2024、2025"],
  ["2023-08-16","2025Q1","2025Q4","貢獻時程 2025"],
  ["2024-03-07","2026Q1","2026Q4","改為 2026 開始貢獻"],
  ["2024-05-22","2026Q1","2026Q4","2026 貢獻，單條產能為舊線 1.5 倍"],
  ["2025-03-05",null,null,"規劃比 H5 更大，依 H5 經驗改設計，盡快投產（未給時間）"],
  ["2025-05-21",null,null,"先把 H5 拉起來，H6 時程未明"],
  ["2025-08-13","2027Q1","2027Q2","2026 試行、2027 年初（1Q 或 2Q）量產"],
  ["2025-11-19",null,null,"導入 H6 裝機與量產準備（未給時間）"],
  ["2026-03-12","2027Q1","2027Q4","今年部署、明年貢獻營收"],
  ["2026-08-13","2028Q1","2028Q4","明年設備進駐與調校，期望 2028 有貢獻"],
  ["2026-11-12","2028Q1","2028Q4","已裝機，希望明年試量產、2028 貢獻"]]},
 {id:"GY",name:"觀音新廠",color:"#eda100",actual:null,actualTxt:"尚未量產",pts:[
  ["2022-08-17",null,null,"向華紙承租桃園土地，約 33 億蓋新廠（未給量產時間）"],
  ["2022-11-17",null,null,"從無到有、材料成本高，明年中或年底再評估量產時程；動土延到 2023 下半年"],
  ["2023-03-09",null,null,"規劃 2Q 或 3Q 動工（未給量產時間）"],
  ["2023-08-16","2025Q4","2026Q4","2025 年底～2026 年量產"],
  ["2025-11-19",null,null,"改為承租既有廠房、買下閒置土地，擴大尺寸線（未給時間）"],
  ["2026-03-12",null,null,"觀音新廠打造下一代產線，工程約 55.36 億（未給時間）"],
  ["2026-05-08","2028Q1","2028Q4","2027 Q2 完工、2028 量產大尺寸"],
  ["2026-11-12","2028Q1","2029Q4","新建部分 2028～2029 完工；既有廠房改造 2027 起貢獻、CUB 明年先放一條線"]]}
];
function qv(s){return s?(+s.slice(0,4))+(+s.slice(5)-1)/4:null;}            /* 2025Q3 -> 2025.5 */
function dv(d){var y=+d.slice(0,4),m=+d.slice(5,7),dd=+d.slice(8,10);return y+(m-1)/12+(dd-1)/365;}
function qlbl(lo,hi){if(!lo)return "未給時間";if(lo===hi)return lo.replace("Q"," Q");if(lo.slice(0,4)===hi.slice(0,4)){if(lo.slice(5)==="1"&&hi.slice(5)==="4")return lo.slice(0,4)+" 年";if(lo.slice(5)==="3"&&hi.slice(5)==="4")return lo.slice(0,4)+" 下半年";return lo.replace("Q"," Q")+"～Q"+hi.slice(5);}
 if(lo.slice(5)==="1"&&hi.slice(5)==="4")return lo.slice(0,4)+"～"+hi.slice(0,4)+" 年";return lo.replace("Q"," Q")+"～"+hi.replace("Q"," Q");}
function mid(p){return p[1]?(qv(p[1])+qv(p[2])+.25)/2:null;}
/* 截至第 i 次法說的狀態 */
function stateAt(L,i){var cd=CALLS[i],said=null;
 L.pts.forEach(function(p){if(p[0]===cd)said=p;});
 var hist=L.pts.filter(function(p){return p[1]&&p[0]<=cd;});
 var cur=hist.length?hist[hist.length-1]:null;
 var prev=(cur&&cur[0]===cd&&hist.length>1)?hist[hist.length-2]:null;
 return {cur:cur,prev:prev,said:said,hist:hist,first:L.pts[0][0]};}
var idx=CALLS.length-1,timer=null;
var X0=2022,X1=2030.25;
function svgEl(w,h){return '<svg width="'+w+'" height="'+h+'" style="display:block;font:11px var(--sans)">';}
function renderGantt(){
 var box=document.getElementById("lnGantt");var W=box.clientWidth;if(!W)return;
 var rowH=56,m={l:76,r:10,t:22,b:22},H=m.t+m.b+rowH*LINES.length,iw=W-m.l-m.r;
 function X(v){return m.l+(v-X0)/(X1-X0)*iw;}
 var s=svgEl(W,H),cd=CALLS[idx],cx=X(dv(cd));
 for(var y=2022;y<=2030;y++){var xx=X(y);s+='<line x1="'+xx+'" x2="'+xx+'" y1="'+m.t+'" y2="'+(H-m.b)+'" stroke="var(--line)"/>';if(y<2030)s+='<text x="'+(X(y+.5))+'" y="'+(H-6)+'" text-anchor="middle" fill="var(--muted)" style="font-family:var(--mono)">'+(W<520?"'"+String(y).slice(2):y)+'</text>';}
 s+='<rect x="'+m.l+'" y="'+m.t+'" width="'+Math.max(0,cx-m.l)+'" height="'+(H-m.t-m.b)+'" fill="var(--line)" opacity=".35"/>';
 s+='<line x1="'+cx+'" x2="'+cx+'" y1="'+(m.t-6)+'" y2="'+(H-m.b)+'" stroke="var(--fg)" stroke-dasharray="3 3"/><text x="'+cx+'" y="'+(m.t-9)+'" text-anchor="middle" fill="var(--fg)" style="font-weight:600">法說日 '+cd.slice(0,7)+'</text>';
 LINES.forEach(function(L,r){var st=stateAt(L,idx),yc=m.t+rowH*r+rowH/2;
  s+='<text x="8" y="'+(yc+4)+'" fill="var(--fg)" style="font-weight:600">'+L.id+'</text>';
  if(r>0)s+='<line x1="'+m.l+'" x2="'+(W-m.r)+'" y1="'+(m.t+rowH*r)+'" y2="'+(m.t+rowH*r)+'" stroke="var(--line)" stroke-dasharray="1 3"/>';
  /* history (older) */
  st.hist.forEach(function(p){if(st.cur&&p===st.cur)return;var a=X(qv(p[1])),b=X(qv(p[2])+.25);s+='<rect x="'+a+'" y="'+(yc-5)+'" width="'+Math.max(4,b-a-1)+'" height="10" rx="3" fill="var(--muted)" opacity=".25"/>';});
  if(st.cur){var a=X(qv(st.cur[1])),b=X(qv(st.cur[2])+.25);
   if(st.prev&&mid(st.cur)>mid(st.prev)+.01){var pa=X(mid(st.prev)),pb=X(mid(st.cur));s+='<line x1="'+pa+'" x2="'+(pb-6)+'" y1="'+(yc-14)+'" y2="'+(yc-14)+'" stroke="#eb6834" stroke-width="2"/><path d="M'+(pb-7)+' '+(yc-18)+' L'+(pb)+' '+(yc-14)+' L'+(pb-7)+' '+(yc-10)+'Z" fill="#eb6834"/>';}
   s+='<rect x="'+a+'" y="'+(yc-7)+'" width="'+Math.max(6,b-a-1)+'" height="14" rx="4" fill="var(--accent)"/>';
   var done=L.actual&&qv(L.actual)<=dv(cd)+.01;var lb=done&&st.cur[0]!==cd?"已量產":qlbl(st.cur[1],st.cur[2])+(st.cur[0]!==cd?"（未更新）":"");var tx=b+6,anchor="start";if(tx+110>W){tx=a-6;anchor="end";}
   s+='<text x="'+tx+'" y="'+(yc+4)+'" text-anchor="'+anchor+'" fill="var(--fg)">'+lb+'</text>';}
  else{s+='<text x="'+(cx+8)+'" y="'+(yc+4)+'" fill="var(--muted)">'+(st.said?"未給時間":(cd<st.first?"尚未提出":"未給時間"))+'</text>';}
  if(L.actual&&qv(L.actual)<=dv(cd)+.01){var ax=X(qv(L.actual)+.125);s+='<rect x="'+(ax-5)+'" y="'+(yc+8)+'" width="10" height="10" transform="rotate(45 '+ax+' '+(yc+13)+')" fill="var(--panel)" stroke="var(--fg)" stroke-width="2"/>';}
 });
 box.innerHTML=s+'</svg>';
}
function renderSlip(){
 var box=document.getElementById("lnSlip");var W=box.clientWidth;if(!W)return;
 var H=Math.round(Math.max(240,Math.min(330,W*.5))),m={l:44,r:56,t:12,b:26},iw=W-m.l-m.r,ih=H-m.t-m.b;
 var xa=2022,xb=2027,ya=2022,yb=2030;
 function X(v){return m.l+(v-xa)/(xb-xa)*iw;} function Y(v){return m.t+(1-(v-ya)/(yb-ya))*ih;}
 var s=svgEl(W,H);
 for(var y=ya;y<=yb;y++){s+='<line x1="'+m.l+'" x2="'+(W-m.r)+'" y1="'+Y(y)+'" y2="'+Y(y)+'" stroke="var(--line)"/><text x="'+(m.l-6)+'" y="'+(Y(y)+4)+'" text-anchor="end" fill="var(--muted)" style="font-family:var(--mono)">'+y+'</text>';}
 for(var x=xa;x<xb;x++){s+='<text x="'+X(x+.5)+'" y="'+(H-8)+'" text-anchor="middle" fill="var(--muted)" style="font-family:var(--mono)">'+x+'</text>';if(x>xa)s+='<line x1="'+X(x)+'" x2="'+X(x)+'" y1="'+m.t+'" y2="'+(H-m.b)+'" stroke="var(--line)" stroke-dasharray="2 3"/>';}
 s+='<line x1="'+X(xa)+'" y1="'+Y(xa)+'" x2="'+X(xb)+'" y2="'+Y(xb)+'" stroke="var(--muted)" stroke-dasharray="4 4"/><text x="'+(X(2026.6))+'" y="'+(Y(2026.6)+14)+'" fill="var(--muted)" text-anchor="middle">法說當天</text>';
 var sx=X(dv(CALLS[idx]));s+='<line x1="'+sx+'" x2="'+sx+'" y1="'+m.t+'" y2="'+(H-m.b)+'" stroke="var(--fg)" stroke-width="1.5" opacity=".55"/>';
 var ends=[];
 LINES.forEach(function(L){var P=L.pts.filter(function(p){return p[1];});if(!P.length)return;
  var d=P.map(function(p,i){return (i?"L":"M")+X(dv(p[0])).toFixed(1)+" "+Y(mid(p)).toFixed(1);}).join("");
  s+='<path d="'+d+'" fill="none" stroke="'+L.color+'" stroke-width="2" stroke-linejoin="round"/>';
  P.forEach(function(p){var on=p[0]===CALLS[idx];s+='<circle cx="'+X(dv(p[0]))+'" cy="'+Y(mid(p))+'" r="'+(on?6:4)+'" fill="'+L.color+'" stroke="var(--panel)" stroke-width="2"><title>'+L.id+'｜'+p[0]+' 法說：'+qlbl(p[1],p[2])+'</title></circle>';});
  var last=P[P.length-1];ends.push({id:L.id,c:L.color,x:X(dv(last[0])),y:Y(mid(last))});});
 ends.sort(function(a,b){return a.y-b.y;});for(var i=1;i<ends.length;i++){if(ends[i].y-ends[i-1].y<13)ends[i].y=ends[i-1].y+13;}
 ends.forEach(function(e){s+='<text x="'+(e.x+9)+'" y="'+(e.y+4)+'" fill="var(--fg)" style="font-weight:600">'+e.id+'</text>';});
 box.innerHTML=s+'</svg>';
 document.getElementById("lnSlipLegend").innerHTML=LINES.map(function(L){return '<span><i style="background:'+L.color+';height:3px;border-radius:2px"></i>'+L.name+'</span>';}).join("");
}
function renderCards(){
 var cd=CALLS[idx];
 document.getElementById("lnCardsTitle").textContent=CALLQ[cd]+" 法說（"+cd+"），每條線怎麼說";
 document.getElementById("lnCards").innerHTML=LINES.map(function(L){var st=stateAt(L,idx);var chip,body;
  if(cd<st.first){chip='<span class="t-mid">尚未提出</span>';body="這條線當時還沒公布。";}
  else if(st.said){
   if(!st.said[1])chip='<span class="t-mid">未給時間</span>';
   else if(!st.prev)chip='<span class="t-mid">首次給時間</span>';
   else{var dq=Math.round((mid(st.cur)-mid(st.prev))*4);chip=dq>0?'<span class="ln-late">延後約 '+dq+' 季</span>':dq<0?'<span class="t-up">提前約 '+(-dq)+' 季</span>':'<span class="t-dn">維持不變</span>';}
   body=st.said[3];}
  else if(L.actual&&qv(L.actual)<=dv(cd)+.01){chip='<span class="t-dn">已量產</span>';body="已於 "+L.actualTxt+"，這次法說沒有再談時程。";}
  else{chip='<span class="t-mid">本次未提</span>';body="這次法說沒有談到"+L.id+"，沿用上次說法"+(st.cur?"："+qlbl(st.cur[1],st.cur[2]):"")+"。";}
  var cur=st.cur?qlbl(st.cur[1],st.cur[2]):"未給時間";
  var act=L.actual&&qv(L.actual)<=dv(cd)+.01?'<div class="ln-act">◆ 實際：'+L.actualTxt+'</div>':'';
  return '<div class="card"><h3><span class="ln-dot" style="background:'+L.color+'"></span>'+L.name+'</h3><div class="ln-big">'+cur+' '+chip+'</div><p style="margin:6px 0 0;font-size:14px">'+body+'</p>'+act+'</div>';}).join("");
}
function setIdx(i){idx=Math.max(0,Math.min(CALLS.length-1,i));document.getElementById("lnRange").value=idx;
 document.getElementById("lnNow").textContent=CALLQ[CALLS[idx]]+" 法說 · "+CALLS[idx];
 [].forEach.call(document.querySelectorAll("#lnChips button"),function(b,k){b.setAttribute("aria-pressed",k===idx);});
 renderGantt();renderSlip();renderCards();}
document.getElementById("lnChips").innerHTML=CALLS.map(function(c,k){return '<button type="button" data-k="'+k+'">'+c.slice(2,7).replace("-","/")+'</button>';}).join("");
document.getElementById("lnChips").addEventListener("click",function(e){var b=e.target.closest("button");if(b){stop();setIdx(+b.dataset.k);}});
document.getElementById("lnRange").addEventListener("input",function(e){stop();setIdx(+e.target.value);});
document.getElementById("lnPrev").addEventListener("click",function(){stop();setIdx(idx-1);});
document.getElementById("lnNext").addEventListener("click",function(){stop();setIdx(idx+1);});
function stop(){if(timer){clearInterval(timer);timer=null;document.getElementById("lnPlay").textContent="▶ 播放";}}
document.getElementById("lnPlay").addEventListener("click",function(){if(timer){stop();return;}if(idx>=CALLS.length-1)setIdx(0);this.textContent="❚❚ 暫停";timer=setInterval(function(){if(idx>=CALLS.length-1){stop();return;}setIdx(idx+1);},1300);});
window.renderLines=function(){setIdx(idx);};
var rt2;window.addEventListener("resize",function(){clearTimeout(rt2);rt2=setTimeout(function(){if(document.getElementById("p-lines").classList.contains("on"))window.renderLines();},150);});
})();
