init();


function init() {

    const preguntaContenedor = document.querySelector(".pregunta");

    for(item in preguntasFrecuentes) {
        preguntaContenedor.innerHTML += `
            <div class="titulo">
            <p class="question">Q. ${preguntasFrecuentes[item].pregunta}</p>
            <img src="../imgs/section/chevron-down-solid.svg" alt="">
            </div>
            <div class="respuesta">
                ${preguntasFrecuentes[item].respuesta}
            </div>
        `;
    }

    
}












// function preguntaClick() {
//     const titulo = document.querySelectorAll(".titulo");
//     const question = document.querySelectorAll(".question");
//     for(i in titulo){
//         titulo[i].addEventListener("click", () => {
//             question.classList.add("preguntaActiva");
//         })   
//     }
// }
