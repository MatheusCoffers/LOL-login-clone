let title = document.getElementById('title')
let placeholder = document.getElementsByClassName('placeholder','placeholder_dm')
let checkboxLabel = document.getElementsByClassName('checkbox_label')
let option= document.getElementsByClassName('option')
let select = document.getElementById('country')
let dmWhite = document.getElementsByClassName('dm_white')
const txt = {
    en: ["SIGN IN", "Username", "Password", "show password", "stay signed", "Create Account", "Can't sign in"],
    pt: ["LOGIN DA CONTA", "Nome de Usuário", "Senha", "Mostrar senha", "Lembre de mim", "Criar conta", "Esqueci a senha"],
    es: ["INICIAR SESIÓN", "Nombre de usuario", "Contraseña", "mostrar contraseña", "permanecer conectado", "Crear cuenta", "No puedo iniciar sesión"]
}
let img = document.getElementsByClassName('img')

function visiblePassword(){
    let password = document.getElementById('password')
    if (password.type == "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}



function traducao(){
    title.innerHTML = txt[select.value][0]
    placeholder[0].placeholder = txt[select.value][1]
    placeholder[1].placeholder = txt[select.value][2]
    checkboxLabel[0].innerHTML = txt[select.value][3]
    checkboxLabel[1].innerHTML = txt[select.value][4]
    option[0].innerHTML = txt[select.value][5]
    option[1].innerHTML = txt[select.value][6]
}

let dark = 0

function darkMode(){

    if (dark %2 == 0){

        placeholder[0].classList.add("placeholder_dm")
        placeholder[1].classList.add("placeholder_dm")

        for(let i = 0; i < dmWhite.length ; i++){
            dmWhite[i].style.color ="white"
        }

        dmWhite[0].style.backgroundColor ="rgb(20,20,20)"

        img[0].src = 'assets/images/lol_white.png'
        img[1].src = 'assets/images/comunication_white.png'
        img[2].src = 'assets/images/seta_white.png'

        document.getElementById('login').style.backgroundColor = 'rgb(20,20,20)'
        document.getElementById('background').style.background = 'rgba(0, 0, 0, 0.6)'

    } else {
        placeholder[0].classList.remove("placeholder_dm")
        placeholder[1].classList.remove("placeholder_dm")
        
        for(let i = 0; i < dmWhite.length ; i++){
            dmWhite[i].style.color ="black"
        }

        dmWhite[0].style.backgroundColor ="white"

        img[0].src = 'assets/images/lol_black.png'
        img[1].src = 'assets/images/comunication_black.png'
        img[2].src = 'assets/images/seta_black.png'

        document.getElementById('login').style.backgroundColor = 'white'
        document.getElementById('background').style.background = 'rgba(0, 0, 0, 0.3)'
    }
    dark ++
}