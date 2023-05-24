console.log("linked")

//Global vars & lets
let increase = 0;
var querySize = window.matchMedia("(min-width: 740px)")

//Image lets and vars^

//virkverk
let virkTextLogo = "<img src=./img/projects/virkverk/size_small/VirkVerk_Logo_Text_GreyBG_PNG_Big.jpg class=itemImgObj alt=virkverk-logo>"
let virkLogo = "<img src=./img/projects/virkverk/VirkVerk_Logo_GreyBG_PNG.png class=itemImgObj alt=virkverk-logo-text>"
let virkPosterHeat = "<img src=./img/projects/virkverk/size_small/NeedHeat.jpg class=itemImgObj alt=virkverk-poster>"
let virkPosterHere = "<img src=./img/projects/virkverk/size_small/WinterisHere2.jpg class=itemImgObj alt=virkverk-poster>"
let virkBag = "<img src=./img/projects/virkverk/size_small/VirkVerkBag.jpg class=itemImgObj alt=virkverk-mockup>"

//qente 
let qenteCard = " <img src=../img/projects/qente/size_small/qenteCard.jpg alt=qente_logo class=itemImgObj id=qenteCardImg>"
let qenteMockup = "<img src=../img/projects/qente/size_small/qentemockupphone2.jpg alt=website_mockup class=itemImgObj id=mockupImg>"
let qenteScreenCap =  "<img src=../img/projects/qente/size_small/screencap.jpg alt=screen-capture class=itemImgObj>"


function onLoad(querySize) {
    if(querySize.matches) {
        console.log("images swapped")
        virkPosterHeat = "<img src=./img/projects/virkverk/NeedHeat.jpg class=itemImgObj alt=virkverk-poster>" 
        virkTextLogo = "<img src=./img/projects/virkverk/VirkVerk_Logo_Text_GreyBG_PNG_Big.png class=itemImgObj alt=virkverk-logo>"
        virkPosterHere = "<img src=./img/projects/virkverk/WinterisHere2.jpg class=itemImgObj alt=virkverk-poster>"
        virkBag =  "<img src=./img/projects/virkverk/VirkVerkBag.jpg class=itemImgObj alt=virkverk-mockup>"
    }
}

onLoad(querySize)



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


function navScroll() {
    let nav = document.querySelector("nav");
    let keycap = document.getElementsByClassName("keycap");
    //let arrow = document.querySelector(".expandArrow")

    if (document.body.scrollTop > (window.innerHeight) * 0.5 || document.documentElement.scrollTop > (window.innerHeight) * 0.5) {
        console.log("scroll > 0")
        nav.classList.add("scrollStart");
        //arrow.classList.add("showArrow")

        for (let i = 0; i < keycap.length; i++) {
            keycap[i].classList.add("keycapScrollStart");
        }
    } else {
        for (let i = 0; i < keycap.length; i++) {
            keycap[i].classList.remove("keycapScrollStart");
        }

        nav.classList.remove("scrollStart");
        //arrow.classList.remove("showArrow");

        //if (arrow.classList.contains("navExpanded")) {
           //    padding-bottom: 32px; toggleNav();

        //}
        
        console.log("scroll = 0")
    }
}
window.onscroll = function() {introMainScroll()};
function introMainScroll() {
    let mainIntro = document.querySelector(".main1");

        //(window.innerHeight)* 0.65 betyder att när man scrollar 65vh istället för pixlar!!!
    if (document.body.scrollTop > (window.innerHeight)* 1 || document.documentElement.scrollTop > (window.innerHeight) * 1) {
        mainIntro.style.display = "none"
        console.log("intro hidden")
    }
    else {
        mainIntro.style.display = "flex"
        console.log("intro show")
    }
}
window.onscroll = function() { //Effect multiple onscroll functions
    navScroll();
    introMainScroll();
}

let navPopup = document.querySelector(".navPopup");
//let arrow = document.querySelector(".expandArrow");

//arrow.addEventListener("click", toggleNav)
function toggleNav() {
    console.log("nav toggled");

    //arrow.classList.toggle("navExpanded")
    navPopup.classList.toggle("popupOn")
}

// ITEM HOVER FUNCTIONS --VVVV--

let worksItemExpanded = document.querySelector(".worksItemExpandedBox");
let worksItem = document.querySelectorAll(".worksItem");
let desc = document.querySelectorAll(".worksDesc")

for (let itemCount = 0; itemCount < worksItem.length; itemCount++) {
        
    worksItem[itemCount].onclick = function createWorksItem() {

                    backgroundBlur()
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
                    img.innerHTML = "<img class=itemImgObj src=../img/projects/qente/logotypeText.svg alt=qente_logo>" + qenteCard + qenteMockup + qenteScreenCap
                    desc.innerHTML = "Work done for Q'ente, a company who provides health and art. This project was done by me and other classmates for our final exam."
                    for (let v = 0; v < imgObj.length; v++) {
                    imgObj[0].classList.add("imgObjOn")
                    console.log("dooke")
                    swapItem()     
                    }
                    break;
                    case 1:
                        console.log("2nd item")
                    title.innerHTML = "SMALL PROJECTS"
                    img.innerHTML = "<img class=itemImgObj src=../img/projects/smallerProj/onomatopoetiskaord2023.jpg alt=splash_art_piece> <img src=../img/projects/qente/logotypeText.svg alt=qente_logo class=itemImgObj>"
                    desc.innerHTML = "These are smaller projects, created within 2 or 3 weeks"
                    break;
                    case 2: 
                    console.log("3rd item")
                    title.innerHTML = "Virkverk"
                    img.innerHTML = virkTextLogo + virkLogo + virkPosterHeat + virkPosterHere + virkBag;
                    desc.innerHTML = "Design made for a UF-company, 'Virkverk'. From posters to logotypes. "
                    break;
                    default: 
                    console.log("no item to show")
                    title.innerHTML = "placeholder"
                    img.innerHTML = "TO BE USED"
                    desc.innerHTML = "nothing to see here yet!"
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
    //increase = 0;
    backgroundBlur()
}

function backgroundBlur() {
    let background = document.querySelector(".backgroundBlur")
    background.classList.toggle("backgroundActive")
} 

/*function hoverNavPopup() {  //FUNKAR INTE FÖR NU
    let arrow = document.querySelector(".arrowBox");
    let dotBox = document.querySelector(".dotBox")

    if(arrow.classList.contains("arrowActive")) {
        arrow.classList.remove("arrowActive")
        dotBox.classList.remove("dotActive")
        console.log("arrow off") 
        arrowToggle = 1;
    } else {
        arrow.classList.add("arrowActive")
        dotBox.classList.add("dotActive")
        console.log("arrow on")
        arrowToggle = 0;
   }
}

document.querySelector(".itemExImg").addEventListener("mouseover", hoverNavPopup)
document.querySelector(".itemExImg").addEventListener("mouseleave", hoverNavPopup)
*/


let blobBtn = document.querySelector(".blobButton");
let blob = document.querySelectorAll(".blobChar");
blobBtn.onclick = function blobToggle() {
    console.log("blob toggle")
    for (let i = 0; i < blob.length; i++) {
        blob[i].classList.toggle("blobOn");
     }
}




    