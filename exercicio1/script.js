let coxinha = prompt(
  "Você quer comer mais uma coxinha? S/N"
).toLocaleLowerCase();
let precoInicial = 0;

while (coxinha === "s") {
  coxinha = prompt("Você quer comer mais uma coxinha? S/N").toLocaleLowerCase();
  precoInicial = precoInicial + 2.5;
}

console.log(`Sua conta ficou em ${precoInicial} reais`);
