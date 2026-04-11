const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let p=+poly.value,t=+target.value;
 if(!p||!t){res.innerText="Enter values";return;}
 let r=Math.floor(p*(1-t/100));
 res.innerText=`Reduced polygons: ${r}`;
}

