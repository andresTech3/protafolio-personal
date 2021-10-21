"use strict";

const foto = document.querySelectorAll(".list-group-item");
const contenedor = document.querySelector(".foto");
const textComienzo = document.querySelector(".text-comienzo")
let contador = 1

const dataMaxima = ( publics, datos)=>{
const publicacion = document.querySelector(publics);
const data = async () =>{
    const dato = await fetch(datos);
    const datoJs = await dato.json();
    const content = datoJs;
    for(let item of content){
      let infoHtml = 
      
      `<div class="col-12 col-lg-4">      
            <img src="${item.url}" class="w-100" alt="">
      </div>
      ` 
      publicacion.innerHTML+= infoHtml ;
      contador--;
    }
}
  return data()
}

const removeClassI = (i1,i2,i3,i4)=>{
  foto[i1].classList.remove("active")
  foto[i2].classList.remove("active")
  foto[i3].classList.remove("active")
  foto[i4].classList.remove("active")
}


// foto[0].addEventListener("click",(e)=>{
//   if(contador === 1 ){
//     e.preventDefault();
//     foto[0].classList.add("active")
//     dataMaxima( ".foto" ,"../fotografia.json");
//     contenedor.innerHTML="";
//   }
//   removeClassI(1,2,3,4)
//   contador=1
// })

// foto[1].addEventListener("click",(e)=>{
//   e.preventDefault();
//   if(contador === 1){
//     e.preventDefault()
//     foto[1].classList.add("active");
//     dataMaxima( ".foto" ,"../retro.json");
//     contenedor.innerHTML="";
//   }
//   removeClassI(0,2,3,4);
//   contador=1;
// })

const btnFotografias = (i, nomJson, r1,r2,r3,r4)=>{
  foto[i].addEventListener("click",(e)=>{
    e.preventDefault();
    if(contador === 1){
      e.preventDefault()
      foto[i].classList.add("active");
      dataMaxima( ".foto" , nomJson);
      contenedor.innerHTML="";
    }
    removeClassI(r1,r2,r3,r4);
    textComienzo.innerHTML ="";
    contador=1;
  })
}

btnFotografias(0,"../json/fotografia.json",1,2,3,4);
btnFotografias(1,"../json/retro.json",0,2,3,4);
btnFotografias(2,"../json/ByN.json",0,1,3,4);
btnFotografias(3,"../json/minimalistica.json",0,1,2,4);
btnFotografias(4,"../json/imnovadoras.json",0,1,2,3);
















// //publicaciones fotografia
// const publicacionD = document.querySelector(".publicaciones-digitales");

// const dataD = async () =>{
//     const datoD = await fetch("../infoDiseño.json");
//     const datoDJs = await datoD.json();
//     const contentD = datoDJs;
//     for(let item of contentD){
//       let infoHtmlD = 
      
//       `<div class="col-12 col-lg-4 my-sm-4">      
//             <article class="card ">
//               <img src="${item.url}" class="card-img-top" alt="">
//             </article>
          
//       </div>
//       ` 
//       publicacionD.innerHTML+= infoHtmlD 
//     }
// }

// dataD()





















