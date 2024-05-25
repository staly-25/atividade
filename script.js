let totalEstudantes = Number(prompt("Digite o número total de estudantes na turma:"));

let somaNotas = 0;
let maiorNota = 0;
let menorNota = 0;
let contador = 0;

while (contador < totalEstudantes) {
   
    let nota = Number(prompt(`Digite a nota do estudante ${contador + 1}:`));
    somaNotas += nota;
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
    contador++;
}

let mediaTurma = somaNotas / totalEstudantes;

console.log("Média da turma: " + mediaTurma);
console.log("Maior nota: " + maiorNota);
console.log("Menor nota: " + menorNota);
