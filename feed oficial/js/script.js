// ANIMAÇÃO PARA OS POLIGONOS FICAREM SE MOVENDO INFINITAMENTE




// const numPoligonos = 10;
// const container = document.getElementById('universos');

// for (let i = 0; i < numPoligonos; i++) {
//   const div = document.getElementById(`universo${i + 1}`);
//   div.classList.add('poligono', 'start-animation');
//   div.style.animationDelay = `${i * 0.5}s`;

// }


// document.addEventListener('DOMContentLoaded', function() {
//   // Obtém o elemento pai do carrossel
//   const universosContainer = document.getElementById('universos');

//   // Obtém todos os elementos filho do carrossel
//   const universos = universosContainer.querySelectorAll('div');

//   // Define a velocidade do carrossel (em pixels por segundo)
//   const velocidade = 1;

//   // Calcula a largura total do carrossel
//   const larguraTotal = universosContainer.offsetWidth;

//   // Define o deslocamento inicial
//   let deslocamento = 0;

//   // Clona os elementos iniciais e insere no final do carrossel
//   universos.forEach((universo, index) => {
//       const clone = universo.cloneNode(true);
//       universosContainer.appendChild(clone);
//   });

//   // Função responsável por mover o carrossel
//   function moverCarrossel() {
//       deslocamento -= velocidade;

//       // Verifica se o carrossel já percorreu a largura total
//       if (deslocamento < -larguraTotal) {
//           // Remove o primeiro elemento e redefine o deslocamento
//           universosContainer.removeChild(universosContainer.firstElementChild);
//           deslocamento = 0;
//       }

//       // Aplica o deslocamento ao carrossel
//       universosContainer.style.transform = `translateX(${deslocamento}px)`;

//       // Chama a função de movimento novamente
//       requestAnimationFrame(moverCarrossel);
//   }

//   // Inicia o movimento do carrossel
//   moverCarrossel();
// });

// window.addEventListener("load", function() {
//   var carousel = document.getElementById("universos");
//   var universos = carousel.children;

//   var position = 0;
//   var speed = 2;

//   function animateCarousel() {
//     position -= speed;
//     carousel.style.transform = "translateX(" + position + "px)";

//     if (position <= -universos[0].offsetWidth) {
//       carousel.appendChild(universos[0]);
//       position += universos[0].offsetWidth;
//     }

//     requestAnimationFrame(animateCarousel);
//   }

//   animateCarousel();
// });
// window.addEventListener("load", function() {
//   var carousel = document.getElementById("universos");
//   var universos = carousel.getElementsByClassName("universo");

//   var position = 0;
//   var speed = 2;
//   var slideWidth = universos[0].offsetWidth;

//   function animateCarousel() {
//     position -= speed;
//     carousel.style.transform = "translateX(" + position + "px)";

//     if (position <= -slideWidth) {
//       carousel.appendChild(universos[0]);
//       position += slideWidth;
//     }

//     requestAnimationFrame(animateCarousel);
//   }

//   animateCarousel();
// });
// window.addEventListener("load", function() {
//   var carousel = document.getElementById("universos");
//   var universos = carousel.getElementsByClassName("universo");

//   var slideWidth = universos[0].offsetWidth;
//   var position = 0;
//   var speed = 2;

//   // Clona os polígonos iniciais
//   var cloneUniversos = [];
//   for (var i = 0; i < universos.length; i++) {
//     var clone = universos[i].cloneNode(true);
//     cloneUniversos.push(clone);
//     carousel.appendChild(clone);
//   }

//   function animateCarousel() {
//     position -= speed;
//     carousel.style.transform = "translateX(" + position + "px)";

//     if (position <= -slideWidth) {
//       position += slideWidth;
//       carousel.style.transform = "translateX(" + position + "px)";
//       var firstUniverso = cloneUniversos.shift();
//       cloneUniversos.push(firstUniverso);
//     }

//     setTimeout(animateCarousel, 5000);
//   }

//   animateCarousel();
// });
// Obtém a largura total do carrossel
// window.addEventListener('load', function() {
//   var universos = document.getElementById('universos');
//   var poligonos = universos.getElementsByTagName('div');

//   for (var i = 0; i < poligonos.length; i++) {
//     poligonos[i].classList.add('poligono');
//   }
// });
//pop-ups
// var modal = document.getElementById("myModal");
// var popupContent = document.getElementById("popupContent");

// function openPopup() {
//     popupContent.textContent = "Conteúdo do Pop-up";
//     modal.style.display = "block";
// }

// function closePopup() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// var modal = document.getElementById("myModal");
// var popupContent = document.getElementById("popupContent");

// function openPopup(content) {
//     popupContent.textContent = content;
//     modal.style.display = "block";
//     modal.scrollIntoView({ behavior: 'smooth' });
// }

// function closePopup() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

var modal = document.getElementById("myModal");
var popupContent = document.getElementById("popupContent");

function openPopup(content) {
    popupContent.textContent = content;
    modal.style.display = "block";
    document.body.classList.add("popup-open"); // Adiciona a classe para ocultar a barra de rolagem da página
    modal.scrollIntoView({ behavior: 'smooth' });
}

function closePopup() {
    modal.style.display = "none";
    document.body.classList.remove("popup-open"); // Remove a classe para reativar a barra de rolagem da página
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("popup-open"); // Remove a classe se o usuário clicar fora do pop-up
    }
};
