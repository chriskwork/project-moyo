// ############### Preguntas frecuentes ###############

const preguntasFrecuentes = [
    {
        pregunta: "El teléfono que uso no es español",
        respuesta: "Por ahora triunfon.com sólo está en España por lo que únicamente se pueden introducir números con prefijo español. Si estás interesado en utilizarlo para un negocio ubicado en otro país ponte en contacto con nosotros a través de nuestro email sos@triunfon.com.com."
    },
    {
        pregunta: "No he recibido el SMS para el código de verificación",
        respuesta: `Comprueba que tu móvil tiene conexión y que el número que has introducido es correcto. Además la plataforma te permite un máximo de 3 envíos durante un tiempo limitado. 
        
        Si sigues sin recibir el SMS espera un tiempo de 10 minutos, intenta la acción o ponte en contacto con nosotros a través de nuestro email sos@triunfon.com.com.`
    },
    {
        pregunta: "¿Qué hago si he olvidado mi contraseña?",
        respuesta: "No te preocupes, si has olvidado tu contraseña puedes hacer click en el botón Recordar contraseña. Solo tienes que introducir el email de registro y te enviaremos las instrucciones al correo para que puedas volver a configurar una contraseña"
    },
    {
        pregunta: "He recibido un correo electrónico me dice que he creado una nueva cuenta, pero no me he registrado",
        respuesta: "Lo más probable es que alguien haya intentado registrar una cuenta de triunfon.com utilizando tus datos por error. Ponte en contacto con nosotros a través de nuestro email sos@triunfon.com.com."
    },
    {
        pregunta: "Ya tengo una cuenta de triunfon.com, ¿Puedo entrar con ella en triunfon.com Business?",
        respuesta: "No, triunfon.com y triunfon.com Business son dos plataformas diferentes que funcionan con un registro y un inicio de sesión distinto. Si quieres crearte una cuenta en triunfon.com Business tienes que ponerte en contacto con nosotros a través del email info@triunfon.com.com."
    },
    {
        pregunta: "No he recibido el email de instrucciones para recuperar mi contraseña",
        respuesta: `Espera unos minutos y comprueba la bandeja de spam. Si aún así sigues sin recibirlo es posible que no hayas introducido la dirección correctamente. 
        
        En caso de que esté bien y aún así no recibas el email, ponte en contacto con nosotros a través del email sos@triunfon.com.com.`
    },
    {
        pregunta: "¿Qué hago si me han robado la cuenta o cambiado la contraseña?",
        respuesta: "Si no puedes acceder a tu cuenta y crees que te la han robado, escríbenos a sos@triunfon.com.com y explícanos el problema, nos pondremos en contacto contigo lo antes posible."
    },
    {
        pregunta: "¿Qué es una marca en triunfon.com?, ¿Y un punto de venta?",
        respuesta: `Una marca en triunfon.com es la identificación comercial bajo la que se conoce al negocio, mientras que el punto de venta es el lugar físico donde la marca desarrolla su negocio. 
        
        En triunfon.com es obligatorio crear una marca y luego asociarla a uno o varios puntos de venta. Incluso si solo tienes un punto de venta también es necesario que exista el perfil de marca y el de punto de venta.`
    },
    {
        pregunta: "¿Por qué tengo que añadir un punto de venta a la marca?",
        respuesta: `Por el momento triunfon.com solo trabaja con marcas que tengan un punto de venta físico, por lo que es obligatorio que la marca tenga asociado un punto de venta real.

        En el caso de que el negocio de tu marca sea la venta online o por cualquier otro motivo no tengas punto de venta físico, por ahora no puedes crearte un perfil en triunfon.com Business.`
    },
    {
        pregunta: "¿Cuántos puntos de venta puede tener mi marca?",
        respuesta: `triunfon.com Business te permite gestionar todos los puntos de venta que tenga tu marca.`
    },
    {
        pregunta: "¿Puedo gestionar varias marcas desde el mismo usuario?",
        respuesta: `En triunfon.com Business puedes gestionar tantas marcas como quieras a través de tu mismo usuario. Puedes crear nuevas marcas o coger el permiso de otras marcas que quieras gestionar.

        Si te registras sin haber recibido ninguna invitación de permiso de marca, tendrás que crear obligatoriamente una marca junto a tu perfil de usuario.
        
        Si por el contrario te registras porque has recibido la invitación de un permiso solo tendrás que completar tus datos de usuario y ya podrás empezar a usar triunfon.com.
        
        Puedes crear una nueva marca desde Configuración con el botón Añadir marca.`
    },
    {
        pregunta: "Mi marca no encaja en ninguna de las categorías, ¿qué hago?",
        respuesta: `Las categorías están predeterminadas ya por triunfon.com Business, pero puede que se nos haya pasado alguna. Si has comprobado que tu negocio no encaja en ninguna de las categorías que hay ponte en contacto con nosotros en el email sos@triunfon.com.com e intentaremos solucionarlo.`
    },
    {
        pregunta: "Tengo problemas para marcar mi dirección en el mapa",
        respuesta: `Utilizamos los mapas de Google Maps para encontrar las direcciones. En caso de que no puedas localizar tu dirección, siempre puedes marcar en el mapa tu ubicación exacta.`
    },
    {
        pregunta: "Estoy teniendo problemas al cargar la foto de perfil/portada de la marca.",
        respuesta: `Si la imagen no se carga o al cargarla no aparece como esperabas probablemente excede de los límites de peso o de medida de triunfon.com.

        Para que la imagen aparezca en óptima calidad dentro de la plataforma lo ideal es que no pese más de 2 Mb y tenga estas medidas.`
    },
    {
        pregunta: "¿Cómo añado las redes sociales de mi punto de venta?",
        respuesta: `Si quieres que los clientes vean las redes sociales de tu perfil de punto de venta, puedes añadir los enlaces de Twitter, Facebook, Youtube e Instagram a través de tu perfil de punto de venta. En caso de no añadir ningún enlace esta opción no se visualizará en tu perfil de triunfon.com.`
    },
    {
        pregunta: "¿Cómo subo fotos a la galería de un punto de venta?",
        respuesta: `Las fotos que subes en Promociones y Novedades no se quedan en la galería de tu punto de venta. Si quieres que en tu perfil triunfon.com se queden fijadas las fotos que más te gustan de tu punto de venta, puedes hacerlo a través de tu perfil de punto de venta, en el apartado fotos.`
    },
    {
        pregunta: "¿Qué es un permiso?",
        respuesta: `Puedes añadir a más personas que te ayuden a gestionar tu marca y tus puntos de venta en triunfon.com Business a través de Permisos. Los permisos pueden ser de administrador de marca y de moderador de puntos de venta.

        La persona que elijas recibirá un correo de invitación para avisarle de que puede aceptar el permiso. En cuanto lo haga se activará su permiso y podrá acceder a la marca o a los puntos de venta sobre los que se le ha dado permiso.
        
        El correo de invitación caduca a los 15 días de enviarse, una vez pasado este plazo, si no ha aceptado el permiso tendrás que volver a añadir el permiso. Si la persona que recibe el permiso no es usuario de triunfon.com Business tendrá que registrarse primero para acceder al permiso.`
    },
    {
        pregunta: "¿Puedo dar permiso a otro perfil para administrar o moderar la marca y sus puntos de venta?",
        respuesta: `Si eres administrador, puedes acceder al apartado de permisos de la marca o de alguno de sus puntos de venta y crear nuevos permisos de administrador o moderadores o modificar o eliminar los que ya existen.

        Si eres moderador de un punto de venta, puedes dar permisos de moderador, editar o eliminar permisos sobre ese mismo punto de venta.`
    },
    {
        pregunta: "¿Qué ocurre si quiero eliminar mi cuenta y soy el único administrador de una marca?",
        respuesta: `Si eliminas tu cuenta de triunfon.com Business y eres el único administrador de una marca esta también se eliminará, así como todos sus puntos de venta y el contenido que haya subido. Si no quieres que se elimine tendrás que añadir nuevos permisos de administración a otra persona (y que lo acepte) antes de eliminar tu cuenta.`
    },
    {
        pregunta: "¿Qué necesita una persona para usar el permiso que le he dado?",
        respuesta: `En caso de que una persona con cuenta en triunfon.com Business haya recibido un permiso sobre otra marca, solo tendrá que aceptar el permiso mediante el email que le enviemos a la cuenta que nos haya proporcionado el administrador y se le añadirá a su cuenta. El email de invitación a permisos caducará después de 15 días del envío en caso de que no se acepte.

        En el caso de que la persona aún no tenga cuenta en triunfon.com Business, se tendrá que registrar en la plataforma con el mismo email con el que ha recibido el permiso y una vez registrado se le asignará el permiso automáticamente.`
    },
    {
        pregunta: "¿Qué es un Partner de triunfon.com?",
        respuesta: `Un Partner de triunfon.com es un profesional de la comunicación que gestiona o quiere gestionar alguna marca en triunfon.com.

        Un Partner es una agencia de comunicación o community manager valoradas por triunfon.com para ofrecer a las Marcas sus servicios. Un Partner te ayudará con las publicaciones,el contenido y la gestión de tu perfil en triunfon.com.
        
        Si estás interesado en este servicio, contacta con uno de ellos, él mismo te facilitará sus tarifas, una vez que haya una acuerdo entre ambas partes. Para que trabaje en tu marca solamente necesitarás que te informe del email de su perfil de triunfon.com y darle el permiso correspondiente desde el bloque de Permisos.`
    },
    {
        pregunta: "¿Dónde puedo ver todas las agencias que trabajan como partners de triunfon.com?",
        respuesta: `Disponemos de un apartado en el footer de la web, con acceso a un listado para que conozcas todas los Partners asociados a triunfon.com.`
    },
    {
        pregunta: "¿Cómo me buscan los clientes?",
        respuesta: `Los clientes de tu negocio te encuentra a través de app de triunfon.com. En ella hay diferentes formas en la que pueden encontrarte:

        1. Pueden buscar directamente tu marca y puntos de venta y seguirlos para ver tus publicaciones.
        2. Pueden encontrarte al buscar la categoría de tu negocio cuando están cerca de él. Esto solo pasará en caso de que haya publicado una novedad o promoción en el muro o si alguien ha escrito una experiencia sobre tu negocio. La mayor ventaja de triunfon.com es que tu publicación solo aparecerá en caso de que la persona esté buscando tu categoría y se encuentre en un radio cercano a alguno de tus puntos de venta.
        3. Tu negocio puede aparecer entre los seguidos de otro perfil o en comentarios de publicaciones`
    },
    {
        pregunta: "¿Qué puedo hacer con mis seguidores?",
        respuesta: `A través del CRM podrás conocer algunos datos de tus seguidores como su localización, la fecha en la que empezaron a seguirte, el número de seguidores que tienen, cuáles de las promociones se han canjeado, las experiencias que han escrito sobre tus puntos de venta o las promociones personalizadas que les has enviado.

        Además también podrás enviar promociones personalizadas a quien elijas de forma que sólo el destinatario podrá ver la promoción y canjearla.`
    },
    {
        pregunta: "¿Quién va a ver mis publicaciones?",
        respuesta: `Las publicaciones que hagas la podrán ver los potenciales clientes a través de la app de triunfon.com. Pueden encontrarlas en tu perfil de marca y de puntos de venta siempre,, se podrán ver cuando el usuario busque negocios de tu categoría cerca del radio donde se ubica tu punto de venta.`
    },
    {
        pregunta: "¿Puedo subir más de una imagen a una publicación?",
        respuesta: `No, por ahora solo podrás subir una foto para cada novedad o promoción.`
    },
    {
        pregunta: "¿Cómo programo una publicación?",
        respuesta: `Si quieres que una publicación se publique en el momento que tu elijas puedes programarla. Para ello tendrás que rellenar todos los campos de la novedad o promoción que quieres publicar y, al final, junto a la opción de publicar se encuentra el botón de programar. Haciendo click en él podrás elegir el día y la hora en la que quieres que tu publicación se publique.`
    },
    {
        pregunta: "¿Qué es una experiencia?",
        respuesta: `Las experiencias son publicaciones que los clientes pueden hacer. Existen dos tipos:

        1. Las experiencias de los puntos de venta que pueden incluir imagen del punto de venta o/y texto, y una valoración que puede ser: genial, bien, sin más o mal.
        2. Las experiencias sin punto de venta, que son una publicación de foto o/y texto.`
    },
    {
        pregunta: "¿Puedo responder a una experiencia?",
        respuesta: `Sí, las experiencias son publicaciones en las que cualquier usuario y tu marca puede dar a me gusta o comentarlas.`
    },
    {
        pregunta: "¿Qué es el CRM y para qué sirve?",
        respuesta: `El CRM es un listado de las personas que siguen a tu marca / puntos de venta. Se accede mediante el menú principal y te permite filtrar a tus seguidores en función de sus características, acceder a sus perfiles o crear promociones personalizadas y enviárselas.`
    },
    {
        pregunta: "Si un usuario deja de seguir a mi punto de venta, ¿puedo seguir viendo su perfil en el CRM?",
        respuesta: `Si el usuario no sigue a ningún punto de venta de tu marca dejarás de ver su perfil en el CRM y no podrás volver a enviarle promociones personalizadas..`
    },
    {
        pregunta: "¿Qué son las notificaciones?",
        respuesta: `Las notificaciones son avisos de que alguien ha interactuado con tu perfil de alguna forma: siguiéndolo, dando a me gusta o comentando una publicación, al recibir una experiencia, recibir un mensaje, cuando se caduca una publicación, cuando se publica una promoción programada o cuando hay alguna modificación en los permisos.

        Las notificaciones aparecen accediendo a través del botón de avisos, en la barra lateral de avisos en el apartado de notificaciones.
        
        Recuerda que triunfon.com Business solo guarda las notificaciones durante 30 días, después no volverán a aparecer.
        
        También se pueden activar a través del navegador las notificaciones push. Este tipo de notificaciones requieren de tu aprobación en el navegador.`
    }
];




// ############### Política de privacidad ###############

const docuPrivacidad = [
    {
        titulo: "Recogida de datos, finalidades, base de legitimación y plazos de conservación",
        texto: `La aceptación de esta Política de Privacidad significa que el Usuario faculta a SOCIAL NETWORK triunfon.com, S.A. con NIF A87532826 (en adelante, triunfon.com o la Titular, indistintamente), y domicilio en Calle Leganitos 47, 4º, 28013, Madrid, como titular de la Plataforma, para tratar los datos personales que el Usuario haya facilitado a triunfon.com como responsable del tratamiento, para los fines estipulados a continuación:

        Contacto: el Usuario que lo desee puede ponerse en contacto con la Titular a través del formulario habilitado en el Sitio Web a tal efecto. Los datos personales que suministre serán tratados por triunfon.com para atender la consulta y ponerse en contacto con el usuario.
        La base jurídica que sustenta este tratamiento es el consentimiento del usuario.
        
        El plazo de conservación de los datos para este tratamiento será de un (1) año, salvo que fueran aplicables otros plazos.
        
        Registro: la creación de la cuenta de Marca se realizará por parte de un usuario persona física que represente a la Marca y vaya a gestionarla a través de triunfon.com business, registrándose como tal gestor. Para ello, el Usuario deberá introducir sus datos personales (nombre, apellidos, dirección de email y número de teléfono, que será verificado mediante el envío de un código). triunfon.com tratará los datos facilitados para crear la Marca, gestionarla y permitirle acceder y utilizar sus funcionalidades, asociando los datos del Usuario a la Marca en cuestión, como gestor de la misma.
        La base jurídica que sustenta este tratamiento es el consentimiento del usuario.
        
        Los datos serán conservados mientras el usuario mantenga activa su cuenta, como representante de la Marca en cuestión. Una vez eliminada dicha cuenta, los datos serán borrados y conservados bloqueados durante cinco (5) años, por posibles responsabilidades que pudieran derivarse. Todo ello, salvo que fueran aplicables otros plazos.
        
        Otorgar permisos: se podrán otorgar permisos para gestionar la Marca, bien de forma total, bien para determinados puntos de venta, mediante la opción destinada a tal efecto en el Sitio Web. Para ello, el usuario indicará en la pestaña correspondiente el email o los emails de aquellas personas a las que se quieran otorgar permisos de gestión, independientemente de cuál será su extensión. Los datos indicados serán tratados para contactar con la persona cuyo correo electrónico se ha facilitado, enviándole un email en el que se preverá un enlace para completar el proceso de registro en el Sitio Web, en caso de que así se desee.
        El usuario habrá informado previamente al tercero de la presente Política de Privacidad, del tratamiento que hará triunfon.com de sus datos.
        
        La base jurídica para este tratamiento es el interés legítimo.
        
        El plazo de conservación dependerá de si el tercero se registra finalmente o no. En el primer caso, coincidirá con el plazo previsto para el tratamiento “Registro”. En el segundo supuesto, los datos se borrarán en un plazo de (1) mes.
        
        Cookies: El Sitio Web dispone de tecnología para la implantación de archivos denominados cookies en el equipo que sea utilizado para el acceso y navegación por el Sitio Web. Las cookies pueden ser bloqueadas o deshabilitadas en cualquier momento a través de las opciones de configuración del navegador. Si desea más información puede consultar nuestra política de Cookies. La base jurídica del tratamiento de tales datos se sustenta en el consentimiento del Usuario.`
    },
    {
        titulo: "Finalidades publicitarias y tratamientos especiales",
        texto: `Comunicaciones de triunfon.com: una vez se haya creado la Marca dentro de la Plataforma triunfon.com, la Titular podrá tratar los datos indicados por el Usuario, para enviarle a la Marca comunicaciones comerciales por correo electrónico, notificaciones push en su navegador, o por otros medios electrónicos similares (como mensaje de texto, por ejemplo), a través de los medios de contacto indicados por el usuario; con el fin de informar sobre novedades de servicio en triunfon.com u otro tipo de información relacionada con noticias de interés o con la gestión de la Marca en la Plataforma.
        La base jurídica que sustenta este tratamiento es el interés legítimo de triunfon.com, puesto que se trata de comunicaciones comerciales relacionadas con el servicio que presta al crearse la cuenta de Marca.
        
        Los datos serán conservados con esta finalidad durante todo el tiempo que el Usuario permanezca registrado en la Plataforma, salvo que sean aplicables otros plazos.
        
        Newsletter: el Usuario puede, si lo desea, suscribirse a la newsletter de triunfon.com. Los datos serán tratados para enviarle por email o medios electrónicos similares, información sobre los servicios relacionados con triunfon.com y otras noticias de interés, así como sobre los servicios y noticias de otras empresas: agencias de comunicación y marketing.
        La base que sustenta este tratamiento es el consentimiento del Usuario.
        
        Los datos serán tratados por la Titular hasta que el Usuario cancele su suscripción en la newsletter. Salvo que fueran aplicables otros plazos.`
    },
    {
        titulo: "Comunicación de datos a terceros",
        texto: `Los datos facilitados por el Usuario no serán comunicados a terceros. Únicamente serán accesibles a través de la Plataforma triunfon.com, por todos los usuarios registrados.`
    },
    {
        titulo: "Ejercicio de derechos",
        texto: `El Usuario puede revocar el consentimiento para el tratamiento, haciendo ejercicio de los derechos de acceso, rectificación, supresión, portabilidad, oposición y limitación al tratamiento, poniéndolo en conocimiento de triunfon.com a través de un correo electrónico dirigido a legal@triunfon.com.com o indicándolo a la dirección física arriba indicada, señalando como asunto “Protección de Datos”. En ambos casos, la comunicación deberá ir acompañada de cualquier documento oficial que permita la identificación, para evitar el acceso de sus datos por parte de terceros. Por último, el Usuario podrá comunicar cualquier modificación por escrito o solicitar la baja, indicándolo en cualquiera de las direcciones facilitadas.

        En cualquier momento, el Usuario podrá presentar una reclamación ante la autoridad de control.`
    },
    {
        titulo: "Modificación de la Política de privacidad",
        texto: `triunfon.com se reserva el derecho de modificar en cualquier momento su política de privacidad, respetando la legislación vigente en materia de protección de datos y previa la debida comunicación a los Interesados.`
    },
    {
        titulo: "Idioma aplicable a la presente política de privacidad",
        texto: `El idioma aplicable a esta Política de Privacidad es el español. Cualquier versión de la misma en idioma distinto es ofrecida para comodidad del Usuario y para facilitar su comprensión. No obstante, esta Política de Privacidad se regirá siempre por su versión en español.

        En caso de contradicción entre la Política de Privacidad en cualquier idioma y su versión en español, prevalecerá la versión en español.`
    }
];



// ############### Cookies ###############

const docuCookies = [
    {
        titulo: "¿Qué son las cookies?",
        texto: `Las cookies son pequeños archivos de datos que se reciben en el terminal desde el Sitio Web visitado y se usan para registrar ciertas interacciones de la navegación en un Sitio Web almacenando datos que podrán ser actualizados y recuperados. Estos archivos se almacenan en el ordenador del usuario y contienen datos anónimos que no son perjudiciales para tu equipo. Se utilizan para recordar las preferencias del usuario, como el idioma seleccionado, datos de acceso o personalización de la página.

        Las cookies también pueden ser utilizadas para registrar información anónima acerca de cómo un visitante utiliza un Sitio. Por ejemplo, desde qué página Web ha accedido, o si ha utilizado un “banner” publicitario para llegar.`
    },
    {
        titulo: "Consentimiento",
        texto: `Al acceder al Sitio Web de triunfon.com se ofrecerá cierta información sobre el uso de esta tecnología a través del dispositivo o equipo terminal utilizado, y te solicitaremos que nos otorgues tu consentimiento para ello. Tienes que tener en cuenta que algunas cookies pueden ser necesarias para el funcionamiento del Sitio Web y, si deniegas este consentimiento, el acceso al mismo podría quedar impedido.

        En cualquier momento puede retirar su consentimiento al uso de esta tecnología mediante las funciones de tu navegador, desactivando las cookies o bloqueando la posibilidad de que se descarguen en tu equipo o dispositivo. Consulte el apartado 4. Como cambiar la configuración de las cookies” de esta Política de Cookies para obtener más información al respecto.`
    },
    {
        titulo: "Cookies empleadas en el Sitio Web",
        texto: `triunfon.com utiliza las cookies estrictamente necesarias y esenciales para optimizar la experiencia del usuario en el Sitio Web, utilizando áreas seguras, opciones personalizadas, etc. Asimismo, triunfon.com utiliza cookies que recogen datos relativos al análisis de uso de la Web, con la finalidad de mejorar el servicio de cara al usuario, midiendo el uso y el rendimiento de la página.

        El Sitio web también contiene enlaces a redes sociales (como Facebook, Instagram o Twitter). triunfon.com no controla las cookies utilizadas por estas Web externas. No obstante, para más información sobre las cookies de las redes sociales u otras Webs ajenas, el usuario puede acudir directamente a sus propias políticas de cookies.
        
        En concreto y según su finalidad, triunfon.com utiliza en el Sitio Web los siguientes tipos de cookies:
        
        Cookies técnicas: sirven a la tarea de proporcionar fluidez y comodidad durante la navegación por la página, así como garantizar el correcto funcionamiento del Sitio Web y dotar al mismo de seguridad. Por ejemplo, las que sirven para el mantenimiento de la sesión, la gestión del tiempo de respuesta, rendimiento o validación de opciones, etc. No es necesario informar de su existencia, puesto que su única finalidad es permitir el normal funcionamiento de la página.
        Cookies de personalización: permiten al usuario adaptar el Sitio Web a algunas características generales preestablecidas como puede ser el idioma, el navegador empleado o la región desde donde se accede.
        Cookies de publicidad comportamental: permiten la gestión de los espacios publicitarios existentes en la página de manera que a cada Usuario se le ofrezca contenido publicitario acorde a sus hábitos de navegación y a sus preferencias.
        Cookies de análisis: permiten obtener información orientada al análisis estadístico del uso que los usuarios hacen de la página. Así, permiten conocer las preferencias de los usuarios con el fin de mejorar la oferta de servicios. Por ejemplo, analizando los términos de búsqueda empleados por los usuarios para llegar a la página o estudiando el área geográfica a la que pertenecen la mayor parte de usuarios.
        Otras cookies: en el Sitio Web se utilizan cookies procedentes de terceros, concretamente de redes sociales (por ejemplo: Twitter y Facebook) cuya función es integrar las funcionalidades de las mismas en el Sitio Web.
        A continuación, se ofrece un listado que agrupa las cookies empleadas en triunfon.com, indicando el tipo, origen, finalidad, así como un enlace para que el usuario pueda acceder a las Políticas de Cookies de los distintos sitios web de procedencia.
        
        Cookies de terceros
        Cookies: De análisis
        
        Origen: Google.LLC (Google Analytics)
        
        Información: Identificación de usuario, inicio y terminación de la sesión, cálculo de permanencia en sitio web, frecuencia de visita, localización, navegación por sitio web, URL procedencia de los visitantes, medición de recogida de datos de visitante.
        
        Finalidad: Permite a Google Analytics obtener estadísticas de hábitos de visita y navegación por el sitio web, conocer las preferencias del usuario en cuanto a opciones variables y adaptar la navegación del usuario, hacer sugerencias de navegación conforme a sus preferencias.
        
        Opt-out: Clic
        
        Además de las cookies, tanto nosotros como las empresas arriba listadas podemos utilizar “píxeles de seguimiento” (también conocidos como web beacons o pixel tags). Se trata de pequeñas imágenes transparentes que se integran en el propio Sitio Web (y por tanto, no se almacenan en su equipo), y que nos permiten verificar aspectos como el número de visitantes de una página concreta o la configuración técnica del navegador de los usuarios que acceden a ella. Las finalidades para las que se utilizan son análogas a las descritas en la tabla anterior.`
    },
    {
        titulo: "Cómo cambiar la configuración de las cookies",
        texto: `En cualquier momento podrás retirar tu consentimiento al uso de cookies desactivando o bloqueando su descarga a través de funciones específicas del navegador que utilices.

        Ten en cuenta que, si rechazas o borras las cookies de navegación por el Sitio Web, no podremos mantener tus preferencias, algunas características de las páginas no estarán operativas, no podremos ofrecerte servicios personalizados y cada vez que vayas a navegar por nuestra Web tendremos que solicitarte de nuevo tu autorización para el uso de cookies.
        
        Si, aún así, decides modificar la configuración de tu acceso a la página Web, te facilitamos a continuación un listado de instrucciones y enlaces sobre los pasos a seguir para la activación, desactivación, borrado y gestión de cookies en función de cada navegador:
        
        Apple Safari: Con Safari abierto, pulsar Safari > Preferencias... > Privacidad y selecciona "Bloquear siempre", "Permitir de los sitios que visito" o "Permitir siempre". Más información.
        
        Google Chrome: Con Google Chrome abierto, pulsar en el icono del menú de Chrome < Configuración < Mostrar opciones avanzadas... < Privacidad < Configuración de contenido... < Cookies y configúralo, conforme a sus preferencias. Más información.
        
        Internet Explorer 11: Pulsar en el icono de Internet Explorer en la barra de tareas < Herramientas < Opciones de Internet < Privacidad y personaliza la configuración de cookies según preferencias. Más información.
        
        Mozilla Firefox: Con Firefox abierto, pulse el botón Menú < Preferencias < Privacidad y personalice la configuración de cookies conforme a sus preferencias. Más información.
        
        Opera: Con Opera abierto, pulsa Configuración < Opciones < Avanzado < Cookies y personalice la configuración de cookies conforme a sus preferencias. Más información.
        
        Safari para iOS 8: Pulsa Ajustes > Safari > Bloquear cookies y seleccionar "Permitir siempre", "Permitir de los sitios que visito", "Permitir sólo de los sitios web actuales" o "Bloquear siempre". Más información.
        
        Chrome para Android e iOS: Con Google Chrome abierto, pulsar en el icono del menú de Chrome < Configuración < Mostrar opciones avanzadas... < Privacidad < Configuración de contenido... < Cookies y configúralo conforme a sus preferencias. Más información.
        
        Internet Explorer Mobile: Con Internet Explorer Mobile abierto, pulsar Más < Configuración y personaliza la configuración de cookies conforme a sus preferencias. Más información.
        
        Estos navegadores están sometidos a actualizaciones o modificaciones, por lo que, si la información o los enlaces anteriores estuvieran desactualizados, o si tu navegador no está en esta lista (Konqueror, Arora, Flock, etc) o si no encuentras la manera de gestionar las cookies, consulta con el Sitio Web oficial o ponte en contacto con nosotros.
        
        Si tiene alguna duda, no dude en escribirnos a legal@triunfon.com.com o a la dirección postal indicada más arriba.`
    }
];


// ############### Términos y condiciones ###############


const docuTerminos = [
    {
        titulo: "1. Introducción e información sobre Triunfon.com",
        texto: `Estas condiciones generales (las “Condiciones Legales”) establecen las advertencias, términos y condiciones aplicables al uso de los medios técnicos que NEXTCHANCE SERVICER, S.L (“Nextchance Servicer”) pone a disposición de los usuarios (los “Usuarios”) en la dirección web https://Triunfon.com.com/ (la “Plataforma Web”) y en las aplicaciones para dispositivos móviles o de otro tipo relacionadas (las “Aplicaciones Móviles”). A efectos de las presentes Condiciones Legales, las referencias a “Triunfon.com” se entenderán efectuadas tanto a la Plataforma Web como a las Aplicaciones Móviles, salvo que otro entendimiento resulte del contexto.

        Nextchance Servicer es una sociedad de responsabilidad limitada y nacionalidad española, que dispone de C.I.F. B88185947 y está inscrita en el Registro Mercantil de Madrid, al tomo 38.054, folio 207, hoja M-677482, sección 8.
        
        Los datos de contacto de Nextchance Servicer son los siguientes:
        <ul>
        <li>
        Domicilio: Paseo de la Castellana 259-D, Planta 43 Sur Edificio Torre Espacio, 28046, Madrid.
        </li>
        <li>
        Dirección de correo electrónico: contact@Triunfon.com.com
        </li>
        </ul>`
    },
    {
        titulo: "2. ¿Qué NORMAS COMPONEN mi RELACIÓN CONTRACTUAL CON Nextchance Servicer?",
        texto: `Para el uso de Triunfon.com será necesario el registro, así como la aceptación de las presentes Condiciones Legales y de la Política de Privacidad y de Cookies de Triunfon.com [enlace a la Política de Privacidad y Cookies de Triunfon.com]. Además, resultarán de aplicación a los Usuarios aquellas otras condiciones generales y/o particulares que suscriban con Triunfon.com en relación con la utilización de determinados recursos y/o contenidos puestos a su disposición en Triunfon.com o con ocasión de promociones específicas (tales como períodos de prueba gratuitos o exenciones y reducciones de cuota promocionales para determinados Usuarios).

        Al conjunto de términos y condiciones que resulte de las Condiciones Legales, Política de Privacidad y de Cookies de Triunfon.com y las condiciones generales y particulares que cada Usuario suscriba con Triunfon.com se denominará la “Relación Contractual”. A efectos aclaratorios, no quedarán comprendidas en la Relación Contractual las condiciones que rijan las eventuales relaciones contractuales que establezcan los Usuarios entre sí, a las que Triunfon.com es completamente ajena.
        
        La mera utilización de Triunfon.com conlleva automáticamente la aceptación plena y sin reserva por el Usuario de todas y cada una de las presentes Condiciones Legales en la versión publicada por Nextchance Servicer en cada momento. En consecuencia, el Usuario debe leer periódicamente las Condiciones Legales para conocer sus variaciones, que no necesariamente serán advertidas específicamente a los Usuarios.`
    },
    {
        titulo: "3.  ¿cómo funciona Triunfon.com y qué responsabilidad asume Nextchance Servicer?",
        texto: `Triunfon.com es una interfaz digital que permite a terceros independientes de Nextchance Servicer (llamados “Handys” y “Negocios”) ofertar bienes y servicios a precios descontados y a los Usuarios llamados “Billioners” contratar con aquellos la adquisición de tales bienes y servicios. En adelante, se denominará “Transacción” a cada adquisición de bienes o servicios por un Billioner a un Handy o Negocio a través de Triunfon.com.

        Para poder completar una Transacción, los Billioners deberán disponer de los cupones virtuales de descuento que Nextchance Servicer emite de acuerdo con los procedimientos establecidos en estas Condiciones Generales y que se llaman “Bithands”. Cada Bithand da la posibilidad de obtener el equivalente a 1 € de descuento (o, en el caso de aquellas Transacciones que se efectúen en moneda distinta del Euro, el equivalente que en cada momento aparezca publicado en Triunfon.com). Los Bithands usados por los Billioners para obtener esos descuentos serán redimidos en el momento de la Transacción (esto es, se cancelarán en el acto, dándose de baja del saldo existente en el wallet asociado con la cuenta del Billioner y en ningún caso serán transmitidos a los Negocios o Handys).
        
        En Triunfon.com existen dos modalidades de Usuarios:
        
        “Usuarios Particulares” son todas aquellas personas físicas que se registran en Triunfon.com para actuar como “Billioners”, esto es, como consumidores o usuarios finales de los bienes y servicios que ofertan otros Usuarios.
        Además, los Usuarios Particulares podrán actuar como “Handys” si desean ofrecer bienes y servicios a otros Billioners esporádicamente y de forma no profesional (por ejemplo, vender una bicicleta, pasear de manera ocasional a perros o dar de vez en cuando clases de inglés). En caso de que un Handy quiera intervenir, producir o distribuir bienes o prestar servicios con sus propios recursos, medios u organización y, en consecuencia, realizar propiamente una actividad económica, deberá darse de alta como un Negocio y cumplir con todas las obligaciones legales y administrativas al efecto.
        
        “Negocios” son aquellos Usuarios personas físicas o jurídicas que ofrecen bienes o servicios de forma profesional (por ejemplo, una tienda de ropa, una peluquería, un electricista, una abogada o un restaurante) para lo cual cumple con sus obligaciones legales y está dado de alta en el Régimen corresopondiente de la Seguridad Social y en la Administración Tributaria.
        Es importante que los Usuarios sepan que Nextchance Servicer no es responsable ni de los anuncios ni de las Transacciones que se efectúan en Triunfon.com. Éstos son iniciativa y responsabilidad de los Handys y Negocios que los realizan y las Transacciones y los pagos a ellas asociados se producirán exclusivamente entre los Usuarios, sin intervención de Nextchance Servicer, cuya función se limita a poner a disposición una plataforma donde los Handys y Negocios anuncian sus productos y servicios y los Billioners pueden adquirirlos y a actualizar el saldo de Bithands del Billioner tras la Transacción.
        
        Nextchance Servicer no interviene ni recibe comisión alguna por las ventas de productos ni por las prestaciones de servicios de los Usuarios, quedando al margen de la relación entre Negocios o Handys y Billioners. Nextchance Servicer no presta ninguno de esos servicios ofertados, ni es fabricante, proveedor o distribuidor de los productos ofertados.
        
        Tanto los Negocios como los Handys son terceros ajenos a Nextchance Servicer, por lo que sus ofertas serán válidas en el plazo, territorio y condiciones que ellos indiquen. Tales ofertas se regirán por las condiciones generales y particulares que establezcan esos Negocios y Handys. Nextchance Servicer, en tanto que se limita a gestionar la plataforma donde se comunica la existencia de esas ofertas realizadas por los Negocios y Handys, ni puede ni asume obligación de supervisar la actuación de los Usuarios ni garantiza a ninguno de ellos las ofertas ni la disponibilidad de los productos ni la correcta ejecución del servicio que realizan Handys y Negocios, sin perjuicio de las medidas que pueda adoptar en caso de tomar conocimiento de incumplimientos.
        
        Cada Usuario, por tanto, debe actuar con prudencia conforme a su propio criterio, discrecionalidad y responsabilidad.
        
        Asimismo, los Billioners deben ser conscientes de que, al igual que ellos, los Handys y Negocios son libres de abandonar Triunfon.com en cualquier momento. Desde ese mismo momento, Handys y Negocios no estarán obligados a atender las peticiones de descuento de los Billioners.`
    },
    {
        titulo: "4.  Posición y responsabilidad de Nextchance Servicer en relación con los contenidos de Triunfon.com",
        texto: `Los contenidos subidos a o publicados en Triunfon.com por terceros ajenos a Nextchance Servicer, incluyendo por cualesquiera Usuarios, serán denominados “Contenidos de Usuario”.

        Nextchance Servicer se limita a facilitar el alojamiento e instrumentos de búsqueda y enlace de manera que los Usuarios, bajo su sola responsabilidad y control, puedan acceder a los Contenidos de Usuario y llevar a cabo las acciones o Transacciones de su interés.
        
        Los Usuarios deben tener presente que Nextchance Servicer no crea, controla ni determina los Contenidos de Usuario, ni tampoco asume obligación alguna de supervisarlos. Estos contenidos son creados, alojados, publicados, compartidos y modificados por los Usuarios de manera libre e independiente y bajo su sola responsabilidad.
        
        La oferta y contratación de bienes y servicios en Triunfon.com quedará sujeta a la aceptación por el Billioner de las condiciones generales y/o particulares establecidas por el Handy o Negocio correspondiente, siendo Triunfon.com completamente ajena a las relaciones contractuales que se establezcan entre los Usuarios.
        
        Nextchance Servicer no se hace responsable de la prestación del servicio y/o envío del producto, estableciéndose la relación contractual entre el Billioner y el Handy o Negocio directa y exclusivamente. Por tanto, el Usuario remitirá cualquier reclamación directamente a la empresa o comerciante, sin perjuicio de poder denunciar ese hecho a Nextchance Servicer para su toma en consideración, en su caso.
        
        Por todo ello, Nextchance Servicer no asume responsabilidad alguna en relación con los Contenidos de Usuario. En particular, Nextchance Servicer no confirma ni garantiza la identidad ni veracidad de los Usuarios ni de sus datos, de los anuncios por ellos publicados, ni de sus datos o características, de las relaciones entre los Usuarios, ni de las relaciones comerciales que en su caso se establezcan entre los Usuarios por razón de los Contenidos de Usuario.
        
        Entre otros, Nextchance Servicer no verifica la existencia de poderes de representación ni la suficiencia de los existentes para que un Usuario pueda actuar por cuenta de una determinada persona física o jurídica. Por lo tanto, cada Usuario deberá llevar a cabo un uso diligente y prudente de Triunfon.com interactuando con Usuarios que merezcan su confianza, como lo harían fuera de Internet. La información sobre un Usuario que exista en Triunfon.com (la información de su perfil, las Valoraciones y las experiencias que se publiquen en relación con ese Usuario) no supone garantía por Nextchance Servicer ni exime al Usuario de observar la debida diligencia.
        
        Asimismo, Nextchance Servicer tampoco garantiza, verifica ni asume responsabilidad alguna en relación con el cumplimiento de la normativa tributaria, incluyendo en materia de expedición y conservación de facturas, que incumbe exclusivamente a los Usuarios que ofrezcan productos o servicios a través de Triunfon.com.
        
        Sin perjuicio de ello, los Usuarios podrán y deberán denunciar cualquier irregularidad o infracción que detecten en relación con los Contenidos de Usuario y/o con la identidad y/o veracidad de los Usuarios y sus relaciones a Nextchance Servicer por medio del sistema previsto en estas Condiciones Legales y a los únicos efectos aquí previstos.`
    },
    {
        titulo: "5. Menores",
        texto: `Triunfon.com no se dirige en ningún caso a menores de edad (en el caso de España, menores de 18 años). SI ERES MENOR DE EDAD NO UTILICES Triunfon.com, NI TE REGISTRES, NI NOS DES DATO ALGUNO SOBRE TI NI SOBRE NINGUNA PERSONA (NI AMIGOS, NI FAMILIARES, ETC.).`
    },
    {
        titulo: "6.  Precio de los servicios prestados por Triunfon.com Y DERECHO DE DESISTIMIENTO",
        texto: `6.1  Precio
        La utilización de Triunfon.com conlleva el pago por parte del Usuario de la cuota anual que en cada momento se publique por Nextchance Services en Triunfon.com para cada tipo de usuario, que estará visible de modo permanente en la Plataforma Web y las Aplicaciones Móviles y que será aceptada por el Usuario en el proceso de registro, sin perjuicio de su posible actualización periódica, que el Usuario podrá consultar. El impago de la cuota anual dará derecho a Nextchance Servicer a cancelar la suscripción del Usuario y, en su caso, a reclamar al Usuario los gastos de gestión que se hayan ocasionado.
        
        La suscripción se realizará por períodos de un año a contar desde la fecha de registro (“Periodos de Facturación”) y se renovará de forma automática al finalizar cada Periodo de Facturación, produciéndose el pago de la cuota anual del nuevo Periodo de Facturación en el momento de la renovación, salvo que el Usuario comunique su voluntad de cancelar la suscripción o desactive la suscripción en Triunfon.com al menos diez días antes de la renovación. La cancelación de la suscripción antes de la finalización de un Periodo de Facturación no dará derecho a reclamar la parte proporcional de la cuota anual, sin perjuicio de lo previsto en el apartado 6.2.
        
        La cuota anual da derecho a acceder y a usar los recursos que en cada momento estén disponibles en Triunfon.com y a recibir de Nextchance Servicer las cantidades de Bithands que, en cada momento, se asignen a los Usuarios de su categoría en Triunfon.com, cantidades que podrán variar a lo largo del tiempo y en función de las circunstancias.
        
        En todo caso, los Bithands únicamente se pueden usar para obtener descuentos en las ofertas de los Handys y Negocios que estén vigentes y disponibles y en los términos establecidos al efecto por los Handys y Negocios en cada caso. Asimismo, los Bithands, además de estar sujetos a los plazos de caducidad expuestos en la Condición Legal 3.5, desaparecerán de la cuenta del Usuario en caso de baja o pérdida o cancelación de su cuenta en Triunfon.com, así como cuando Nextchance Servicer cese en el servicio. De igual modo, Nextchance Servicer podrá a su discreción retirar Bithands del monedero de los Usuarios en casos justificados y, entre otros, en los supuestos de largos periodos de inactividad, fraude, o mal uso de la Triunfon.com.
        
        Adicionalmente, Nextchance Servicer podrá establecer remuneraciones adicionales para un determinado servicio o funcionalidad cuando se establezca en las correspondientes condiciones particulares que el Usuario deba aceptar para acceder a dicho servicio o funcionalidad.
        
        Nextchance Servicer podrá variar o revisar la cuota anual y la remuneración por la prestación de sus servicios, informando de ello a los Usuarios a través de la página web y/o la app, con 30 días de antelación respecto del siguiente Periodo de Facturación. La nueva remuneración y sus términos serán aplicables a partir del Periodo de Facturación que comience después de la notificación del cambio.
        
        6.2  Derecho de desistimiento
        El Usuario gozará de un derecho de desistimiento de 14 días naturales a contar desde el día en que se realice la suscripción, transcurrido el cual se procederá al cargo de la cuota anual. El derecho de desistimiento podrá ejercitarse directamente en las secciones correspondientes de la Plataforma Web y de las Aplicaciones Móviles o mediante el envío de un correo electrónico a la dirección info@Triunfon.com.com indicando en el asunto “Desistimiento”.
        
        A efectos aclaratorios, si el Usuario hubiere suscrito un período de prueba, el plazo de desistimiento de 14 días naturales comenzará a contar en la fecha en que el Usuario suscribió el referido período de prueba. Sin perjuicio de ello, en el caso de que el período de prueba fuese superior a 14 días naturales, el Usuario podrá desistir gratuitamente en cualquier momento anterior a la finalización del período de prueba.`
    },
    {
        titulo: "7.  Obligaciones de los Usuarios",
        texto: `El Usuario se obliga a utilizar Triunfon.com de conformidad con las presentes Condiciones Legales con plena observancia y respeto de la legislación aplicable y de los derechos de terceros asumiendo, además, las siguientes obligaciones:

        7.1. Únicamente creará y utilizará una cuenta de Usuario y un único nombre de Usuario, que será público para todo Triunfon.com e identificará a todos los efectos su operativa en él. Los datos introducidos por el Usuario deberán ser veraces, exactos y actualizados.
        
        7.2. Preservará la confidencialidad de las claves de acceso y cualesquiera otros elementos que permitan la suplantación de su identidad y, en caso de que considere que se ve amenazada, lo comunicará sin demora a Nextchance Servicer y procederá a su actualización o sustitución inmediata para evitar utilizaciones no autorizadas de su nombre o cuenta de Usuario.
        
        7.3. Omitirá el empleo de cualquier dato, información o Contenido de Usuario accesible en Triunfon.com para fines distintos del uso de Triunfon.com según lo previsto en la Relación Contractual.
        
        7.4. Se abstendrá de dirigir cualquier clase de oferta o propuesta comercial a los Usuarios que resulte ilícita, constitutiva de delito o de algún modo contraria al ordenamiento jurídico o atente contra derechos de terceros.
        
        7.5. El Usuario será el único responsable del cumplimiento de las obligaciones administrativas, fiscales, laborales o de otro tipo que imponga la legislación vigente para la realización o aceptación de las ofertas de bienes y servicios que lleve a cabo en Triunfon.com, así como de las obligaciones derivadas de la eventual contratación en relación con los referidos bienes y servicios y de cualesquiera daños y perjuicios de naturaleza contractual o extracontractual que eventualmente pudieran ocasionarse con ocasión de las relaciones entre los Usuarios.
        
        7.6. El Usuario reconoce y acepta que Triunfon.com y Nextchance Servicer son ajenos a las eventuales relaciones establecidas entre los Usuarios con ocasión de las ofertas de bienes y servicios publicadas en Triunfon.com y que, por tanto, Nextchance Servicer no asume ninguna responsabilidad por este concepto.
        
        7.7. Asumirá plena responsabilidad por cualesquiera actuaciones y Contenidos de Usuario atribuibles a su nombre o cuenta de Usuario, salvo que hubiera comunicado con la suficiente antelación a Nextchance Servicer una incidencia que ponga en riesgo la confidencialidad de su clave de acceso, haya adoptado las medidas necesarias para prevenir su uso no autorizado conforme a estas Condiciones Legales y existan indicios claros de que dicha actuación no ha sido llevada a cabo por el Usuario.
        
        7.8. Suministrará a Nextchance Servicer y al resto de Usuarios siempre datos e información ciertos, auténticos y legítimos.
        
        7.9. En general, no utilizará Triunfon.com para realizar actividades contrarias a las leyes, a la moral, las buenas costumbres o al orden público. En concreto, y a mero título enunciativo, se abstendrá de:
        
        7.9.1. Llevar a cabo actuaciones contrarias a la legislación sobre blanqueo de capitales o terrorismo;
        
        7.9.2. Realizar cualesquiera actividades que contravengan o atenten contra derechos fundamentales y libertades públicas reconocidas constitucionalmente, en los tratados internacionales a los que España se haya adherido o en el resto del ordenamiento jurídico;
        
        7.9.3. Falsear los datos relativos a una Transacción o a un Usuario de manera que pueda constituir un delito de estafa, falsedad documental, apropiación indebida, etc.;
        
        7.9.4. Revelar secretos empresariales o comerciales de otros Usuarios o información confidencial de éstos que le haya sido suministrada en el contexto de su relación en Triunfon.com;
        
        7.9.5. Realizar cualesquiera comunicaciones constitutivas de actos de publicidad ilícita, engañosa o desleal y, en general, de competencia desleal, de violación del derecho al honor y a la propia imagen o contrarias a la legislación de consumidores y usuarios y comercio electrónico, así como cualesquiera comunicaciones que, por su forma, contexto o contenido, resulten ofensivas, amenazantes o discriminatorias por razón de género, identidad u orientación sexual o de género, raza, religión, edad, discapacidad o cualquier otra circunstancia;
        
        7.9.6. Difundir, transmitir o poner a disposición de terceros cualquier tipo de información, elemento o contenido que pueda conllevar una infracción de la legislación de protección de datos de carácter personal, así como realizar cualquier tipo de conducta que suponga una vulneración de los derechos de terceros protegidos por la legislación de propiedad intelectual e industrial;
        
        7.10. Omitirá el empleo de medios o instrumentos técnicos o informáticos que pudieran impedir o dificultar el normal funcionamiento de Triunfon.com o dañar las herramientas y dispositivos técnicos integrados en Triunfon.com u otros pertenecientes a Nextchance Servicer o a los Usuarios;
        
        7.11. Omitirá el empleo de cualquier herramienta técnica o informática que permita la extracción, automatizada o sustancial, de datos o contenidos alojados o almacenados en o accesibles por medio de Triunfon.com, tales como web crawlers, spiders, etc.`
    }
];


// ############### Condiciones de contratación ###############

const docuContratacion = [
    {
        titulo: "Aviso legal",
        texto: `SOCIAL NETWORK triunfon.com, S.A. con NIF A87532826 (en adelante, triunfon.com o la Titular, indistintamente), y domicilio en Calle Leganitos 47, 4º, 28013, Madrid, inscrita en el Registro Mercantil en el Registro Mercantil de Madrid en el Tomo 34654, Folio 50, Sección 8, Hoja 623351, inscripción 1ª es titular del sitio web accesible desde la URL https://business.triunfon.com.com/ (en adelante, triunfon.com business o el Sitio Web, indistintamente).

        El objetivo principal de triunfon.com es conectar a los usuarios entre sí, y con los negocios y establecimientos que formen parte de la comunidad, para que éstos puedan darse a conocer mediante la publicación de sus ofertas, descuentos promocionales y todo tipo de contenido.
        
        Este texto contiene las Condiciones Generales que regulan el uso de la Plataforma por parte de los negocios que tengan una cuenta en triunfon.com y las personas que utilizan dicha cuenta en nombre de los mismos (en adelante, las Marcas y los Usuarios, respectivamente).
        
        Para cualquier duda, o sugerencia, puede enviarnos un correo electrónico a la siguiente dirección: sos@triunfon.com.com.`
    },
    {
        titulo: "Condiciones Generales de Contratación",
        texto: `
        <h4>Partes</h4>
        De un lado, SOCIAL NETWORK triunfon.com, S.A. con NIF A87532826 (en adelante, triunfon.com o la Titular, indistintamente), y domicilio en Calle Leganitos 47, 4º, 28013, Madrid, titular del sitio web accesible a través de la URL https://business.triunfon.com.com/ (en adelante, el Sitio Web) y, de otra, el Comprador, entendido como cualquier Marca que disponga de una cuenta en el Sitio Web, creada y gestionada por una persona física mayor de edad conforme a la legislación española, que accederá al Sitio Web representación de la Marca, completando los pasos allí establecidos para la contratación del servicio triunfon.com Business, incluida la aceptación de estas Condiciones.
        
        <h4>Objeto</h4>
        El objeto de las presentes Condiciones Generales de Contratación (CGC) es regular la contratación por parte de la Marca del servicio de contratación de triunfon.com Business, que permitirá que las promociones y otro contenido publicado por la Marca goce de una mayor visibilidad en la Plataforma triunfon.com, a cambio de la contraprestación económica que corresponda.
        
        <h4>Proceso de contratación</h4>
        El proceso de contratación comienza en el momento de la validación por triunfon.com de la Marca solicitada. En caso de ser denegada la validación, la Marca no se hará pública y será eliminada.
        
        Disponemos de diferentes tarifas y servicios que se pueden contratar a través del mismo Sitio Web, seleccionando la opción deseada.
        
        Cuando en la Web se establezca ofertas y descuentos por campañas promocionales, simultáneamente a su contratación triunfon.com procederá a notificar al Usuario las condiciones aplicadas.
        
        El proceso de contratación en el Sitio Web consta de los siguientes pasos:
        
        Seleccionar la acción destinada a la contratación.
        Seleccionar la opción preferida por el Comprador.
        Introducir los datos que se soliciten, siendo obligatorios: los datos de pago, datos identificativos, datos de facturación incluyendo Número de Identificación Fiscal (NIF).
        Los medios de pago que se pongan a disposición.
        Por último, será necesario que el Comprador revise su contratación y, en función del método seleccionado, proceda al pago o, en caso contrario, simplemente confirme su voluntad de adquirir.
        triunfon.com confirmará haber recibido la voluntad de contratar del Comprador y, en su caso, también confirmará el pago. En su caso, remitirá por correo electrónico la correspondiente factura. Con la aceptación de estas (CGC) el Comprador consiente el envío de factura electrónica.

        <h4>Política de Precios</h4>
        Los precios de los servicios se harán públicos en la Web en EUROS y no incluyen IVA o cualesquiera otros impuestos aplicables. No obstante, la información relativa a impuestos es susceptible de modificaciones como consecuencia de cambios en los mismos.
        
        Es posible que el Sitio Web incluya promociones, descuentos, números gratuitos, etc. Tales circunstancias aparecerán reflejadas en pantalla, al igual que las eventuales condiciones aplicables en su caso.
        
        <h4>Modalidades triunfon.com Business</h4>
        Las distintas opciones de servicios que la Marca podrá contratar son:
        
        Todas las Marcas disponen de un plan básico gratuito que consta de un perfil público, siendo de pago las publicaciones que se realicen. Se ofrece la opción de ampliar este plan básico de acuerdo con las tarifas y beneficios establecidos en la web. El coste de los servicios difiere según el número de puntos de venta de la marca.
        
        Para aquellos casos que seleccionen las tarifas cerradas, se ofrecen los siguientes planes Premium:
        
        Básico: Plan gratuito y limitado, con un uso de crear publicaciones previo pago.
        Estándar: Plan de pago que permite crear novedades limitadas y promociones ilimitadas,sin disponer de opción a promociones especiales.
        Profesional: Plan de pago que permite de manera ilimitada de usar todas los tipos de publicaciones y herramientas de la Plataforma.
        La contracción de los planes podrá realizarse de manera mensual o anual con renovación automática, desde el día de inicio del contrato.
        
        <h4>Condiciones de Uso</h4>
        Renovación automática
        Una vez recibido el pago por parte de triunfon.com, se pondrá a disposición del Comprador el servicio Premium contratado. Hasta el momento que el pago no se haga efectivo, triunfon.com se reserva el derecho de no prestar el servicio solicitado.
        
        Transcurrido el período contratado, se cobrará automáticamente el siguiente a través del medio de pago seleccionado, salvo renuncia expresa por el comprador. Para evitar la renovación automática, el comprador deberá comunicar su renuncia con al menos 5 días de antelación a la fecha de cierre de cada período de facturación.
        
        Una vez finalizado el periodo contratado para un plan Premium, de no producirse su renovación o la contratación de otro plan Premium, se pasará a prestar los servicios correspondientes al plan Básico.
        
        <h4>Establecimientos</h4>
        La Marca podrá contratar el servicio triunfon.com Business Premium viéndose el precio afectado según el número de establecimientos registrados.
        
        <h4>Eliminación de la Marca</h4>
        Cuando la cuenta de Marca sea eliminada de triunfon.com Business, en caso de que no se haya agotado el crédito o período Premium contratado, el Comprador y en concreto la Marca no tendrá derecho de reembolso o devolución del importe en metálico.
        
        <h4>Aceptación de las CGC</h4>
        Cuando la contratación se realice íntegramente a través del Sitio Web, el Comprador deberá leer las presentes CGC y aceptarlas de forma expresa, haciendo clic en la casilla de verificación del consentimiento correspondiente, que se encuentra desmarcada por defecto, al final del proceso de compra.
        
        Cuando la compra se realiza de manera telefónica, el Comprador deberá igualmente leer las presentes Condiciones y aceptarlas de forma expresa, remitiendo las mismas junto con la oferta que las acompaña, debidamente firmada.
        
        <h4>Derecho de desistimiento</h4>
        Dada la naturaleza del servicio y la condición de no consumidor de la Marca, no se aplicará derecho de desistimiento alguno respecto de la contratación del servicio triunfon.com Business Premium.
        
        <h4>Obligaciones de las partes</h4>
        Obligaciones de triunfon.com
        En virtud de estas CGC, triunfon.com se compromete a:
        
        Poner los mayores esfuerzos para la ejecución de los tramites necesarios para la prestación del servicio a la Marca.
        Cumplir con cualesquiera otras obligaciones contenidas en las presentes Condiciones o en cualesquiera otras condiciones que resultaran aplicables.
        Obligaciones del Comprador
        Con la aceptación de estas CGC el Comprador se compromete a:
        
        Pagar en tiempo y forma las cantidades correspondientes, incluyendo tasas, impuestos y cualesquiera otros costes especificados durante el proceso de compra. La falta de pago, cuando ésta no tuviera lugar en el último paso del proceso de compra eximirá a triunfon.com del cumplimiento de sus obligaciones.
        Responder de la autenticidad y precisión de cualesquiera datos hayan sido facilitados para realizar la contratación.
        Asumir la responsabilidad derivada de no cumplir los requisitos exigidos por triunfon.com para ostentar la condición de Comprador o de la no posesión de la documentación requerida para realizar el pedido.
        Cumplir cualesquiera otras obligaciones incluidas en las presentes CGC o en cualesquiera otras condiciones que resultaran aplicables, como puedan ser las Condiciones Generales de Uso o las Particulares de Registro, y asumir cualquier responsabilidad derivada de su incumplimiento, dejando totalmente indemne a triunfon.com.

        <h4>Protección de datos de los usuarios particulares</h4>
        La Marca (entendiéndose incluidos a estos efectos todos los Usuarios que accedan a través de su cuenta como gestores de la Marca, o bien de uno o varios puntos de venta de la misma) deberá cumplir lo dispuesto en las presentes CGU en cuanto a la protección de datos personales de los usuarios registrados en triunfon.com.
        
        La Marca podrá acceder a los datos de los usuarios particulares que tengan una cuenta personal en triunfon.com (en el presente apartado se les denominará “interesados”), siempre que éstos estuvieran publicados en su perfil, a menos que se les diera la posibilidad de restringir la accesibilidad de su perfil configurando su cuenta como privada.
        
        Obligaciones de la Marca
        Los datos de los interesados, publicados en su perfil personal, son accesibles por la Marca exclusivamente en el ámbito de la Plataforma triunfon.com, quedando prohibido su tratamiento para fines distintos al uso dentro de la Plataforma.
        
        La Marca se abstendrá de tratar los datos de los interesados registrados en triunfon.com para fines distintos a aquellos para los que los interesados hubieran otorgado su consentimiento. Por tanto, la Marca sólo podrá tratar los datos a través de su cuenta de triunfon.com business, para los siguientes fines:
        
        Ser seguidor del interesado en la Plataforma triunfon.com.
        Siempre que el interesado sea seguidor de la Marca, enviarle a su cuenta personal en triunfon.com información sobre sus productos y/o servicios, descuentos, ofertas y otras promociones.
        Siempre que el interesado sea seguidor de la Marca, enviarle a su cuenta personal en triunfon.com información sobre sus productos y/o servicios, descuentos, ofertas y otras promociones personalizadas, en función de las características del interesado seguidor (localización, franja de edad, sexo e intereses indicados en su perfil).
        En caso de que la Marca contratara el servicio a triunfon.com previo pago, ésta podrá enviar a los interesados publicidad sobre sus productos y servicios a través de la Plataforma, independientemente de que fueran o no seguidores. No obstante, este tratamiento se regulará en las condiciones de contratación correspondientes.
        La Marca no podrá tratar los datos personales de los interesados para crear bases de datos o de cualquier otro modo exportarlos fuera de la Plataforma triunfon.com. Tampoco podrá comunicarse con los interesados fuera de la Plataforma, quedando prohibido el envío de comunicaciones comerciales, salvo que éstos le dieran su consentimiento explícito a la Marca.
        
        En caso de que el interesado deje de ser seguidor de la Marca, ésta ya no podrá enviar promociones o cualquier otro contenido para el que fuera necesario que el interesado ostente la condición de seguidor.
        
        Igualmente, si el interesado comunica a la Marca, bien directamente bien mediante la Plataforma de triunfon.com, o de cualquier otro modo revoca su consentimiento para el envío de mensajes a su cuenta personal de triunfon.com, la Marca se abstendrá de enviarle dichas comunicaciones, incluyendo las promocionales de cualquier tipo.
        
        Responsabilidad
        triunfon.com no se hace responsable de los incumplimientos y/o negligencias en que incurra la Marca respecto a las presentes CGU o la normativa vigente en materia de protección de datos./p>
        
        La Marca asume toda la responsabilidad que pudiera irrogarse a triunfon.com, a quien mantendrá indemne, como consecuencia de cualquier tipo de sanciones administrativas impuestas por las autoridades correspondientes, así como de los daños y perjuicios por procedimientos judiciales o extrajudiciales contra triunfon.com, como consecuencia de cualquier incumplimiento culposo o doloso de sus obligaciones contractuales o legales de protección de datos. Quedan incluidos en esta garantía todos los casos gastos por minutas de abogado, procurador y cualesquiera otros profesionales, considerándose asimismo causa suficiente para instar por triunfon.com la resolución de las presentes CGU y, por tanto, la suspensión o eliminación de la Marca.
        
        En caso de que el interesado reclamara indemnización por daños y perjuicios derivados de una infracción por parte de la Marca de las presentes CGU o normativa vigente reguladora de protección de datos personales, la Marca será la responsable ante dicha reclamación.
        
        <h4>Exclusión de responsabilidad</h4>
        triunfon.com en ningún caso será responsable de los daños y perjuicios que se causen al Comprador por causas imputables a éste.
        
        triunfon.com será responsable exclusivamente de los daños y perjuicios que se causen al Comprador como consecuencia de las contrataciones realizadas a través del Sitio Web, cuando se deriven de una actuación dolosa de aquél.
        
        A título meramente enunciativo y sin ánimo de exhaustividad, triunfon.com no será responsable de:
        
        La utilidad que para el Comprador tengan los servicios contratados a través del Sitio Web.
        La adecuación de los servicios a las necesidades reales del Comprador.
        Los daños personales o materiales provocados como consecuencia de la utilización de los servicios.
        El aumento o disminución del volumen de negocio del Comprador, de sus beneficios, de la efectividad de su publicidad u otros asuntos relacionados con la gestión de negocio de la propia Marca.
        El Comprador declara que los servicios objeto de contratación lo son bajo su propio riesgo y ventura, limitándose la actividad de Publicar a la ejecución de las tareas materiales necesarias para hacerle llegar aquellos productos que hubiera seleccionado. En ningún caso triunfon.com es responsable de la elección de los servicios efectuada por el Comprador, incluso aunque triunfon.com le haya asesorado al respecto, y de la falta de diligencia de éste a la hora de comprobar las especificaciones de los productos objeto de pedido.
        
        En cualquier caso, la responsabilidad que asume triunfon.com frente al Comprador, en ningún caso incluye el lucro cesante y se limitará, en cualquier caso, como máximo y por cualquier concepto, al importe total percibido por triunfon.com del Comprador conforme a la estipulación sobre condiciones económicas de las presentes Condiciones.
        
        <h4>Indemnización</h4>
        El incumplimiento por parte del Comprador de las presentes CGC o de cualesquiera otras que resultaran aplicables puede suponer daños y perjuicios para triunfon.com. En este sentido, el Comprador estará obligado a resarcir a aquél de cualquier daño, perjuicio, pérdida o coste (como pueden ser los honorarios de abogados y procuradores).
        
        Asimismo, si por los incumplimientos del Comprador se generaran cualquier tipo de reclamaciones o procedimientos contra triunfon.com, aquél deberá dejar a triunfon.com indemne de los mismos, pudiendo éste reclamarle cualquier gasto, coste, daño o perjuicio derivado de los mismos.
        
        Modificaciones
        triunfon.com y las presentes CGC pueden, en cualquier momento y sin necesidad de previo aviso, ser actualizadas y/o modificadas.
        
        Dichas modificaciones entrarán en vigor a partir de su publicación en el Sitio Web a través de cualquier medio y forma.
        
        La modificación de las presentes CGC sólo afectará a los Compradores que las acepten con carácter posterior a dicha modificación.
        
        Cuestiones generales
        Salvaguarda e interpretación de estas CGC
        Las presentes CGC, las Condiciones Particulares aceptadas en cada momento y cualesquiera otras condiciones aplicables al Comprador constituyen un acuerdo único entre el Comprador y triunfon.com.
        
        En caso de contradicción entre lo previsto en las presentes CGC y cualesquiera otras condiciones suscritas entre las partes, los términos y condiciones de las presentes CGC prevalecerán sobre lo previsto en aquéllas, salvo que las estipulaciones incluidas en las mismas establezcan expresamente lo contrario.
        
        El hecho de que cualquiera de las partes, por imposibilidad o conveniencia, no exigiera el cumplimiento estricto de alguno de los términos de las presentes CGC en un determinado momento, no supone ni puede interpretarse como una modificación, total o parcial, de las mismas, ni como una renuncia por su parte a exigir su cumplimiento en sus estrictos términos, en el futuro.
        
        La declaración de nulidad de alguna o algunas de las Estipulaciones de las presentes CGC por parte de Autoridad competente no perjudicará la validez de las restantes. En este caso, las partes contratantes se comprometen a negociar una nueva estipulación en sustitución de la anulada con la mayor identidad posible con la misma. Si la sustitución deviniese imposible y la Estipulación fuese esencial para las presentes CGC, a juicio de la parte perjudicada por su eliminación, ésta podrá optar por la resolución de las Condiciones.
        
        Cualquier referencia realizada en las presentes CGC a un artículo o cuerpo normativo que resulte derogado se entenderá realizada a la disposición equivalente que lo sustituya.
        
        Cesión y delegación
        El Comprador no puede ceder o delegar los derechos otorgados en las presentes CGC ni las obligaciones asumidas por las mismas. Cualquier cesión y/o delegación será nula.
        
        triunfon.com podrá ceder o delegar total o parcialmente y de forma totalmente libre sus derechos y obligaciones contenidas en estas Condiciones sin necesidad de aviso previo. triunfon.com también podrá sustituir por cualquier negocio jurídico al titular de esta relación jurídica por cualquier otra.
        
        Idioma
        El idioma aplicable a las presentes Condiciones es el español. Si se han ofrecido versiones de estas las mismas en otros idiomas, ha sido por cortesía, para comodidad del Comprador. Éste acepta expresamente que las mismas se regirán siempre por la versión en español.
        
        Si existiera alguna contradicción entre lo que dice la versión en español de estas CGC y lo que dice alguna de sus traducciones, en todo caso prevalecerá la versión en español.
        
        Legislación y fuero
        Las relaciones entre triunfon.com y el Comprador surgidas como consecuencia de la aceptación de las presentes Condiciones se regirán por la legislación y jurisdicción españolas.
        
        Para la resolución de las discusiones o conflictos acaecidos entre triunfon.com y el Comprador, toda vez que este no ostenta la condición de consumidor ni usuario, ambos se someterán, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales de la Villa de Madrid.`
    }
];