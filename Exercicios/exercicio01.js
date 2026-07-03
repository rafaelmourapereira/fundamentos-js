
// Arrays > media.js
const notas = [10, 6.5, 8, 7.5];

// 1. Calculando a média manualmente (como estava no seu código)
const mediaManualmente = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
console.log(`Média manual: ${mediaManualmente}`);

// 2. EVOLUÇÃO: Calculando a média automaticamente com uma estrutura de repetição (Loop For)
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]; // Soma cada nota do array dinamicamente
}

const mediaComFor = soma / notas.length; // Divide pelo total de elementos do array
console.log(`Média com Loop For: ${mediaComFor}`);

// 3. EXTRA: Verificando se o aluno foi aprovado (Média mínima 7)
if (mediaComFor >= 7) {
    console.log("Status: Aluno Aprovado! 🎉");
} else {
    console.log("Status: Aluno Reprovado. 😢");
}