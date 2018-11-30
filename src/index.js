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
  const string= document.getElementById("string").value;
  const offset=parseInt(document.getElementById("offset").value);
  const output1=document.getElementById("output1");
 output1.innerHTML= cipher.encode(offset,string);
})


const btnDescifrar=document.getElementById("descifrar");
btnDescifrar.addEventListener("click", () => {
  const string= document.getElementById("string2").value;
  const offset=parseInt(document.getElementById("offset2").value);
  const output2=document.getElementById("output2");
 output2.innerHTML= cipher.decode(offset,string);
})


let btnCopy1 = document.getElementById('copiar1');

btnCopy1.addEventListener('click', () => {
   var aux = document.getElementById('output1');
   aux.select();
   // Copia el texto seleccionado
   document.execCommand("copy");
});

let btnCopy2 = document.getElementById('copiar2');

btnCopy2.addEventListener('click', () => {
   var aux = document.getElementById('output2');
   aux.select();
   // Copia el texto seleccionado
   document.execCommand("copy");
});
