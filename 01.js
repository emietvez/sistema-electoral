// Como estamos en año electoral vamos a realizar este Trabajo Practico Definir las clases necesarias para representar un
// Sistema de Voto Electrónico que permita manejar: los partidos
// políticos, los candidatos, las listas, los votantes, votos.
// Tener en cuenta que el sistema debe servir para poder realizar elecciones legislativas,
// provinciales y nacionales
var SistemaVotoElectronico = /** @class */ (function () {
    function SistemaVotoElectronico() {
        this.elecciones = [];
    }
    SistemaVotoElectronico.prototype.agregarEleccion = function (eleccion) {
        this.elecciones.push(eleccion);
    };
    SistemaVotoElectronico.prototype.verElecciones = function () {
        for (var _i = 0, _a = this.elecciones; _i < _a.length; _i++) {
            var eleccion = _a[_i];
            console.log(eleccion);
        }
    };
    return SistemaVotoElectronico;
}());
var Eleccion = /** @class */ (function () {
    function Eleccion(tipo) {
        this.tipo = tipo;
        this.partidos = [];
        this.candidatos = [];
        this.listas = [];
        this.votantes = [];
        this.votos = [];
    }
    Eleccion.prototype.agregarPartido = function (partido) {
        this.partidos.push(partido);
    };
    Eleccion.prototype.verPartidos = function () {
        for (var _i = 0, _a = this.partidos; _i < _a.length; _i++) {
            var partido = _a[_i];
            console.log(partido);
        }
    };
    Eleccion.prototype.agregarCandidato = function (candidato) {
        this.candidatos.push(candidato);
    };
    Eleccion.prototype.verCandidatos = function () {
        for (var _i = 0, _a = this.candidatos; _i < _a.length; _i++) {
            var candidato = _a[_i];
            console.log(candidato);
        }
    };
    Eleccion.prototype.agregarLista = function (lista) {
        this.listas.push(lista);
    };
    Eleccion.prototype.verListas = function () {
        for (var _i = 0, _a = this.listas; _i < _a.length; _i++) {
            var lista = _a[_i];
            console.log(lista);
        }
    };
    Eleccion.prototype.agregarVotante = function (votante) {
        this.votantes.push(votante);
    };
    Eleccion.prototype.verVotantes = function () {
        for (var _i = 0, _a = this.votantes; _i < _a.length; _i++) {
            var votante = _a[_i];
            console.log(votante);
        }
    };
    Eleccion.prototype.agregarVoto = function (voto) {
        this.votos.push(voto);
    };
    Eleccion.prototype.verVotos = function () {
        for (var _i = 0, _a = this.votos; _i < _a.length; _i++) {
            var voto = _a[_i];
            console.log(voto);
        }
    };
    return Eleccion;
}());
var Partido = /** @class */ (function () {
    function Partido(nombre) {
        this.nombre = nombre;
    }
    return Partido;
}());
var Candidato = /** @class */ (function () {
    function Candidato(nombre) {
        this.nombre = nombre;
        this.listaCandidatos = [];
    }
    Candidato.prototype.agregarCandidato = function (nombre) {
        this.listaCandidatos.push(nombre);
    };
    return Candidato;
}());
var Lista = /** @class */ (function () {
    function Lista(numero) {
        this.numero = numero;
        this.candidatosLista = [];
    }
    Lista.prototype.agregarCandidato = function (candidato) {
        this.candidatosLista.push(candidato);
    };
    return Lista;
}());
var Votante = /** @class */ (function () {
    function Votante(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
    return Votante;
}());
var Voto = /** @class */ (function () {
    function Voto(dni, lista) {
        this.dni = dni;
        this.lista = lista;
    }
    return Voto;
}());
// Crear una instancia del sistema de voto electrónico
var sistemaVotoElectronico = new SistemaVotoElectronico();
var eleccionNacional = new Eleccion("Nacional");
sistemaVotoElectronico.agregarEleccion(eleccionNacional);
var partido1 = new Partido("Partido 1");
var partido2 = new Partido("Partido 2");
eleccionNacional.agregarPartido(partido1);
eleccionNacional.agregarPartido(partido2);
eleccionNacional.verPartidos();
var candidato1 = new Candidato("Candidato 1");
var candidato2 = new Candidato("Candidato 2");
eleccionNacional.agregarCandidato(candidato1);
eleccionNacional.agregarCandidato(candidato2);
eleccionNacional.verCandidatos();
var lista1 = new Lista("Lista 1");
lista1.agregarCandidato(candidato1.nombre);
lista1.agregarCandidato(candidato2.nombre);
eleccionNacional.agregarLista(lista1);
eleccionNacional.verListas();
var votante1 = new Votante("Emiliano Estevez", 40725342);
eleccionNacional.agregarVotante(votante1);
eleccionNacional.verVotantes();
var voto1 = new Voto(40725342, "Lista 1");
eleccionNacional.agregarVoto(voto1);
eleccionNacional.verVotos();
sistemaVotoElectronico.verElecciones();
