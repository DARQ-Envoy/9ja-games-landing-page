const mobile = matchMedia("(max-width: 900px)");
const navOptions = document.querySelector("#nav-options");
const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");
const body = document.querySelector("body");
const overLay = document.querySelector(".over-lay");


layout()

openNav.addEventListener("click",()=>{
     openMenu();
     scrollUp();
})
closeNav.addEventListener("click",()=>{
       closeMenu()
})

overLay.addEventListener("click",()=>{
    closeMenu()
})
function openMenu(){
    openNav.classList.add("open")
    navOptions.classList.add("nav-small-show");
    body.classList.add("over-nav-body-hid");
    overLay.classList.add("over-lay-show");
    closeNav.classList.add("open")
}
function closeMenu(){
    openNav.classList.remove("open")
    closeNav.classList.remove("open")
    navOptions.classList.remove("nav-small-show");
    body.classList.remove("over-nav-body-hid");
    overLay.classList.remove("over-lay-show");
}


mobile.addEventListener("change", ()=>{
            layout();
})


function layout(){
    if(mobile.matches){
        navOptions.classList.add("nav-small");
        navOptions.classList.remove("main-nav");
        }
        else{
        navOptions.classList.remove("nav-small");
        navOptions.classList.add("main-nav");
        };
}

function scrollUp(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop= 0;
}