const email = document.getElementById("email")
const senha = document.getElementById("senha")
const botaoLogin = document.getElementById("botaoLogin")



botaoLogin.addEventListener("click", async () =>{ 
    const urlf = "http://localhost:8080/Warp8/login"; //url de vcs
    const userDto = {
      "email": email.value, //Passar os parametros do seu banco
      "senha": senha.value,//pegar o value dos inputs do html de vcs
    }
    try{
      const response = await fetch(urlf, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDto)
      });
      console.log(response)
      
      if(response.ok){
        const data = await response.json();
        console.log("Logado com sucesso", data);
       // window.location.href = 'home.html'; //Encaminhar para a home
      }else{
        console.log("Falha ao enviar", response.statusText)
      }
    }catch(error){
      console.log("Falha ao enviar", error)
    }

});