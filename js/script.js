console.log("linked")


let keycap = document.getElementsByClassName("keycap");
function loadLogo() {
    for (let i = 0; i < keycap.length; i++) {
        console.log("keycap pop");
        keycap[i].classList.add("keycapPop");
        
    setTimeout(() => {
        keycap[i].classList.remove("keycapPop");
        keycap[i].classList.add("keycapPop2");
        

        }, 800);
        
    }
}

setTimeout(() => {
   loadLogo() 
}, 300)

window.onscroll = function() {navScroll()};
function navScroll() {
    let nav = document.querySelector("nav");
    let keycap = document.getElementsByClassName("keycap");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        console.log("scroll > 0")
        nav.classList.add("scrollStart");

        for (let i = 0; i < keycap.length; i++) {
            keycap[i].classList.add("keycapScrollStart");
        }
    } else {
        for (let i = 0; i < keycap.length; i++) {
            keycap[i].classList.remove("keycapScrollStart");
        }

        nav.classList.remove("scrollStart");
        console.log("scroll = 0")
    }
}
