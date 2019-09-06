init();


function init() {

    const preguntaContenedor = document.querySelector(".pregunta");

    for(item in preguntasFrecuentes) {
        preguntaContenedor.innerHTML += `
            <div class="pregunta-element">
                <div class="titulo">
                <p class="question">Q. ${preguntasFrecuentes[item].pregunta}</p>
                <img class="question-arrow-icon" src="../imgs/section/chevron-down-solid.svg" alt="">
                </div>
                <div class="respuesta">
                    ${preguntasFrecuentes[item].respuesta}
                </div>
            </div>
        `;
    }

    const preguntaElement = document.querySelectorAll(".pregunta-element");
    // const question = document.querySelectorAll(".question");
    // const respuesta = document.querySelectorAll(".respuesta");
    
    preguntaElement.forEach((element) => {
        // console.log(element)
        element.addEventListener("click", () => {
            const question = document.querySelector(".question");
            const respuesta = document.querySelector(".respuesta");
        
            question.classList.add("preguntaActiva");
            respuesta.style.display = "block";
            
        });
    });

}

