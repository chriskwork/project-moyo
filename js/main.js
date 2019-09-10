const mainContenedor = document.querySelector(".pregunta-contenedor");

// preguntas frecuentes

function datosPreguntas() {

    // const preguntaContenedor = document.querySelector(".pregunta-contenedor");
    for(item in preguntasFrecuentes) {
        mainContenedor.innerHTML += `
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


// politica de privacidad

function privacidad() {
    for(item in docuPrivacidad) {
        mainContenedor.innerHTML += `
            <h3>${docuPrivacidad[item].titulo}</h3>
            <br />
            <p>${docuPrivacidad[item].texto}</p>
            <br />
        `;
    }
}


// Cookies

function cookies() {
    for(item in docuCookies) {
        mainContenedor.innerHTML += `
            <h3>${docuCookies[item].titulo}</h3>
            <br />
            <p>${docuCookies[item].texto}</p>
            <br />
        `;
    }
}


// Términos y condiciones

function terminos() {
    for(item in docuTerminos) {
        mainContenedor.innerHTML += `
            <h3>${docuTerminos[item].titulo}</h3>
            <br />
            <p>${docuTerminos[item].texto}</p>
            <br />
        `;
    }
}


// Condiciones de contratación

function contratacion() {
    for(item in docuContratacion) {
        mainContenedor.innerHTML += `
            <h3>${docuContratacion[item].titulo}</h3>
            <br />
            <p>${docuContratacion[item].texto}</p>
            <br />
        `;
    }
}