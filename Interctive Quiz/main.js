let quiz1Result = document.querySelectorAll("input[name='quiz']");
let quiz1Result2 = document.querySelectorAll("input[name='quiz2']");
let quiz1Result3 = document.querySelectorAll("input[name='quiz3']");
const submit = document.querySelector("#submit");
const finalResult = document.querySelector("#quiz-result");
const resultPara = document.querySelector("#resultPara");

let answer = "";
let answer2 = "";
let answer3 = "";

let result = 0;


for (i=0 ; i < quiz1Result.length; i++){
    quiz1Result[i].addEventListener("click",(e)=>{
        // console.log(e.target.value)
        answer += e.target.value;
        
    })

    quiz1Result2[i].addEventListener("click",(e)=>{
        // console.log(e.target.value)
        answer2 += e.target.value;
    })

    quiz1Result3[i].addEventListener("click",(e)=>{
        // console.log(e.target.value)
        answer3 += e.target.value;
    })
}

submit.addEventListener("click",()=>{
    if(answer == "paris"){
        result += 1
    }

    if(answer2 == "Mars"){
        result += 1
    }

    if(answer3 == "Blue Whale"){
        result += 1
    }

    resultPara.textContent = `Score : ${result}`

    finalResult.style.display = "block";





})



