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
