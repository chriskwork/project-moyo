// ######### dashboard - estadistica chart.js
// ###########################################

const myChart = document.getElementById('myChart');

if(myChart) {
    var ctx = myChart.getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: ['10', '11', '12', '13', '14', '15', '16'],
            datasets: [{
                label: 'vista',
                backgroundColor: '#f0a721',
                data: [150, 120, 180, 160, 135, 174, 165]
            },
            {
                label: 'me gusta',
                backgroundColor: '#F64747',
                data: [99, 111, 128, 120, 84, 154, 100]
            },
            {
                label: 'vendido',
                backgroundColor: '#a157e3',
                data: [87, 96, 101, 118, 77, 130, 99]
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}



// ######### modal - nueva oferta
// dashboard inicio
// ###########################################

const nuevaOferta = document.querySelector(".nueva-oferta");
const modalDiv = document.querySelector(".modal");

const cerrarModal = document.querySelector(".modal-cerrar");
const cancelarModal = document.querySelector(".modal-cancelar");

if(nuevaOferta) {
    nuevaOferta.addEventListener("click", (e) => {

        e.preventDefault();
        
        modalDiv.style.display = "block";    
    
        cerrarModal.addEventListener("click", () => {
            modalDiv.style.display = "none";
        });
        cancelarModal.addEventListener("click", (e) => {
            e.preventDefault();
            modalDiv.style.display = "none";
        });

    });
}



// ######### modal - nueva oferta
// pagina ofertas y eventos
// ###########################################

const nuevaOfertaIcon = document.querySelector(".boton-anadir");

if(nuevaOfertaIcon) {
    nuevaOfertaIcon.addEventListener("click", (e) => {

        e.preventDefault();
        
        modalDiv.style.display = "block";    
    
        cerrarModal.addEventListener("click", () => {
            modalDiv.style.display = "none";
        });
        cancelarModal.addEventListener("click", (e) => {
            e.preventDefault();
            modalDiv.style.display = "none";
        });
    
    });
}


// ######### configuracion
// form controlador
// ###########################################


const datoCambiar = document.querySelectorAll(".dato-cambiar");

if(datoCambiar) {

    datoCambiar.forEach((element) => {

        element.addEventListener("click", (ev) => {

            // console.log(ev.target.parentElement.firstElementChild);

            const targetNombre = ev.target.parentElement.firstElementChild;
            const targetInput = ev.target.parentElement.childNodes[3];
            const okBtn = ev.target.parentElement.childNodes[7];

            targetNombre.style.color = "var(--point-naranja)";
            targetInput.style.pointerEvents = "all";
            targetInput.focus();
            // targetInput.value = "";
            ev.target.style.display = "none";
            okBtn.style.display = "inline";

            if(!targetInput.focus()) {
                targetInput.focusout();
                targetInput.value = targetInput.value;
            }

        });

    });

}








