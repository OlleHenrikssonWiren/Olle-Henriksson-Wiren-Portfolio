console.log("linked")

//Global vars & lets
let increase = 0;




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
                    increase = 0;

                    let title = document.querySelector(".itemExTitle")
                    let img = document.querySelector(".itemExImg");
                    let desc = document.querySelector(".itemExDesc")
                    let imgObj = document.querySelectorAll(".itemImgObj")
            switch (itemCount) {
                case 0:
                    console.log("first item")
                    title.innerHTML = "Q'ENTE"
                    img.innerHTML = "<img class=itemImgObj src=../img/projects/qente/logotypeText.svg alt=qente_logo> <img src=../img/projects/qente/logotypeText.svg alt=qente_logo class=itemImgObj>  <img src=../img/projects/qente/logotypeText.svg alt=qente_logo class=itemImgObj>"
                    desc.innerHTML = "Work done for Q'ente, a company who provides health and art. This project was done by me and other classmates for our final exam."
                    for (let v = 0; v < imgObj.length; v++) {
                    imgObj[0].classList.add("imgObjOn")
                    console.log("dooke")
                    swapItem()
                    }
                                        
                
            }

            
    }
}



//Slide show stuff 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
let i;
let slides = document.querySelectorAll(".itemImgObj");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}     
document.querySelector(".rightArrow").addEventListener("click", plusSlides(1));



document.querySelector(".rightArrow").addEventListener("click", swapItem);
function swapItem() { //När man klickar på höger pilen för att bläddra bild
    


} // To close the popup
document.querySelector(".itemClose").onclick = function closePopup() {
    worksItemExpanded.style.display = "none"
    increase = 0;
}






let blobBtn = document.querySelector(".blobButton");
let blob = document.querySelectorAll(".blobChar");
blobBtn.onclick = function blobToggle() {
    console.log("blob toggle")
    for (let i = 0; i < blob.length; i++) {
        blob[i].classList.toggle("blobOn");
     }
}

    