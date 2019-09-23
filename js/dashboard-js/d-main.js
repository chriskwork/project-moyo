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









