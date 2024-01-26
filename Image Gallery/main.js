let image = document.querySelectorAll(".img");
let popup = document.querySelector("#popup")
let popupImg = document.querySelector("#popup-img")
let close = document.querySelector("#close")



for(i=0 ; i<image.length ; i++){
    image[i].addEventListener("click",(e)=>{
        let src = e.target.src;
        popupImg.src = src;
        popup.style.display = "block"
    })
}

close.addEventListener("click",()=>{
    popup.style.display = "none"
})



