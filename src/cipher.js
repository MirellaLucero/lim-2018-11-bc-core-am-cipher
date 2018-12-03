
//función
window.cipher={
  encode: (offset,string) => {
  const mensaje= string;//almacenando el valor de data en la const mensaje
  let clave=parseInt(offset);//almacenando el valor de key en clave
 const upperWords = string.toUpperCase();//conviertiendo en mayúsculas
 const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789¡!¿?,.;-_#$%&/()=:><";//declarando abecedario
 let textEncode="";//almacen del texto encriptado
 for(let i=0; i<upperWords.length; i++){
   let letter= upperWords[i];
 if(letter === " "){textEncode+=letter;
continue;}
let currentIndex= alphabet.indexOf(letter);
let newIndex= (currentIndex+clave)%55;
if(newIndex>54 ) {newIndex=newIndex-55;}
if(newIndex<0) {newIndex=newIndex+55;}
if (mensaje[i]===mensaje[i].toLowerCase()) {
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
 const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789¡!¿?,.;-_#$%&/()=:><";//declarando abecedario
 let textDecode="";//almacen del texto desencriptado
 for(let i=0; i<upperWords.length; i++){
   let letter= upperWords[i];//almacenando la letra actual en la var letter
 if(letter === " "){ //si es vacío dar la orden de seguir analizando
   textDecode+=letter;//añadiendo espacio
continue;
}
let currentIndex= alphabet.indexOf(letter);//obteniendo ubicación en el alfabeto de la letra y asignandole el valor a actualvalor
let newIndex= (currentIndex-clave)%55;//descifrando, restando la clave a la ubicación actual de la letra
if(newIndex>54) {newIndex=newIndex-55;}
if(newIndex<0) {newIndex=newIndex+55;}//para que me devuelva en minúsculas si es que lo ingresan en minúsculas
if (mensaje[i]===mensaje[i].toLowerCase()) {textDecode+=alphabet[newIndex].toLowerCase();}
//almacene en la palabra final en la var textDecode
else textDecode+=alphabet[newIndex];
}
return textDecode;
}
}
