// ######################## oferta y eventos - lista de ofertas
// ##########################################################################################

// TODO: search part

// TODO: view option

const cuadroIcon = document.querySelector(".opcion-vista-cuadro");
const listaIcon = document.querySelector(".opcion-vista-lista");
const ofertaContenedor = document.querySelector(".ofertas-contenedor");
// const ofertaContenedorLista = document.querySelector(".oferta-tarjeta-lista-contenedor");
const descripcion = document.querySelector(".oferta-descripcion");

// opcion basica : cuadro
vistaCuadro();


// pintar vista cuadrada
function vistaCuadro() {

    const tieneClase = listaIcon.classList.contains("opcion-vista-actual");
    
    if(tieneClase) {
        listaIcon.classList.remove("opcion-vista-actual");
        cuadroIcon.classList.add("opcion-vista-actual");
    }

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
                    ${datoOferta[item].descripcion.substr(0, 100) + "..."}
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

    const tieneClase = cuadroIcon.classList.contains("opcion-vista-actual");

    if(tieneClase) {
        cuadroIcon.classList.remove("opcion-vista-actual");
        listaIcon.classList.add("opcion-vista-actual");
    }
    
    ofertaContenedor.innerHTML = "";

    for(item in datoOferta) {
        ofertaContenedor.innerHTML += `
            <div class="oferta-tarjeta-lista">

            <!-- (( boton puntos - menu rapido emp )) -->

            <div class="menu-rapido-contenedor-lista">
                <div class="caja-puntos-lista">
                    <img class="puntos-lista" src="../imgs/dashboard-imgs/dots-rojo.svg" alt="">
                </div>
                
                <div class="menu-rapido-lista">
                    <div class="menu-rapido-icon"><img src="../imgs/dashboard-imgs/editar.svg" alt=""></div>
                    <div class="menu-rapido-icon"><img src="../imgs/dashboard-imgs/trashcan.svg" alt=""></div>
                </div>
            </div>
            
            <!-- (( boton puntos - menu rapido fin )) -->

            <img class="oferta-lista-img" src="${datoOferta[item].imagen}" alt="">

            <div class="oferta-info-contenedor-lista">

                <div class="oferta-nombre-lista">
                    <a href=""><h3>${datoOferta[item].nombre}</h3></a>
                    <p>${datoOferta[item].categoria}</p>
                </div>

                <div class="oferta-fecha-contenedor-lista">
                    <img src="../imgs/dashboard-imgs/calendar.svg" alt="">
                    <p class="oferta-fecha">${datoOferta[item].fecha}</p>
                </div>

                <p class="oferta-descripcion">
                    ${datoOferta[item].descripcion.substr(0, 150) + "..."}
                </p>

                <div class="info-numero">
                    <div class="likes-coment">
                        <img src="../imgs/dashboard-imgs/heart.svg" alt="">
                        <span>${datoOferta[item].likes}</span>
                        <img src="../imgs/dashboard-imgs/comentario.svg" alt="">
                        <span>${datoOferta[item].comentarios}</span>
                    </div>
                    <div class="precio">
                        $66 <span>/ ${datoOferta[item].opcion}</span>
                    </div>
                </div>

            </div>

        </div>
        
        `;
    }
}

// pinchar icono de cuadros
cuadroIcon.addEventListener("click", vistaCuadro);

// pinchar icono de listas
listaIcon.addEventListener("click", vistaLista);

// TODO: menu-rapido (puntos encima de imagen)
