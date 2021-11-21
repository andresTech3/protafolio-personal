// inicio

const ContentMedia = document.querySelectorAll(".rounded-pill")


const qm = matchMedia("(max-width : 600px)")

const cambioContent = (n1,n2,n3,reClass, addClass)=>{
    ContentMedia[n1].classList.remove(reClass);
    ContentMedia[n1].classList.add(addClass);
    ContentMedia[n2].classList.remove(reClass);
    ContentMedia[n2].classList.add(addClass);
    ContentMedia[n3].classList.remove(reClass);
    ContentMedia[n3].classList.add(addClass);
}

const changeSize = () =>{
    if(qm.matches){
        cambioContent(0,1,2,"w-50", "w-100")
    }
    else{
        cambioContent(0,1,2,"w-100","w-50")
    }
}

qm.addEventListener("change", changeSize);
qm.addEventListener("DOMContentLoaded", changeSize);





// animaciones en el index

window.addEventListener("scroll", ()=>{
    let WindowsHeigth =  window.innerHeight/1.3;
    let btn_IndexHeigth = ContentMedia.getBoundingClientRect().top;

    if(btn_IndexHeigth <= WindowsHeigth){
        ContentMedia.classList.add("transformUp")
    }
    
})
