const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let r=+reso.value;
 if(!r){res.innerText="Enter value";return;}
 let newR=Math.round(r/2);
 res.innerText=`Recommended: ${newR}px`;
}

