// ---------- CPU registers tab
const hx=v=>'0x'+(v>>>0).toString(16).padStart(8,'0');
function regsDraw(){if(dockT!='regs')return;const el=$('regs');if(!M){el.textContent=run?'':'Not running. Press Run to see live CPU state.';return}const r=M.r;let t='';
 for(let i=0;i<13;i+=2)t+=('R'+i).padEnd(4)+hx(r[i])+(i<12?'   '+('R'+(i+1)).padEnd(4)+hx(r[i+1]):'')+'\n';
 t+='SP  '+hx(r[13])+'   LR  '+hx(r[14])+'\nPC  '+hx(r[15])+'   xPSR flags  N'+M.N+' Z'+M.Z+' C'+M.C+' V'+M.V+'   IPSR '+M.ipsr+'\n';
 t+='cycles '+M.cy+'   clock '+(M.sysclk()/1e6)+' MHz   SysTick '+(M.st.ctrl&1?'on':'off')+' load '+M.st.load+'\n\n';
 ['A','B','C'].forEach((n,p)=>{const g=M.gp[p];t+='GPIO'+n+'  CRL '+hx(g.crl)+'  CRH '+hx(g.crh)+'  ODR 0x'+g.odr.toString(16).padStart(4,'0')+'  IDR 0x'+(()=>{let v=0;for(let i=0;i<16;i++)v|=M.pinIn(p,i)<<i;return v})().toString(16).padStart(4,'0')+((M.rcc.apb2&M.gate[p])?'':'   (clock off)')+'\n'});
 t+='\nNVIC enabled '+hx(M.nvEn[0])+' '+hx(M.nvEn[1])+'   pending '+hx(M.nvPend[0])+' '+hx(M.nvPend[1])+'   active '+(M.act.length?M.act.join(','):'none');el.textContent=t}
