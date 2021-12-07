

// animaciones en el index

window.addEventListener("scroll", ()=>{
    let WindowsHeigth =  window.innerHeight/1.3;
    let btn_IndexHeigth = ContentMedia.getBoundingClientRect().top;

    if(btn_IndexHeigth <= WindowsHeigth){
        ContentMedia.classList.add("transformUp")
    }
})
