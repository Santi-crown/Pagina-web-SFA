const nombre1 = document.getElementById("nombre1")
const nombre2 = document.getElementById("nombre2")
const apellido1 = document.getElementById("apellido1")
const apellido2 = document.getElementById("apellido2")
const tipo_sexo = document.getElementById("tipo_sexo")
const documento = document.getElementById("documento")
const tipo_documento = document.getElementById("tipo_documento")
const nacionalidad = document.getElementById("nacionalidad")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const pass2  = document.getElementById("password2")
const tipo_rol  = document.getElementById("tipo_rol")
const cel = document.getElementById("celular")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    parrafo.innerHTML = " "
    if(nombre1.value.length <4){
        warnings += 'El primer nombre no es valido <br>'
        entrar = true
    }
    if(nombre2.value.length <4){
        warnings += 'El segundo nombre no es valido <br>'
        entrar = true
    }
    if(apellido1.value.length <6){
        warnings += 'El primer apellido no es valido <br>'
        entrar = true
    }
    if(apellido2.value.length <6){
        warnings += 'El segundo apellido no es valido <br>'
        entrar = true
    }
    if(documento.value.length <10){
        warnings += 'Numero de documento invalido <br>'
        entrar = true
    }
    if(nacionalidad.value.length <6){
        warnings += 'La nacionalidad debe tener más de 4 caracteres  <br>'
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
    if(tipo_rol.value.length <7 ){
        warnings += 'Rol invalido <br>'
        entrar = true   
    }  

    if(cel.value.length <7 ){
        warnings += 'Numero celular tiene que ser mayor igual a 10 caracteres  <br>'
        entrar = true   
    }   

    if (entrar){
        parrafo.innerHTML = warnings
    }
})