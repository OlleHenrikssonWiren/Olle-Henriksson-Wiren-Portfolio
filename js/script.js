console.log("linked")


var keycap = document.getElementsByClassName("keycap");
function loadLogo() {
    for (let i = 0; i < keycap.length; i++) {
        console.log("keycap pop");
        keycap[i].style.top = "0px";
        
    setTimeout(() => {
        keycap[i].style.top = "15px"
        }, 800);
        
    }
}

setTimeout(() => {
   loadLogo() 
}, 300)

document.body.onscroll = function navTracker() {
    var navItem = document.getElementsByClassName("navItem");
    console.log("scrolling")
    for (let i = 0; i < navItem.length; i++) {
        switch (navItem) {
            case (window.innerHeight)* 0:
                navItem[1].classListToggle("currentNav");
            break;

            default:
                navItem[i].classList.Toggle("currentNav") 
        } 
    }
}

