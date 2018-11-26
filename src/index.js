function enviar1() {
 event.preventDefault();
 document.getElementById("inicio").style.display= 'none';
 document.getElementById("pagcifrar").style.display='block';
}

function enviar2() {
 event.preventDefault();
 document.getElementById("inicio").style.display='none';
 document.getElementById("pagdescifrar").style.display='block';
}

function volver1() {
  event.preventDefault();
  document.getElementById("pagcifrar").style.display='none';
  document.getElementById("inicio").style.display='block';
}

function volver2() {
  event.preventDefault();
  document.getElementById("pagdescifrar").style.display='none';
  document.getElementById("inicio").style.display='block';
}

document.getElementById("paseCe").addEventListener("click",enviar1);
document.getElementById("paseDe").addEventListener("click",enviar2);
document.getElementById("volver1").addEventListener("click",volver1);
document.getElementById("volver2").addEventListener("click",volver2);

const btnCifrar=document.getElementById("cifrar");
btnCifrar.addEventListener("click", () => {
  const data1= document.getElementById("data1").value;
  const key1=parseInt(document.getElementById("key1").value);
  const output1=document.getElementById("output1");
 output1.innerHTML= cipher.encode(data1,key1);
})


const btnDescifrar=document.getElementById("descifrar");
btnDescifrar.addEventListener("click", () => {
  const data2= document.getElementById("data2").value;
  const key2=parseInt(document.getElementById("key2").value);
  const output2=document.getElementById("output2");
 output2.innerHTML= cipher.decode(data2,key2);
})
