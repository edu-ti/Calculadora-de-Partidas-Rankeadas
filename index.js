//Desafio Calculadora de Partidas Rankeadas
function calcularRank(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";
    // Definindo o nível baseado no número de vitórias
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }
    // Exibindo a mensagem final
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`);
    //console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + nivel+".")
}
// Exemplo de uso
const vitorias = 250; // Número de vitórias do jogador
const derrotas = 223; // Número de derrotas do jogador

calcularRank(vitorias, derrotas); 