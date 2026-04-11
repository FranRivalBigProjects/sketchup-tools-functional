const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let t=+time.value;
 if(isNaN(t)){res.innerText="Enter value";return;}
 let i=Math.sin(t/24*Math.PI);
 res.innerText=`Intensity: ${i.toFixed(2)}`;
}

