const number    = document.querySelector("#count")
const increment = document.querySelector("#btnI")
const reset     = document.querySelector("#btnR")

let initialValue = 0

//Increment

increment.addEventListener("click" , function(){
    initialValue++
    number.innerHTML = initialValue
    if(initialValue==4){
       document.body.style.backgroundColor = "#457b9d"
    }
    else if(initialValue==5){
        document.body.style.backgroundColor = "#283618"
     }
     else if(initialValue==6){
        document.body.style.backgroundColor = "#90e0ef"
     }
     else if(initialValue==7){
        document.body.style.backgroundColor = "#540b0e"
     }
     else if(initialValue==8){
        document.body.style.backgroundColor = "#003566"
     }
     else if(initialValue==9){
        document.body.style.backgroundColor = "#bbd0ff"
     }
    else{
        document.body.style.backgroundColor = "white"

    }
})

//Reset

reset.addEventListener("click" , function(){
    initialValue = 0
    number.innerHTML = initialValue
})

