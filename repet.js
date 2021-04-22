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
const repeat = (arr)=>{
	let obj = {}//Obj
	let dup = {}//Aray
	for (let i = 0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			obj[arr[i]] = 1
		}else{
			if (!dup[arr[i]]) {
				dup[arr[i]] = 1
			}else{
				dup[arr[i]]++
			}
		}
	}
	return dup;
}
console.log(repeated("Hola como estás estás estas"))
//console.log(repeated('this is a repeated work test this is a a'));
