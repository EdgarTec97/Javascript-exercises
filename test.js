//Multiplicar numeros
const multiplay = (a,b)=>{
	let result = 0
	const positive = Math.abs(b) == b
	for (let i = 0; i < Math.abs(b); i++) {
		result = positive ? result + a : result - a
	}
	return result
}
//console.log(multiplay(6,5));
//Mostrar valor mayor en el arreglo
const bigg = (arr)=>arr.reduce((acc,el)=>acc>el ? acc : el)
const b = bigg([50,-1,555,32,554])
//console.log(b)
const clean = (arr)=>arr.reduce((acc,el)=>{
	if (el) {
		acc.push(el)
	}
	return acc
},[])
//console.log(clean([1,undefined,null,0,2,3]));
//Reducir a 1 solo arreglo la matriz
const arr = [[1,2],[3,4],[1,[]]]
const flatten = (arra) => arr.reduce((acc,el)=>acc.concat(el),[])
//console.log(flatten([arr]));
//Mostrar la palabra más repetida y cuantas veces se repitió
const repeated = (str)=>{
	const lowered = str.toLowerCase()
	const splitted = lowered.split(' ')
	const reduced = splitted.reduce((acc,el)=>{
		if (acc[el]) {
			acc[el]++
		}else{
			acc[el] = 1
		}
		return acc
	},{})
	return Object.entries(reduced).reduce((acc,el)=>acc[1]>el[1] ? acc : el)
}
//console.log(repeated('this is a repeated work test this is a a'));
//Palindromo
const isPalindrome = (str)=>{
	str = str.replace(/\s/g,'')//Eliminar espacios
	const lowered = str.toLowerCase()
	const splitted = lowered.split('')
	const reversed = splitted.reverse()
	const joined = reversed.join('')
	return lowered == joined
}
console.log(isPalindrome('Ana lava lana'));