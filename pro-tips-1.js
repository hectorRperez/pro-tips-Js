// ________________________________________
//Declaración normal de una función
function crearPersona(nombre, apellido) {
	return {
		nombre: nombre,
		apellido: apellido,
	};
}

//Mejor forma de declarar
//Mejor forma de retornar valores
const crearPersona2 = (nombre, apellido) => {
	{
		nombre, apellido;
	}
};

//extraer datos rapidamente
//trabajar con los argumentos que esta recibiendo la función
const imprimeArgumentos = (...args) => {
	return args;
};

const [casado, vivo, nombre, saludo] = imprimeArgumentos(
	10,
	true,
	false,
	'Fernando',
	'Hola'
);

console.log({ casado, vivo, nombre, saludo });

// ________________________________________

//desestructuración de objetos
const tony = {
	nombre: 'Tony',
	codeName: 'Iron man',
	vivo: false,
	edad: 40,
	trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
	console.log(nombre);
	console.log(codeName);
	console.log(vivo);
	console.log(edad);
	console.log(trajes);
};
