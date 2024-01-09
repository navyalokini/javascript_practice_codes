



const headingTag = document.getElementById("number")
console.log(headingTag)

var number = headingTag.innerHTML
console.log(number)


const buttons = document.getElementsByClassName("btn")
const increaseButton = buttons[0]
const decreaseButton = buttons[1]
console.log(buttons[0])
console.log(buttons[1])


const overlay = document.getElementsByClassName("overlay")[0]

const closeButton = document.getElementById("close_btn")
const head = document.getElementById("heading")




function increaseHandler(){
    number = Number(number)
    if(number+1 > 10){
        overlay.classList.remove("hidden")
        head.innerHTML = "Number cannot go beyond 10"
        return
    }
    number = number+1
    headingTag.innerHTML = number
}

function decreaseHandler(){
    number = Number(number)
    if(number-1 < -10){
        overlay.classList.remove("hidden")
        head.innerHTML = "Number cannot go beyond -10"
        return
    }
    number = number-1
    headingTag.innerHTML = number
}


function closeButtonHandler(){
    overlay.classList.add("hidden")
}


increaseButton.addEventListener("click",increaseHandler)
decreaseButton.addEventListener("click",decreaseHandler)


closeButton.addEventListener("click",closeButtonHandler)
