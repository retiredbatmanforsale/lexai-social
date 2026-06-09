const fs = require('fs');
const b64 = fs.readFileSync(__dirname + '/excalifont.b64', 'utf8').replace(/\s/g, '');
const logo = fs.readFileSync(__dirname + '/lexai-logo.b64', 'utf8').replace(/\s/g, '');
const rough = fs.readFileSync(__dirname + '/rough.js', 'utf8');

const html = `<!doctype html><html><head><meta charset="utf-8">
<style>
@font-face{font-family:'Excalifont';src:url(data:font/woff2;base64,${b64}) format('woff2');}
html,body{margin:0;padding:0;background:#0b0f1a;}
#stage{width:1080px;height:1350px;position:relative;background:radial-gradient(120% 80% at 50% 0%, #11182b 0%, #0b0f1a 60%);}
svg{position:absolute;inset:0;}
text{font-family:'Excalifont',sans-serif;fill:#e5e7eb;}
</style>
<script>${rough}</script>
</head>
<body>
<div id="stage"><svg id="s" width="1080" height="1350" viewBox="0 0 1080 1350"></svg></div>
<script>
const NS='http://www.w3.org/2000/svg';
const LOGO='${logo}';
const svg=document.getElementById('s');
const rc=rough.svg(svg);

const GREEN='#34d399', RED='#f87171', AMBER='#fbbf24', BLUE='#60a5fa', MUTE='#94a3b8';

function add(el){svg.appendChild(el);return el;}
function text(x,y,str,{size=26,fill='#e5e7eb',anchor='middle',weight='normal',ls=0}={}){
  const t=document.createElementNS(NS,'text');
  t.setAttribute('x',x);t.setAttribute('y',y);t.setAttribute('text-anchor',anchor);
  t.setAttribute('font-size',size);t.setAttribute('fill',fill);
  if(ls)t.setAttribute('letter-spacing',ls);
  t.textContent=str;add(t);return t;
}
function node(cx,cy,r,color,label,sub){
  // dark glass interior
  const base=document.createElementNS(NS,'circle');
  base.setAttribute('cx',cx);base.setAttribute('cy',cy);base.setAttribute('r',r);
  base.setAttribute('fill','#0e1424');add(base);
  const tint=document.createElementNS(NS,'circle');
  tint.setAttribute('cx',cx);tint.setAttribute('cy',cy);tint.setAttribute('r',r);
  tint.setAttribute('fill',color);tint.setAttribute('opacity','0.16');add(tint);
  // glowing rough rim
  add(rc.circle(cx,cy,r*2,{stroke:color,strokeWidth:2.8,roughness:1.5,fill:'none'}));
  text(cx,cy-2,label,{size:30,fill:color,weight:'bold'});
  text(cx,cy+30,sub,{size:18,fill:'#cbd5e1'});
}
function arrow(x1,y1,x2,y2,color,dashed){
  const o={stroke:color,strokeWidth:2.6,roughness:1.4};
  if(dashed)o.strokeLineDash=[9,9];
  add(rc.line(x1,y1,x2,y2,o));
  const a=Math.atan2(y2-y1,x2-x1),h=18,sp=0.5;
  add(rc.line(x2,y2,x2-h*Math.cos(a-sp),y2-h*Math.sin(a-sp),{stroke:color,strokeWidth:2.6,roughness:1.2}));
  add(rc.line(x2,y2,x2-h*Math.cos(a+sp),y2-h*Math.sin(a+sp),{stroke:color,strokeWidth:2.6,roughness:1.2}));
}
// shorten a segment so it touches circle edges, not centers
function edge(n1,n2,color,dashed,label,loff){
  const dx=n2.x-n1.x,dy=n2.y-n1.y,d=Math.hypot(dx,dy),ux=dx/d,uy=dy/d;
  const x1=n1.x+ux*(n1.r+10),y1=n1.y+uy*(n1.r+10);
  const x2=n2.x-ux*(n2.r+18),y2=n2.y-uy*(n2.r+18);
  arrow(x1,y1,x2,y2,color,dashed);
  if(label){const mx=(x1+x2)/2+(loff?.x||0),my=(y1+y2)/2+(loff?.y||0);
    // little label backdrop
    const tw=label.length*11+18;
    const bg=document.createElementNS(NS,'rect');
    bg.setAttribute('x',mx-tw/2);bg.setAttribute('y',my-20);bg.setAttribute('width',tw);bg.setAttribute('height',30);
    bg.setAttribute('rx',8);bg.setAttribute('fill','#0b0f1a');bg.setAttribute('opacity','0.85');add(bg);
    text(mx,my+2,label,{size:20,fill:color});}
}

// ---- header ----
text(540,78,'FOLLOWING THE MONEY',{size:22,fill:GREEN,ls:8});
text(540,140,'Who is actually holding the risk?',{size:52,fill:'#f1f5f9'});
text(540,184,'Nvidia books revenue today. The financing risk migrates outward, toward investors seeking yield.',{size:21,fill:MUTE});

// ---- nodes ----
const NV ={x:540,y:340,r:80}, VCI={x:540,y:620,r:84},
      XAI={x:250,y:880,r:74}, APO={x:830,y:880,r:74},
      ATH={x:830,y:1140,r:72}, RET={x:250,y:1140,r:78};

// edges drawn first (under nodes)
edge(NV,VCI,GREEN,false,'$5.4B GPUs',{x:78,y:0});
edge(APO,VCI,GREEN,false,'$3.5B debt',{x:0,y:-8});
edge(VCI,XAI,GREEN,false,'leases compute',{x:-12,y:-14});
edge(APO,ATH,RED,false,'credit risk',{x:118,y:0});
edge(ATH,RET,RED,false,'backs annuities',{x:0,y:-6});

// Nvidia's second role: equity INTO the vehicle that buys its chips
// (~$1.9B anchor LP, alongside other investors) — arrow points into VCI, not back to Nvidia
(function(){
  const sx=NV.x-NV.r*0.62, sy=NV.y+NV.r*0.70;
  const ex=VCI.x-VCI.r*0.62, ey=VCI.y-VCI.r*0.70;
  const cx=292,cy=482; // control point bowing left
  add(rc.path(\`M \${sx} \${sy} Q \${cx} \${cy} \${ex} \${ey}\`,{stroke:GREEN,strokeWidth:2.6,roughness:1.3,strokeLineDash:[9,9]}));
  const a=Math.atan2(ey-cy,ex-cx),h=18,sp=0.5;
  add(rc.line(ex,ey,ex-h*Math.cos(a-sp),ey-h*Math.sin(a-sp),{stroke:GREEN,strokeWidth:2.6}));
  add(rc.line(ex,ey,ex-h*Math.cos(a+sp),ey-h*Math.sin(a+sp),{stroke:GREEN,strokeWidth:2.6}));
  const bw=236;
  const bg=document.createElementNS(NS,'rect');
  bg.setAttribute('x',292-bw/2);bg.setAttribute('y',458);bg.setAttribute('width',bw);bg.setAttribute('height',54);
  bg.setAttribute('rx',8);bg.setAttribute('fill','#0b0f1a');bg.setAttribute('opacity','0.9');add(bg);
  text(292,480,'Nvidia equity (~$1.9B)',{size:20,fill:GREEN});
  text(292,502,'anchor LP, with other investors',{size:15,fill:MUTE});
})();

node(NV.x,NV.y,NV.r,GREEN,'NVIDIA','sells the chips');
node(VCI.x,VCI.y,VCI.r,AMBER,'VCI','Valor shell co.');
node(XAI.x,XAI.y,XAI.r,BLUE,'xAI','rents the chips');
node(APO.x,APO.y,APO.r,AMBER,'Apollo','lends the cash');
node(ATH.x,ATH.y,ATH.r,RED,'Athene','insurer · Bermuda');
node(RET.x,RET.y,RET.r,RED,'Retirees','annuity holders');

// ---- legend ----
add(rc.line(300,1248,360,1248,{stroke:GREEN,strokeWidth:3,roughness:1}));
text(372,1255,'capital / revenue',{size:21,fill:MUTE,anchor:'start'});
add(rc.line(640,1248,700,1248,{stroke:RED,strokeWidth:3,roughness:1,strokeLineDash:[2,0]}));
text(712,1255,'risk (transferred)',{size:21,fill:MUTE,anchor:'start'});

// ---- footer / branding ----
add(rc.line(48,1300,1032,1300,{stroke:'#1e293b',strokeWidth:1.5,roughness:0.8}));
text(48,1336,'linkedin.com/in/purukathuria',{size:22,fill:MUTE,anchor:'start'});
const lg=document.createElementNS(NS,'image');
lg.setAttributeNS('http://www.w3.org/1999/xlink','href','data:image/png;base64,'+LOGO);
lg.setAttribute('x',922);lg.setAttribute('y',1306);lg.setAttribute('width',42);lg.setAttribute('height',42);
add(lg);
text(972,1335,'Lex AI',{size:24,fill:'#e5e7eb',anchor:'start',weight:'bold'});

document.title='ready';
</script>
</body></html>`;

fs.writeFileSync(__dirname + '/index.html', html);
console.log('wrote index.html', html.length, 'bytes');
