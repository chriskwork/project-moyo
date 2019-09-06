// ############### Preguntas frecuentes ###############

const preguntasFrecuentes = [
    {
        pregunta: "El teléfono que uso no es español",
        respuesta: "Por ahora Loycus sólo está en España por lo que únicamente se pueden introducir números con prefijo español. Si estás interesado en utilizarlo para un negocio ubicado en otro país ponte en contacto con nosotros a través de nuestro email sos@loycus.com."
    },
    {
        pregunta: "No he recibido el SMS para el código de verificación",
        respuesta: `Comprueba que tu móvil tiene conexión y que el número que has introducido es correcto. Además la plataforma te permite un máximo de 3 envíos durante un tiempo limitado. 
        
        Si sigues sin recibir el SMS espera un tiempo de 10 minutos, intenta la acción o ponte en contacto con nosotros a través de nuestro email sos@loycus.com.`
    },
    {
        pregunta: "¿Qué hago si he olvidado mi contraseña?",
        respuesta: "No te preocupes, si has olvidado tu contraseña puedes hacer click en el botón Recordar contraseña. Solo tienes que introducir el email de registro y te enviaremos las instrucciones al correo para que puedas volver a configurar una contraseña"
    },
    {
        pregunta: "He recibido un correo electrónico me dice que he creado una nueva cuenta, pero no me he registrado",
        respuesta: "Lo más probable es que alguien haya intentado registrar una cuenta de Loycus utilizando tus datos por error. Ponte en contacto con nosotros a través de nuestro email sos@loycus.com."
    },
    {
        pregunta: "Ya tengo una cuenta de Loycus, ¿Puedo entrar con ella en Loycus Business?",
        respuesta: "No, Loycus y Loycus Business son dos plataformas diferentes que funcionan con un registro y un inicio de sesión distinto. Si quieres crearte una cuenta en Loycus Business tienes que ponerte en contacto con nosotros a través del email info@loycus.com."
    },
    {
        pregunta: "No he recibido el email de instrucciones para recuperar mi contraseña",
        respuesta: `Espera unos minutos y comprueba la bandeja de spam. Si aún así sigues sin recibirlo es posible que no hayas introducido la dirección correctamente. 
        
        En caso de que esté bien y aún así no recibas el email, ponte en contacto con nosotros a través del email sos@loycus.com.`
    },
    {
        pregunta: "¿Qué hago si me han robado la cuenta o cambiado la contraseña?",
        respuesta: "Si no puedes acceder a tu cuenta y crees que te la han robado, escríbenos a sos@loycus.com y explícanos el problema, nos pondremos en contacto contigo lo antes posible."
    },
    {
        pregunta: "¿Qué es una marca en Loycus?, ¿Y un punto de venta?",
        respuesta: `Una marca en Loycus es la identificación comercial bajo la que se conoce al negocio, mientras que el punto de venta es el lugar físico donde la marca desarrolla su negocio. 
        
        En Loycus es obligatorio crear una marca y luego asociarla a uno o varios puntos de venta. Incluso si solo tienes un punto de venta también es necesario que exista el perfil de marca y el de punto de venta.`
    },
    {
        pregunta: "¿Por qué tengo que añadir un punto de venta a la marca?",
        respuesta: `Por el momento Loycus solo trabaja con marcas que tengan un punto de venta físico, por lo que es obligatorio que la marca tenga asociado un punto de venta real.

        En el caso de que el negocio de tu marca sea la venta online o por cualquier otro motivo no tengas punto de venta físico, por ahora no puedes crearte un perfil en Loycus Business.`
    },
    {
        pregunta: "¿Cuántos puntos de venta puede tener mi marca?",
        respuesta: `Loycus Business te permite gestionar todos los puntos de venta que tenga tu marca.`
    },
    {
        pregunta: "¿Puedo gestionar varias marcas desde el mismo usuario?",
        respuesta: `En Loycus Business puedes gestionar tantas marcas como quieras a través de tu mismo usuario. Puedes crear nuevas marcas o coger el permiso de otras marcas que quieras gestionar.

        Si te registras sin haber recibido ninguna invitación de permiso de marca, tendrás que crear obligatoriamente una marca junto a tu perfil de usuario.
        
        Si por el contrario te registras porque has recibido la invitación de un permiso solo tendrás que completar tus datos de usuario y ya podrás empezar a usar Loycus.
        
        Puedes crear una nueva marca desde Configuración con el botón Añadir marca.`
    },
    {
        pregunta: "Mi marca no encaja en ninguna de las categorías, ¿qué hago?",
        respuesta: `Las categorías están predeterminadas ya por Loycus Business, pero puede que se nos haya pasado alguna. Si has comprobado que tu negocio no encaja en ninguna de las categorías que hay ponte en contacto con nosotros en el email sos@loycus.com e intentaremos solucionarlo.`
    },
    {
        pregunta: "Tengo problemas para marcar mi dirección en el mapa",
        respuesta: `Utilizamos los mapas de Google Maps para encontrar las direcciones. En caso de que no puedas localizar tu dirección, siempre puedes marcar en el mapa tu ubicación exacta.`
    },
    {
        pregunta: "Estoy teniendo problemas al cargar la foto de perfil/portada de la marca.",
        respuesta: `Si la imagen no se carga o al cargarla no aparece como esperabas probablemente excede de los límites de peso o de medida de Loycus.

        Para que la imagen aparezca en óptima calidad dentro de la plataforma lo ideal es que no pese más de 2 Mb y tenga estas medidas.`
    },
    {
        pregunta: "¿Cómo añado las redes sociales de mi punto de venta?",
        respuesta: `Si quieres que los clientes vean las redes sociales de tu perfil de punto de venta, puedes añadir los enlaces de Twitter, Facebook, Youtube e Instagram a través de tu perfil de punto de venta. En caso de no añadir ningún enlace esta opción no se visualizará en tu perfil de Loycus.`
    },
    {
        pregunta: "¿Cómo subo fotos a la galería de un punto de venta?",
        respuesta: `Las fotos que subes en Promociones y Novedades no se quedan en la galería de tu punto de venta. Si quieres que en tu perfil Loycus se queden fijadas las fotos que más te gustan de tu punto de venta, puedes hacerlo a través de tu perfil de punto de venta, en el apartado fotos.`
    },
    {
        pregunta: "¿Qué es un permiso?",
        respuesta: `Puedes añadir a más personas que te ayuden a gestionar tu marca y tus puntos de venta en Loycus Business a través de Permisos. Los permisos pueden ser de administrador de marca y de moderador de puntos de venta.

        La persona que elijas recibirá un correo de invitación para avisarle de que puede aceptar el permiso. En cuanto lo haga se activará su permiso y podrá acceder a la marca o a los puntos de venta sobre los que se le ha dado permiso.
        
        El correo de invitación caduca a los 15 días de enviarse, una vez pasado este plazo, si no ha aceptado el permiso tendrás que volver a añadir el permiso. Si la persona que recibe el permiso no es usuario de Loycus Business tendrá que registrarse primero para acceder al permiso.`
    },
    {
        pregunta: "¿Puedo dar permiso a otro perfil para administrar o moderar la marca y sus puntos de venta?",
        respuesta: `Si eres administrador, puedes acceder al apartado de permisos de la marca o de alguno de sus puntos de venta y crear nuevos permisos de administrador o moderadores o modificar o eliminar los que ya existen.

        Si eres moderador de un punto de venta, puedes dar permisos de moderador, editar o eliminar permisos sobre ese mismo punto de venta.`
    },
    {
        pregunta: "¿Qué ocurre si quiero eliminar mi cuenta y soy el único administrador de una marca?",
        respuesta: `Si eliminas tu cuenta de Loycus Business y eres el único administrador de una marca esta también se eliminará, así como todos sus puntos de venta y el contenido que haya subido. Si no quieres que se elimine tendrás que añadir nuevos permisos de administración a otra persona (y que lo acepte) antes de eliminar tu cuenta.`
    },
    {
        pregunta: "¿Qué necesita una persona para usar el permiso que le he dado?",
        respuesta: `En caso de que una persona con cuenta en Loycus Business haya recibido un permiso sobre otra marca, solo tendrá que aceptar el permiso mediante el email que le enviemos a la cuenta que nos haya proporcionado el administrador y se le añadirá a su cuenta. El email de invitación a permisos caducará después de 15 días del envío en caso de que no se acepte.

        En el caso de que la persona aún no tenga cuenta en Loycus Business, se tendrá que registrar en la plataforma con el mismo email con el que ha recibido el permiso y una vez registrado se le asignará el permiso automáticamente.`
    },
    {
        pregunta: "¿Qué es un Partner de Loycus?",
        respuesta: `Un Partner de Loycus es un profesional de la comunicación que gestiona o quiere gestionar alguna marca en Loycus.

        Un Partner es una agencia de comunicación o community manager valoradas por Loycus para ofrecer a las Marcas sus servicios. Un Partner te ayudará con las publicaciones,el contenido y la gestión de tu perfil en Loycus.
        
        Si estás interesado en este servicio, contacta con uno de ellos, él mismo te facilitará sus tarifas, una vez que haya una acuerdo entre ambas partes. Para que trabaje en tu marca solamente necesitarás que te informe del email de su perfil de Loycus y darle el permiso correspondiente desde el bloque de Permisos.`
    },
    {
        pregunta: "¿Dónde puedo ver todas las agencias que trabajan como partners de Loycus?",
        respuesta: `Disponemos de un apartado en el footer de la web, con acceso a un listado para que conozcas todas los Partners asociados a Loycus.`
    },
    {
        pregunta: "¿Cómo me buscan los clientes?",
        respuesta: `Los clientes de tu negocio te encuentra a través de app de Loycus. En ella hay diferentes formas en la que pueden encontrarte:

        1. Pueden buscar directamente tu marca y puntos de venta y seguirlos para ver tus publicaciones.
        2. Pueden encontrarte al buscar la categoría de tu negocio cuando están cerca de él. Esto solo pasará en caso de que haya publicado una novedad o promoción en el muro o si alguien ha escrito una experiencia sobre tu negocio. La mayor ventaja de Loycus es que tu publicación solo aparecerá en caso de que la persona esté buscando tu categoría y se encuentre en un radio cercano a alguno de tus puntos de venta.
        3. Tu negocio puede aparecer entre los seguidos de otro perfil o en comentarios de publicaciones`
    },
    {
        pregunta: "¿Qué puedo hacer con mis seguidores?",
        respuesta: `A través del CRM podrás conocer algunos datos de tus seguidores como su localización, la fecha en la que empezaron a seguirte, el número de seguidores que tienen, cuáles de las promociones se han canjeado, las experiencias que han escrito sobre tus puntos de venta o las promociones personalizadas que les has enviado.

        Además también podrás enviar promociones personalizadas a quien elijas de forma que sólo el destinatario podrá ver la promoción y canjearla.`
    },
    {
        pregunta: "¿Quién va a ver mis publicaciones?",
        respuesta: `Las publicaciones que hagas la podrán ver los potenciales clientes a través de la app de Loycus. Pueden encontrarlas en tu perfil de marca y de puntos de venta siempre,, se podrán ver cuando el usuario busque negocios de tu categoría cerca del radio donde se ubica tu punto de venta.`
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
        
        Recuerda que Loycus Business solo guarda las notificaciones durante 30 días, después no volverán a aparecer.
        
        También se pueden activar a través del navegador las notificaciones push. Este tipo de notificaciones requieren de tu aprobación en el navegador.`
    }
];

