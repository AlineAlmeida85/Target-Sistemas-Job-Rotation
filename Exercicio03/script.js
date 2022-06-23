const faturamento = require("./faturamento.json");

let mapValores = faturamento.map(element => element.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


let itensValidos = faturamento.filter(item => item.valor != 0);
itensValidos.forEach(item => { 

});

const menorValor = Math.min(...itensValidos.map(({
    valor
  }) => valor)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  console.log(`O menor valor é ${menorValor}`);



const maiorValor = Math.max(...itensValidos.map(({
    valor
}) => valor)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log(`O maior valor é ${maiorValor}`);


let total = itensValidos.reduce((total, item) => total + item.valor, 0);
let media = (total / itensValidos.length);


let maiores = itensValidos.filter(item => item.valor > media);

console.log(maiores);