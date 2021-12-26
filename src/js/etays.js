/**
	ETAyS - Estructurador de Tareasa, Acciones y Sueños
	estays.js Controlador principal de la aplicación.
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
*/

import {configuracion} from './configuracion.js'
import {Modelo} from './modelo.js'
import {Vista} from './vista.js'
import {VistaPrincipal} from './vistaprincipal.js'

/**
	Controlador principal de la aplicación.
*/
class Etays{
	/**
		Constructor del controlador.
		Instancia e inicializa los atributos del objeto.
		Captura el evento window.onload para iniciar la aplicación.
	*/
	constructor(){
		this.vistaPrincipal = null	//No podemos iniciar hasta que se complete la carga de window.document
		this.modelo = new Modelo()

		//usamos addEventListener para permitir sobrecargar el evento
		window.addEventListener('load', this.cargar.bind(this))
	}
	/**
		Carga la vista principal.
		Una vez cargada la ventana, ya existe document y podemos crear la vista principal.
		Tras crear la vista principal, se carga su plantilla con una llamada asíncrona.
		Una vez cargada la vista principal, se inicia la aplicación.
	*/
	cargar(){
		//Inyectamos los parámetros de configuración en la clase superior
		Vista.dirHTML = configuracion.dirHTML
		Vista.dirCSS = configuracion.dirCSS
		this.vistaPrincipal = new VistaPrincipal(this, document.body)
		//inyectamos las dependencias de la configuración
		this.vistaPrincipal.cargar().then(()=>this.iniciar())
	}
	/**
		Inicia la aplicación.
		Inicia la vista principal.
	*/
	iniciar(){
		console.log('Iniciar' + this)
	}

	//Atención a Eventos
	/**
		Atención a la opción de menú "Listar"
	*/
	listar(){
		console.log('estays.listar')
	}
	/**
		Atención a la opción de menú "verCrear"
	*/
	verCrear(){
		console.log('estays.verCrear')
	}
}

var etays = new Etays()
