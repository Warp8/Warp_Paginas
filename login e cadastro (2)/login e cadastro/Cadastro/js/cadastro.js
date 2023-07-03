// EFEITO PARA MUDAR TEMA

const cssLink = document.getElementById("cssLink");
cssLink.href = "css/cadastro_white.css"


function trocarCSS(){
    if(localStorage.getItem("styleCss") == 1 || localStorage.getItem("styleCss") == null){
        localStorage.setItem("styleCss", 2)
    }else{
        localStorage.setItem("styleCss", 1)
    }
     if (localStorage.getItem("styleCss") == 1) {
         const cssLink = document.getElementById("cssLink");
         cssLink.href = "css/cadastro_white.css"
     }
     else {
         const cssLink = document.getElementById("cssLink");
         cssLink.href = "css/cadastro_black.css"
     }
    }
     
// EFEITO PARA OCULTAR SENHA E MOSTRAR SENHA

document.addEventListener("DOMContentLoaded", function() {
    var passwordInput = document.getElementById("password");
    var togglePassword = document.getElementById("togglePassword");
  
    togglePassword.addEventListener("click", function() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML = "&#x1f441;"; // Altere o ícone para o olho aberto
      } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = "&#x1f576;"; // Altere o ícone para o olho fechado
      }
    });
  });

//DIRECIONAR PARA O FEED

function feed() {
      window.location.href = "http://127.0.0.1:5503/feed.html";
  }
  
  
