const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let u=+unused.value;
 if(!u){res.innerText="Enter value";return;}
 res.innerText=`Remove ${u} elements to optimize`;
}

