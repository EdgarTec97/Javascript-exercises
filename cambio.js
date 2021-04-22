const cambio = (num)=>{
	if (num < 1) {
		return 0
	}
	let coins = [25,10,5,1]
	numcoins = 0
	for (let coin of coins) {
		numcoins += Math.floor(num/coin) //Cantidad de monedas
		num = num % coin
		if (num === 0) break
	}
	return numcoins;
}
const cambio2 = (num)=>{
	let arr = {}
	let bool = true
	let i = 0;
	let coins = [25,10,5,1]
	for (let coin of coins) {
		while(bool){
			if (num>=coin) {
				i++
				num -= coin;
			}else{
				arr[coin] = i;
				i=0;
				bool = false;
			}
		}
		bool = true;
	}
	for (let coin of coins) {
		if (!arr[coin]) delete arr[coin]
	}
	return arr;
}
//console.log(cambio2(156));
const srt = (string)=>{
	string = string.replace(/\s/g,'')//Eliminar espacios
	string = string.toLowerCase()
	let letterAmount = {};
	for (let i = 0; i < string.length; i++) {
		let letter = string[i];
		if (letterAmount[letter] === undefined) {
			letterAmount[letter] = 1;
		}else{
			letterAmount[letter]++;
		}
	}
	return letterAmount;
}
console.log(srt("Hola que haces wey"));