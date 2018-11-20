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

document.getElementById("paseCe").addEventListener("click",enviar1);
document.getElementById("paseDe").addEventListener("click",enviar2);
