let num = 2;

function GenerateFibonacci(number){
    var fibonacci = [];    
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}
var f = GenerateFibonacci(10);

console.log(`Esta é a sequência de Fibonacci ${f}`);
console.log(`O usuário digitou o número ${num}.`);

    if(f.includes(num)){
        console.log(`O número ${num} pertence a sequência de Fibonacci!`)
    }else {
        console.log(`O número ${num} NÃO pertence a esta sequência!`)
    }
    
    