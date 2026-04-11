const res=document.getElementById("res");
const sizeEl=document.getElementById("size");
const texEl=document.getElementById("textures");

function run(){
 let size = parseFloat(sizeEl.value);
 let tex = parseInt(texEl.value);
 if(isNaN(size)||isNaN(tex)){res.innerText="Enter valid values";return;}
 let reduction = (tex*0.3)+(size*0.15);
 let finalSize = Math.max(size-reduction,size*0.4);
 res.innerText=`Optimized size: ${finalSize.toFixed(2)} MB`;
}

