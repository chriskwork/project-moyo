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

            console.log(ev.target.parentElement.children);

            const targetNombre = ev.target.parentElement.firstElementChild;
            const targetInput = ev.target.parentElement.children[1];
            const okBtn = ev.target.parentElement.children[3];

            targetNombre.style.color = "var(--point-naranja)";
            targetInput.style.pointerEvents = "all";
            targetInput.focus();
            // targetInput.value = "";
            ev.target.style.display = "none";
            okBtn.style.display = "inline-block";

            okBtn.addEventListener("click", () => {
                
                targetNombre.style.color = "var(--font-color)";
                targetInput.value = targetInput.value;
                targetInput.style.pointerEvents = "none";
                targetInput.blur();
                ev.target.style.display = "inline-block";
                okBtn.style.display = "none";

            });

        });

    });

}

// cambiar contraseña evento

const cambiarPwd = document.querySelector(".password-cambiar");

if(cambiarPwd) {
    cambiarPwd.addEventListener("click", (ev) => {
    
        // console.log(ev.target.parentElement.children);

        const confirmarInput = document.querySelector(".confir-pwd-input");
        const targetNombre = ev.target.parentElement.firstElementChild;
        let targetInput = ev.target.parentElement.children[1];
        let okBtn = ev.target.parentElement.children[4];

        confirmarInput.style.display = "inline-block";
        ev.target.style.display = "none";
        targetNombre.style.color = "var(--point-naranja)";
        targetInput.style.pointerEvents = "all";
        confirmarInput.style.pointerEvents = "all";
        targetInput.focus();
        okBtn.style.display = "inline-block";


        okBtn.addEventListener("click", () => {

            // confirmar valores de contraseña input
            if(targetInput.value != confirmarInput.value) {

                confirmarInput.value = "";
                confirmarInput.placeholder = "* Debes poner la misma contraseña";
                okBtn.style.display = "inline-block";
                ev.target.style.display = "none";
                targetInput.style.pointerEvents = "all";
                
            }else {

                targetNombre.style.color = "var(--font-color)";
                targetInput.value = targetInput.value;
                confirmarInput.value = confirmarInput.value;
                targetInput.style.pointerEvents = "none";
                confirmarInput.style.pointerEvents = "none";
                targetInput.blur();
                confirmarInput.blur();
                ev.target.style.display = "inline-block";
                okBtn.style.display = "none";

            }
        });

    });

};






