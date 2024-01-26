const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function(){
      try {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(msg => {
           for(i=0 ; i < msg.length; i++){
            if(msg[i].title.toUpperCase().indexOf(input.value.toUpperCase()) > 0){
                  console.log(msg[i]);
            }
           }

           let div = document.createElement("div");
           div.textContent = `The entered Title name is ${input.value} You can see the Object Details in console`
           document.body.append(div)
      })
      } catch (error) {
            console.log("Something Goes Wrong : ",error)
      }
})

