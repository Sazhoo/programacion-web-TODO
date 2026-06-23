let etqP = document.getElementById("parrafo1");
etqP.innerHTML="CR77 SIUUU"
etqP.style.color="red";

let claseP = document.getElementsByClassName("parrafo");
console.log(claseP.length);
claseP[1].innerHTML="Estudiante CESDE";
claseP[1].style.fontSize="30px";

let  porEtiqueta = document.getElementsByTagName("p")
console.log(porEtiqueta.length);
porEtiqueta[2].innerHTML="Salida: 6:15pm";
porEtiqueta[2].style.backgroundColor="Red"
porEtiqueta[2].style.color="gray"
