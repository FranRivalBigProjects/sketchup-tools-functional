const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let s=+scenes.value;
 if(!s){res.innerText="Enter value";return;}
 res.innerText = s>10 ? "Reduce scenes" : "Scenes optimized";
}

