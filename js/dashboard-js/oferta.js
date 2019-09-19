// ######################## oferta y eventos - lista de ofertas
// ##########################################################################################

// TODO: search part

// TODO: view option

const cuadroIcon = document.querySelector(".opcion-vista-cuadro");
const listaIcon = document.querySelector(".opcion-vista-lista");
const ofertaContenedor = document.querySelector(".ofertas-contenedor");

// opcion basica : cuadro
// vistaCuadro();


// pintar vista cuadrada
function vistaCuadro() {

    ofertaContenedor.innerHTML = "";
    
    for(item in datoOferta) {
        ofertaContenedor.innerHTML += `
            <div class="oferta-tarjeta">
                        
            <div class="parte-img">
                <img src="${datoOferta[item].imagen}" alt="">
                <div class="menu-rapido-contenedor">
                    <div class="caja-puntos">
                        <img class="puntos" src="../imgs/dashboard-imgs/dots.svg" alt="">
                    </div>
                    
                    <div class="menu-rapido">
                        <div class="menu-rapido-icon"><img src="../imgs/dashboard-imgs/editar.svg" alt=""></div>
                        <div class="menu-rapido-icon"><img src="../imgs/dashboard-imgs/trashcan.svg" alt=""></div>
                    </div>
                </div>
            </div>

            <div class="oferta-info-contenedor">

                <div class="oferta-nombre">
                    <a href=""><h3>${datoOferta[item].nombre}</h3></a>
                    <p>${datoOferta[item].categoria}</p>
                </div>

                <div class="oferta-fecha-contenedor">
                    <img src="../imgs/dashboard-imgs/calendar.svg" alt="">
                    <p class="oferta-fecha">${datoOferta[item].fecha}</p>
                </div>

                <p class="oferta-descripcion">
                    ${datoOferta[item].descripcion}
                </p>

                <div class="oferta-abajo">
                    <div class="likes-coment">
                        <img src="../imgs/dashboard-imgs/heart.svg" alt="">
                        <span>${datoOferta[item].likes}</span>
                        <img src="../imgs/dashboard-imgs/comentario.svg" alt="">
                        <span>${datoOferta[item].comentarios}</span>
                    </div>
                    <div class="precio">
                        $${datoOferta[item].precio} <span>/ ${datoOferta[item].opcion}</span>
                    </div>
                </div>

            </div>

        </div>
        `;
    }
}

function vistaLista() {
    console.log("lista opcion")
}

// pinchar icono de cuadros
cuadroIcon.addEventListener("click", vistaCuadro);

// pinchar icono de listas
listaIcon.addEventListener("click", vistaLista);

// TODO: menu-rapido (puntos encima de imagen)
