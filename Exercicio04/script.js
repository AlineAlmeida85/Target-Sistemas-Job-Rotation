let sp = parseFloat("67836.43");
let rj = parseFloat("36678.66");
let mg = parseFloat("29229.88");
let es = parseFloat("27165.48");
let outros = parseFloat("19849.53");

let total = parseFloat(sp + rj + mg + es + outros).toFixed(2);

let psp = ((sp / total) *100).toFixed(2);
let prj = ((rj/total)*100).toFixed(2);
let pmg = ((mg/total)*100).toFixed(2);
let pes = ((es/total)*100).toFixed(2);
let pout = ((outros/total)*100).toFixed(2);

console.log(`Porcentagem de SP ${psp} %`);
console.log(`Porcentagem de RJ ${prj} %`);
console.log(`Porcentagem de MG ${pmg} %`);
console.log(`Porcentagem de ES ${pes} %`);
console.log(`Porcentagem de Outros ${pout} %`);
