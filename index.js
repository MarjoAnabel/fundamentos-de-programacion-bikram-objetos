
/*Objetos declaracion*/
const Coche = {
 marca: 'opel',
 modelo: 'toledo',
 matricula: 'x220',
  }
 const Casa = {
codPostal: '48002',
calle: 'granvia',
portal: '3b',
piso: '2',
 }

 const FullStackDeveloper = {
    lenguajes: ['hola'],
    proyectos: ['array'],
 }

 const Perro = {
    nombre: 'dana',
    raza: 'colli',
    color: 'negro',
    edad: 12,
    ladrar:function () {
       console.log ('')
    },
    popo:function () {
        return Math.random ()*3
    },
 }

 /*Lectura de propiedades*/

const marcaPortatil= Portatil.marca;
const marcaPortatil2=Portatil.marca;
const grupos=Concierto['grupos'];
const RGB= [Led.rojo,Led.verde,Led.azul];

/*Modificacion de propiedades*/
Portatil.modelo='P345';
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
const objeto = {
    nombreArchivo:'paginas',
    copias: 3,
    numPaginas: 10,
}
Impresora.imprimiendo = objeto;


/*Indivual*/
const Noticia = {
    titular: 'holaquetal',
    cuerpo: 'sincuerpodesaparecido',
}

const Persona = {
    nombre:'margarita',
    apellidos: 'gonzales',
    edad: 28,
}

const Avion = {
    numPasajeros: '68',
    despegar:function () {
        console.log('despegando')
    },
    volar:function () {
        console.log('llegando al destino')
    },

    aterrizar:function () {
        console.log ('aterrizando')
    }
}

const Paquete = {
    contenido:[],
}

const Pais = {
    numHabitantes: 58,
    continente: 'asia',
    gentilicio:'asiatico',
}

/*Lectura de propiedades*/
const codError= O_Error.codigo
const integrantes= Grupo.integrantes
const nivelesTinta= Impresora.tinta
const pixeles = Pantalla.pixeles
const especificaciones = Movil.especificaciones

/*Modificacion de propiedades*/
Grupo.numIntegrantes = 5
Pantalla.dimensiones = '1920x1080'
Led.encendido= false
Movil.temperatura='20º'












 






