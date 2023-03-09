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


loadLogo()