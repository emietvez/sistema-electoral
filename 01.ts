// Como estamos en año electoral vamos a realizar este Trabajo Practico Definir las clases necesarias para representar un
// Sistema de Voto Electrónico que permita manejar: los partidos
// políticos, los candidatos, las listas, los votantes, votos.
// Tener en cuenta que el sistema debe servir para poder realizar elecciones legislativas,
// provinciales y nacionales

class SistemaVotoElectronico {
    elecciones: Eleccion[];

    constructor() {
        this.elecciones = [];
    }

    agregarEleccion(eleccion: Eleccion) {
        this.elecciones.push(eleccion);
    }

    verElecciones() {
        for (let eleccion of this.elecciones) {
            console.log(eleccion);
        }
    }

}

class Eleccion {
    tipo: string;
    partidos: Partido[];
    candidatos: Candidato[];
    listas: Lista[];
    votantes: Votante[];
    votos: Voto[];

    constructor(tipo: string) {
        this.tipo = tipo;
        this.partidos = [];
        this.candidatos = [];
        this.listas = [];
        this.votantes = [];
        this.votos = [];
    }

    agregarPartido(partido: Partido) {
        this.partidos.push(partido);
    }

    verPartidos() {
        for (let partido of this.partidos) {
            console.log(partido);
        }
    }

    agregarCandidato(candidato: Candidato) {
        this.candidatos.push(candidato);
    }

    verCandidatos() {
        for (let candidato of this.candidatos) {
            console.log(candidato);
        }
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
    }

    verListas() {
        for (let lista of this.listas) {
            console.log(lista);
        }
    }

    agregarVotante(votante: Votante) {
        this.votantes.push(votante);
    }

    verVotantes() {
        for (let votante of this.votantes) {
            console.log(votante);
        }
    }

    agregarVoto(voto: Voto) {
        this.votos.push(voto);
    }

    verVotos() {
        for (let voto of this.votos) {
            console.log(voto);
        }
    }
}

class Partido {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

class Candidato {
    nombre: string;
    listaCandidatos: string[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.listaCandidatos = [];
    }

    agregarCandidato(nombre: string) {
        this.listaCandidatos.push(nombre);
    }
}

class Lista {
    numero: string;
    candidatosLista: string[];

    constructor(numero: string) {
        this.numero = numero;
        this.candidatosLista = [];
    }

    agregarCandidato(candidato: string) {
        this.candidatosLista.push(candidato);
    }
}

class Votante {
    nombre: string;
    dni: number;

    constructor(nombre: string, dni: number) {
        this.nombre = nombre;
        this.dni = dni;
    }
}

class Voto {
    dni: number;
    lista: string;

    constructor(dni:number, lista:string){
        this.dni = dni;
        this.lista = lista;
    }
}

// Crear una instancia del sistema de voto electrónico
const sistemaVotoElectronico = new SistemaVotoElectronico();


const eleccionNacional = new Eleccion("Nacional");
sistemaVotoElectronico.agregarEleccion(eleccionNacional);

const partido1 = new Partido("Partido 1");
const partido2 = new Partido("Partido 2");


eleccionNacional.agregarPartido(partido1);
eleccionNacional.agregarPartido(partido2);

eleccionNacional.verPartidos(); 

const candidato1 = new Candidato("Candidato 1");
const candidato2 = new Candidato("Candidato 2");

eleccionNacional.agregarCandidato(candidato1);
eleccionNacional.agregarCandidato(candidato2);

eleccionNacional.verCandidatos();

const lista1 = new Lista("Lista 1");
lista1.agregarCandidato(candidato1.nombre);
lista1.agregarCandidato(candidato2.nombre);

eleccionNacional.agregarLista(lista1);

eleccionNacional.verListas();

const votante1 = new Votante("Emiliano Estevez", 40725342);

eleccionNacional.agregarVotante(votante1);

eleccionNacional.verVotantes();

const voto1 = new Voto(40725342, "Lista 1");

eleccionNacional.agregarVoto(voto1);

eleccionNacional.verVotos();

sistemaVotoElectronico.verElecciones();