
//función
window.cipher={
  encode: (data1,key1) => {
  const mensaje= data1;//almacenando el valor de data en la const mensaje
  let clave=parseInt(key1);//almacenando el valor de key en clave
 const upperWords = data1.toUpperCase();//conviertiendo en mayúsculas
 const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//declarando abecedario
 let textEncode="";//almacen del texto encriptado
 for(let i=0; i<upperWords.length; i++){
   let letter= upperWords[i];
 if(letter === " "){textEncode+=letter;
continue;}
let currentIndex= alphabet.indexOf(letter);
let newIndex= (currentIndex+clave)%26;
if(newIndex>25 ) {newIndex=newIndex-26;}
if(newIndex<0) {newIndex=newIndex+26;}
if (mensaje[i]===mensaje[i].toLowerCase()) {
 textEncode+=alphabet[newIndex].toLowerCase();
}
else textEncode+=alphabet[newIndex];
}
return textEncode;
},


decode: (data2,key2) => {
  const mensaje= data2;//almacenando el valor de data en la const mensaje
  let clave=parseInt(key2);//almacenando el valor de key en clave
 const upperWords = data2.toUpperCase();//conviertiendo en mayúsculas
 const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//declarando abecedario
 let textDecode="";//almacen del texto desencriptado
 for(let i=0; i<upperWords.length; i++){
   let letter= upperWords[i];//almacenando la letra actual en la var letter
 if(letter === " "){ //si es vacío dar la orden de seguir analizando
   textDecode+=letter;//añadiendo espacio
continue;
}
let currentIndex= alphabet.indexOf(letter);//obteniendo ubicación en el alfabeto de la letra y asignandole el valor a actualvalor
let newIndex= (currentIndex-clave)%26;//descifrando, restando la clave a la ubicación actual de la letra
if(newIndex>25) {newIndex=newIndex-26;}
if(newIndex<0) {newIndex=newIndex+26;}//para que me devuelva en minúsculas si es que lo ingresan en minúsculas
if (mensaje[i]===mensaje[i].toLowerCase()) {textDecode+=alphabet[newIndex].toLowerCase();}
//almacene en la palabra final en la var textDecode
else textDecode+=alphabet[newIndex];
}
return textDecode;
}
}
