const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let l=+layers.value;
 if(!l){res.innerText="Enter value";return;}
 res.innerText = l>50 ? "Too many layers" : "Layer structure is optimal";
}

