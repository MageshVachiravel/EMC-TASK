const captcha = document.querySelector("#captcha");
const input = document.querySelector("#input");
const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let captchaValue = captcha.textContent;
    let inputValue = input.value;

    if(captchaValue == inputValue){
        alert("CAPTCHA Verified Successfully!")
    }
    else{
        alert("CAPTCHA Verfication Failed. Please try again.")
    }
})


