// let numero = 3

// for(let i =0; i <=10; i++) {
//     console.log(numero * i);
// }

let numero1 = Number(prompt("Digite o primeiro numero: "))
let numero2 = Number(prompt("Digite o segundo numero: "))
let operacao = prompt("Informe a operacao: \n[+]\n[-]\n[*]\n[/]")

if(operacao == "+"){
    alert(numero1 + numero2)
} else if(operacao == "-"){
    alert(numero1 - numero2)
} else if(operacao == "*"){
    alert(numero1 * numero2)
} else if(operacao == "/"){
    alert(numero1 / numero2)
}