// ---------- board pins (all on the 20 px grid)
const L=['PB12','PB13','PB14','PB15','PA8','PA9','PA10','PA11','PA12','PA15','PB3','PB4','PB5','PB6','PB7','PB8','PB9','5V','GND','3V3'];
const R=['GND','GND','3V3','RST','PB11','PB10','PB1','PB0','PA7','PA6','PA5','PA4','PA3','PA2','PA1','PA0','PC15','PC14','PC13','VB'];
const cl={},sn={},BN=[];[...L,...R].forEach(l=>cl[l]=(cl[l]||0)+1);
const mk=(l,i,x,side)=>BN.push({id:cl[l]>1?l+'.'+(sn[l]=(sn[l]||0)+1):l,l,x,y:60+i*G,side});
L.forEach((l,i)=>mk(l,i,60,'l'));R.forEach((l,i)=>mk(l,i,180,'r'));
const base=n=>n.replace(/\.\d$/,'');
