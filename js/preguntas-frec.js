init();

function init() {

    const preguntaContenedor = document.querySelector(".pregunta-contenedor");
    for(item in preguntasFrecuentes) {
        preguntaContenedor.innerHTML += `
            <button class="pregunta">Q. ${preguntasFrecuentes[item].pregunta}</button>
            <div class="respuesta">
                <p>
                    ${preguntasFrecuentes[item].respuesta}
                </p>
            </div>
        `;
    }

    const pregunta = document.querySelectorAll(".pregunta");
    for(let i = 0; i < pregunta.length; i++) {
        pregunta[i].onclick = function () {
            this.classList.toggle("preguntaActive");
            const content = this.nextElementSibling;
            if(content.style.maxHeight) {
                content.style.maxHeight = null;
            }else {
                content.style.maxHeight= content.scrollHeight + "px";
            }
        }
    }

}




