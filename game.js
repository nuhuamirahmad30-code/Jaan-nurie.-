const H=['home','world','story'];let x=50,y=28,t;
function show(id){H.forEach(v=>document.getElementById(v).style.display=v==id?'block':'none')}
function start(){show('world')}function story(){show('story')}function back(){show('home')}
function move(dx,dy){x=Math.max(5,Math.min(90,x+dx));y=Math.max(15,Math.min(60,y+dy));let a=document.getElementById('avatar');a.style.left=x+'%';a.style.bottom=y+'%'}
function hold(dx,dy){move(dx,dy);clearInterval(t);t=setInterval(()=>move(dx,dy),80)}
document.addEventListener('pointerup',()=>clearInterval(t));document.addEventListener('keydown',e=>{if(e.key=='ArrowLeft')move(-1,0);if(e.key=='ArrowRight')move(1,0);if(e.key=='ArrowUp')move(0,1);if(e.key=='ArrowDown')move(0,-1)})