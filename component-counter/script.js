const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let c=txt.value.trim().split("\n").filter(x=>x).length;
 res.innerText=`Components: ${c}`;
}

