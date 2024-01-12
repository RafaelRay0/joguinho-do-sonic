





function jump() {
    
    const fundo = document.querySelector(".fundo")
    const eggman = document.querySelector(".eggman")
    const sonic = document.querySelector(".sonic")
    sonic.classList.add("jump");
    sonic.src = "img/Sonic-jump.gif"
    
    setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "img/Sonic.gif"
    },800);
   
    const loop = setInterval(() => {

        const eggmanPosition = eggman.offsetLeft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");
    
    if(eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 150) {
    
        eggman.style.animation = "none";
        eggman.style.left = `${eggmanPosition}px`;
    
        sonic.style.animation = "none"
        sonic.src = "img/Sonic-Loss.gif"
        sonic.style.width = "200px"
        fundo.src = "img/GameoverSMB-1.png"
    }   
        
    }, 10);
   
}



