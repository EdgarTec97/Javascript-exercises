const arrow = (str)=>{
	let text = str.split('-')
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(str)
		}else if(i % 3 === 0){
			console.log(text[0])
		}else if(i % 5 === 0){
			console.log(text[1])
		}else{
			console.log(i)
		}
	}	
}
function arrf(){
	let str = 'Fizz-Buzz';
	let text = str.split('-')
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(str)
		}else if(i % 3 === 0){
			console.log(text[0])
		}else if(i % 5 === 0){
			console.log(text[1])
		}else{
			console.log(i)
		}
	}	
}
const fc = ()=>{
	var miCadena = 'Hola 1 mundo. Oración número 2.'; 
	var division = miCadena.split(/(\d)/); 
	return division
}
console.log(fc());
//Funciones comunes el this toma como contexto el objeto donde fue ejecutada la función
//Funciones comunes el this toma como contexto el objeto donde fue declarada la función