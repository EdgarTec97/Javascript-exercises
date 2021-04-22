let myText = "Hello world"
let textReverse = ""

for(let i = myText.length-1; i >= 0; i--){
     textReverse += myText.charAt(i)
}

function recursiveReverseString(string, index) {
    let text = ""
    
    if(index === string.length-1) {
        text = string[index]
        return text
    }
    
    text += recursiveReverseString(string, index+1)
    text += string[index]
    return text
}
const st = (srt)=>{
	return srt.split('').reverse().join('')
}
const pr = (srt)=>{
    let result = ''
    for(let letra of srt){
        result = letra + result;
    }
    return result;
}
console.log(pr('Hola que haces'))
//console.log(recursiveReverseString("Hello World",0))