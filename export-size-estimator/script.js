const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let o=+obj.value;
 if(!o){res.innerText="Enter value";return;}
 let size=o*0.8;
 res.innerText=`Estimated size: ${size.toFixed(2)} MB`;
}

