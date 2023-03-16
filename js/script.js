console.log("linked")


let keycap = document.getElementsByClassName("keycap");
function loadLogo() {

    

    for (let i = 0; i < keycap.length; i++) { // To make keycap logo go up
        console.log("keycap pop");
        keycap[i].classList.add("keycapPop");
        
    setTimeout(() => {
        keycap[i].classList.remove("keycapPop"); // To make keycap logo go down
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
    let arrow = document.querySelector(".expandArrow")

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        console.log("scroll > 0")
        nav.classList.add("scrollStart");
        arrow.classList.add("showArrow")

        for (let i = 0; i < keycap.length; i++) {
            keycap[i].classList.add("keycapScrollStart");
        }
    } else {
        for (let i = 0; i < keycap.length; i++) {
            keycap[i].classList.remove("keycapScrollStart");
        }

        nav.classList.remove("scrollStart");
        arrow.classList.remove("showArrow");

        if (arrow.classList.contains("navExpanded")) {
            toggleNav();

        }
        
        console.log("scroll = 0")
    }
}

let navPopup = document.querySelector(".navPopup");
let arrow = document.querySelector(".expandArrow");

arrow.addEventListener("click", toggleNav)
function toggleNav() {
    console.log("nav toggled");

    arrow.classList.toggle("navExpanded")
    navPopup.classList.toggle("popupOn")
}

// ITEM HOVER FUNCTIONS --VVVV--

let worksItemExpanded = document.querySelector(".worksItemExpandedBox");
let worksItem = document.querySelectorAll(".worksItem");

for (let itemCount = 0; itemCount < worksItem.length; itemCount++) {
        worksItem[itemCount].onclick = function createWorksItem() {
            worksItemExpanded.style.display = "flex"
    }
}


for (let i = 0; i < worksItem.length; i++) {
    let itemTitle = document.querySelector(worksItem[0] > ".itemExTitle");
    switch (i) {
        case 0:
            itemTitle.innerHTML = "Q'ente"
        break;


    }
}








let blobBtn = document.querySelector(".blobButton");
let blob = document.querySelectorAll(".blobChar");
blobBtn.onclick = function blobToggle() {
    console.log("blob toggle")
    for (let i = 0; i < blob.length; i++) {
        blob[i].classList.toggle("blobOn");
     }
}

    