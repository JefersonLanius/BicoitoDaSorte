const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector("#inputNumber")
let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1


btnTry.addEventListener('click', handletryclick)
btnReset.addEventListener('click', handleResetclick)
document.addEventListener('keydown', keydownReset)

function handletryclick(event){
    event.preventDefault()

    if(Number(inputNumber.value>10) || Number(inputNumber.value<0)){
        alert('[ERRO] - número inválido, tente novamente')
        inputNumber.value = " "
    }
    else{
        if (Number(inputNumber.value==randomNumber)){
            toggleScreen()
            document.querySelector(".screen2 h2").innerHTML =(`Você acertou em ${xAttempts} tentativas`)
        }
        inputNumber.value = " "
        xAttempts++
    }
}

function handleResetclick(){
    toggleScreen()
    randomNumber = Math.round(Math.random()*10)
    inputNumber.focus()
    xAttempts = 0
}

function keydownReset(event){
    if(event.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetclick()
    }
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

