const publicacion = document.querySelector(".contData");
const links = document.querySelectorAll(".submenus");
const diseñoGrafico = document.querySelector(".diseñoGrafico");
const triangulo = document.querySelector(".Triangulo");

const publiDiseño = async () =>{
    const api = await fetch ("../json/diseño-publicacionesG.json");
    const datos = await api.json();
    const fetchData = datos.logotipoYbanner;
    for (let valores of fetchData) {
            html = `
        <div class="col-12 col-lg-4 mb-3 post"><img src="${valores.img}" alt=""       class="w-50"></div>
        `
        publicacion.innerHTML += html;
        }

    return publicacion
}

const publiDiseño1 = async () =>{
    const api = await fetch ("../json/diseño-publicacionesG.json");
    const datos = await api.json();
    const fetchData = datos.texturas;
    for (let valores of fetchData) {
            html = `
        <div class="col-12 col-lg-4 mb-3 post"><img src="${valores.img}" alt="" class="w-50"></div>
        `
        publicacion.innerHTML += html;
        }

    return publicacion
}

const publiDiseño2 = async () =>{
    const api = await fetch ("../json/diseño-publicacionesG.json");
    const datos = await api.json();
    const fetchData = datos.modelado;
    for (let valores of fetchData) {
            html = `
        <div class="col-12 col-lg-4 mb-3 post"><img src="${valores.img}" alt="" class="w-50"></div>
        `
        publicacion.innerHTML += html;
        }

    return publicacion
}

const publiDiseño3 = async () =>{
    const api = await fetch ("../json/diseño-publicacionesG.json");
    const datos = await api.json();
    const fetchData = datos.animation;
    for (let valores of fetchData) {
            html = `
        <div class="col-12 col-lg-4 mb-3 post"><video src="${valores.img}" alt="" class="w-100" autoplay controls></div>
        `
        publicacion.innerHTML += html;
        }

    return publicacion
}

const publiDiseño4 = async () =>{
    const api = await fetch ("../json/diseño-publicacionesG.json");
    const datos = await api.json();
    const fetchData = datos.marcaApi;
    for (let valores of fetchData) {
            html = `
        <div class="col-12 col-lg-4 mb-3 post"><img src="${valores.img}" alt="" class="w-50"></div>
        `
        publicacion.innerHTML += html;
        }

    return publicacion
}


const btnFuction = (iterador, callback,i,posicionX) =>{
    links[iterador].addEventListener("click",(e)=>{
        e.preventDefault()
        if(links[iterador] === links[i]){
            callback()
            publicacion.innerHTML = "";
            diseñoGrafico.style.display = "";
            triangulo.classList.remove("d-none")
            triangulo.style.left = posicionX;
        }
    })
}

btnFuction(0,publiDiseño, 0, "10%");
btnFuction(1,publiDiseño1, 1, "30%");
btnFuction(2,publiDiseño2, 2, "45%");
btnFuction(3,publiDiseño3, 3, "64%");
btnFuction(4,publiDiseño4, 4, "86%");























