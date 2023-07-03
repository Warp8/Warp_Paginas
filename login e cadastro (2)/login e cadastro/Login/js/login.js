// EFEITO PARA OCULTAR E MOSTRAR SENHA

document.addEventListener("DOMContentLoaded", function() {
    let passwordInput = document.getElementById("password");
    let togglePassword = document.getElementById("togglePassword");
  
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

// EFEITO PARA MUDAR DE TEMA CLARO PARA ESCURO
const cssLink = document.getElementById("cssLink");
cssLink.href = "css/login_white.css"


function trocarCSS(){
    if(localStorage.getItem("styleCss") == 1 || localStorage.getItem("styleCss") == null){
        localStorage.setItem("styleCss", 2)
    }else{
        localStorage.setItem("styleCss", 1)
    }
     if (localStorage.getItem("styleCss") == 1) {
         const cssLink = document.getElementById("cssLink");
         cssLink.href = "css/login_white.css"
     }
     else {
         const cssLink = document.getElementById("cssLink");
         cssLink.href = "css/login_dark.css"
     }
    }

//DIRECIONAR PARA O FEED E CHECAR SE UMA SENHA E E-MAIL FORAM DIGITADOS


  function feedIr() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let emailErro = document.getElementById("emailErro");
  let passwordErro = document.getElementById("passwordErro");

  if (email.value === "") {
    emailErro.textContent = "Por favor, preencha o campo e-mail!";
  } else {
    emailErro.textContent = "";
  }

  if (password.value === "") {
    passwordErro.textContent = "Por favor, preencha o campo senha!";
  } else {
    passwordErro.textContent = "";
  }

  if (email.value !== "" && password.value !== "") {
    window.location.href = "http://127.0.0.1:5503/feed.html";
  
    }
  }


     
     
     
     