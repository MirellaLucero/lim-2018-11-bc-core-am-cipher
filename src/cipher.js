window.cipher={
 encode: (offset,string) => {
 const mensaje= string;//almacenando el valor del string en la const mensaje
 let clave=parseInt(offset);//almacenando el valor del offset en clave
const upperWords = string.toUpperCase();//conviertiendo en mayúsculas
const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//declarando abecedario
let textEncode="";//almacen del texto encriptado
for(let i=0; i<upperWords.length; i++){//recorriendo letra por letra
  let letter= upperWords[i];
if(letter === " "){textEncode+=letter;//si es un espacio vacío lo agregará en el TE y continuará analizando
continue;}
let currentIndex= alphabet.indexOf(letter);//ubicará la letra en el abecadario y obtendra su posición
let newIndex= (currentIndex+clave)%26;//le asignará el nuevo index aplicando el desplazamiento(se agrego %26 para que recorra de nuevo si el num es +grande)
if(newIndex<0) {newIndex=newIndex+26;}//se le suma(NEGATIVOS)
if (mensaje[i]===mensaje[i].toLowerCase()) {//minúsculas
textEncode+=alphabet[newIndex].toLowerCase();
}
else textEncode+=alphabet[newIndex];
}
return textEncode;
},


decode: (offset,string) => {
 const mensaje= string;//almacenando el valor de data en la const mensaje
 let clave=parseInt(offset);//almacenando el valor de key en clave
const upperWords = string.toUpperCase();//conviertiendo en mayúsculas
const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//declarando abecedario
let textDecode="";//almacen del texto desencriptado
for(let i=0; i<upperWords.length; i++){
  let letter= upperWords[i];//almacenando la letra actual en la var letter
if(letter === " "){ //si es vacío dar la orden de seguir analizando
  textDecode+=letter;//añadiendo espacio
continue;
}
let currentIndex= alphabet.indexOf(letter);//obteniendo ubicación en el alfabeto de la letra y asignandole el valor actual
let newIndex= (currentIndex-clave)%26;//descifrando, restando la clave a la ubicación actual de la letra
if(newIndex<0) {newIndex=newIndex+26;}//(NEG)
//para que me devuelva en minúsculas si es que lo ingresan en minúsculas
if (mensaje[i]===mensaje[i].toLowerCase()) {textDecode+=alphabet[newIndex].toLowerCase();}
//almacene la palabra final en textDecode
else textDecode+=alphabet[newIndex];
}
return textDecode;
}
}
