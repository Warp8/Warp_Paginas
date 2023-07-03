// document.getElementById("cadastro").addEventListener("click", function() {
//     fetch('/Warp8/cadastro', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         // Aqui você pode passar os dados necessários para o cadastro
//       })
//     })
//     .then(function(response) {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Erro na requisição: ' + response.status + ' ' + response.statusText);
//       }
//     })
//     .then(function(data) {
//       // Manipule a resposta do controller aqui, se necessário
//       console.log(data);
//       window.location.href="/cadastro";
//     })
//     .catch(function(error) {
//       // Manipule os erros da requisição aqui
//       console.error(error);
//     });
//   });


function cadastro() {
  window.location.href = "http://127.0.0.1:5501/login%20e%20cadastro/Cadastro/cadastro.html";
}

function login(){
    window.location.href="http://127.0.0.1:5501/login%20e%20cadastro/Login/login.html"
}