const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    parrafo.innerHTML = " " 
    console.log(regexEmail.test(email.value))
    if(regexEmail.test(email.value)){
        entrar = true
    }

    if(pass.value.length < 8){
        warnings += 'La contraseña tiene que ser mayor a 8 caracteres <br>'
        entrar = true
    } 

    if (entrar){
        parrafo.innerHTML = warnings
    }
})

