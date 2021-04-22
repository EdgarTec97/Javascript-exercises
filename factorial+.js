const fact1 = (num)=>{
	let result = 1;
	for (let i = 0; i < num; i++) {
		result *= num-i
	}
	return result
}
const recurs = (num)=>{
	if (num === 0 || num ===1) {
		return 1
	}else{
		return num * recurs(num- 1)
	}
}
console.log(fact1(10));