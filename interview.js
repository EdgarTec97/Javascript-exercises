
function test(){
	for (var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz')
		}else if(i % 3 === 0){
			console.log('Fizz')
		}else if(i % 5 === 0){
			console.log('Buzz')
		}else{
			console.log(i);
		}
	}
}
function test2(){
	console.log(555)
	for (var i = 1; i <= 100; i++) {
		let message = '';
		if (i % 3 === 0 && i % 5 === 0) {
			message = 'FizzBuzz'
		}else if(i % 3 === 0){
			message = 'Fizz'
		}else if(i % 5 === 0){
			message = 'Buzz'
		}
		console.log(message || i)
	}
}
function test3(){
	console.log(555)
	for (var i = 1; i <= 100; i++) {
		let message = '';
		if (!(i%3) && !(i%5)) {
			message = 'FizzBuzz'
		}else if(!(i % 3)){
			message = 'Fizz'
		}else if(!(i % 5)){
			message = 'Buzz'
		}
		console.log(message || i)
	}
}
test3();