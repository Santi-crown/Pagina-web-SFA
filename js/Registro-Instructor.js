const nombre = document.getElementById("name")
const apellidos = document.getElementById("apellidos")
const documento = document.getElementById("documento")
const tipo_documento = document.getElementById("tipo_documento")
const nacionalidad = document.getElementById("nacionalidad")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const pass2  = document.getElementById("password2")
const codigo  = document.getElementById("codigo")
const centro = document.getElementById("centro")
const tel = document.getElementById("Telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    parrafo.innerHTML = " "
    if(nombre.value.length <4){
        warnings += 'Los nombres no son validos <br>'
        entrar = true
    }
    if(apellidos.value.length <6){
        warnings += 'Los apellidos no son validos <br>'
        entrar = true
    }
    if(documento.value.length <10){
        warnings += 'Documento invalido <br>'
        entrar = true
    }   
    console.log(regexEmail.test(email.value))
    if(regexEmail.test(email.value)){
        entrar = true
    }

    if(pass.value.length < 8){
        warnings += 'La contraseña tiene que ser mayor a 8 caracteres <br>'
        entrar = true
    }
    if(pass2.value != pass.value){
        warnings += 'Las contraseñas no coinciden <br>'
        entrar = true
    }
    if(codigo.value.length <7 ){
        warnings += 'Codigo invalido <br>'
        entrar = true   
    }  

    if(tel.value.length <7 ){
        warnings += 'Numero telefonico invalido  <br>'
        entrar = true   
    }   

    if (entrar){
        parrafo.innerHTML = warnings
    }
})