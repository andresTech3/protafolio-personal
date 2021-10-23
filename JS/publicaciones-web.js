const links = document.querySelectorAll(".text");
const container = document.querySelector(".conte")
const textMuestra = document.querySelector(".text-muestra");




const datos = async (dato)=>{
    const data = await fetch(dato);
    const dataJson = await data.json();
    const result = dataJson;
    for (let i of result) {
        let htmlPublic = `
        <div class="col-12 col-lg-3 ">
        <div class="card" style="width: 18rem;">
          <img src="${i.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${i.title}</h5>
            <p class="card-text">${i.descp}</p>
            <a href="${i.url}" class="btn btn-primary w-100">${i.title}</a>
          </div>
        </div>
      </div>
        `
        container.innerHTML += htmlPublic;
        
    }
    
    return container;
}


const publiWeb = (i,newDtato, t1)=>{
  links[i].addEventListener("click",(e)=>{
    e.preventDefault()
    if(links[i].textContent === t1){
      datos(newDtato);
      container.innerHTML ="";
      textMuestra.style.display = "none"
    }
    
  })
}



publiWeb(0, "../json/web-landing.json", "LANDING PAGUE");
publiWeb(1, "../json/web-herramientas.json", "HERRAMIENTAS WEB");
publiWeb(2, "../json/web-informativo.json", "INFORMATIVO");




