// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let herois=[
    ["Sage",4000],
    ["Jett",12000],
    ["Omen",999],
    ["Clove",1370],
    ["Chamber",9001],
    ["Yoru",6000],
    ["Fade",4780],
    ["Vyse",7080],
]
function rank(lista) {
    for (let i = 0; i < lista.length; i++) {
       if(lista[i][1]<=1000){
         console.log("O Herói de nome "+lista[i][0]+" está no nível de ferro")
        } else if(lista[i][1]>=1001&&lista[i][1]<=2000){
         console.log("O Herói de nome "+lista[i][0]+" está no nível de bronze")
        } else if(lista[i][1]>=2001&&lista[i][1]<=5000){
         console.log("O Herói de nome "+lista[i][0]+" está no nível de prata")
        } else if(lista[i][1]>=5001&&lista[i][1]<=7000){
         console.log("O Herói de nome "+lista[i][0]+" está no nível de ouro")
        } else if(lista[i][1]>=7001&&lista[i][1]<=8000){
         console.log("O Herói de nome "+lista[i][0]+" está no nível de platina")
        } else if(lista[i][1]>=8001&&lista[i][1]<=9000){
         console.log("O Herói de nome "+lista[i][0]+" está no nível de ascendente")
        } else if(lista[i][1]>=9001&&lista[i][1]<=10000){
         console.log("O Herói de nome "+lista[i][0]+" está no nível de imortal")
        } else if(lista[i][1]>=10001){
         console.log("O Herói de nome "+lista[i][0]+" está no nível de radiante")
        }else{
         console.log("erro")
        }
         
     } 
}
rank(herois)