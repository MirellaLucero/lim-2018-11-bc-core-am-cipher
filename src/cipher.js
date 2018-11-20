const output1=document.getElementById("output1");
function crypt(data1,key1) {
 var data1= document.getElementById("data1").value;
 var key1=parseInt(document.getElementById("key1").value);
 var upperWords = data1.toUpperCase();
 var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split ("");
 var textCripted="";

 for(let i=0; i<upperWords.length; i++){
   let letter= upperWords[i];
 if(letter === " "){
textCripted+=letter;
continue;
}

var currentIndex= alphabet.indexOf(letter);
var newIndex= currentIndex+key1;
if(newIndex>25) newIndex=newIndex-26;
if(newIndex<0) newIndex=newIndex+26;
if (data1[i]===data1[i].toLowerCase()) {
 textCripted+=alphabet[newIndex].toLowerCase();
}
else textCripted+=alphabet[newIndex];
}
return textCripted;
}

var cifrar= document.getElementById("cifrar");
cifrar.addEventListener("click", () => {
 output1.innerHTML= crypt(data1,key1);
})





const output2=document.getElementById("output2");
function crypt2(data2,key2) {
 var data2= document.getElementById("data2").value;
 var key2=parseInt(document.getElementById("key2").value);
 var upperWords = data2.toUpperCase();
 var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split ("");
 var textCripted="";

 for(let i=0; i<upperWords.length; i++){
   let letter= upperWords[i];
 if(letter === " "){
textCripted+=letter;
continue;
}

var currentIndex= alphabet.indexOf(letter);
var newIndex= currentIndex-key2;
if(newIndex>25) newIndex=newIndex-26;
if(newIndex<0) newIndex=newIndex+26;
if (data2[i]===data2[i].toLowerCase()) {
 textCripted+=alphabet[newIndex].toLowerCase();
}
else textCripted+=alphabet[newIndex];
}
return textCripted;
}

var descifrar= document.getElementById("descifrar");
descifrar.addEventListener("click", () => {
 output2.innerHTML= crypt2(data2,key2);
})
