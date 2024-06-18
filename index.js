/* 
 Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
 depois utilize uma estrutura de decisão para apresentar algumas mensagens.

 Se XP for menor do que 1.000 = Ferro
 Se XP for entre 1.001 e 2.000 = Bronze
 Se XP for entre 2.001 e 5.000 = Prata
 Se XP for entre 5.001 e 7.000 = Ouro
 Se XP for entre 7.001 e 8.000 = Platina
 Se XP for entre 8.001 e 9.000 = Ascendente
 Se XP for entre 9.001 e 10.000= Imortal
 Se XP for maior ou igual a 10.001 = Radiante
*/

let heroiNome = "Gladiador"
let heroiXp = 12000.0
let heroiClassificacao = " "

if(heroiXp <= 1000.0){

    heroiClassificacao = "Ferro"

    console.log("O Herói de nome: " + heroiNome +
        ", está no nível: " + heroiXp + "," +
        " portanto sua classificalçao é: " + heroiClassificacao + "." )

} else if(heroiXp >= 1001.0 && heroiXp <= 2000.0){

    heroiClassificacao = "Bronze"

    console.log("O Herói de nome: " + heroiNome +
        ", está no nível: " + heroiXp + "," +
        " portanto sua classificalçao é: " + heroiClassificacao + "." )

} else if(heroiXp >= 2001.0 && heroiXp <= 5000.0){

    heroiClassificacao = "Prata"

    console.log("O Herói de nome: " + heroiNome +
        ", está no nível: " + heroiXp + "," +
        " portanto sua classificalçao é: " + heroiClassificacao + "." )

} else if(heroiXp >= 5001.0 && heroiXp <= 7000.0){

    heroiClassificacao = "Ouro"

    console.log("O Herói de nome: " + heroiNome +
        ", está no nível: " + heroiXp + "," +
        " portanto sua classificalçao é: " + heroiClassificacao + "." )

} else if(heroiXp >= 7001.0 && heroiXp <= 8000.0){

    heroiClassificacao = "Platina"

    console.log("O Herói de nome: " + heroiNome +
        ", está no nível: " + heroiXp + "," +
        " portanto sua classificalçao é: " + heroiClassificacao + "." )

} else if(heroiXp >= 8001.0 && heroiXp <= 9000.0){

    heroiClassificacao = "Ascendente"

    console.log("O Herói de nome: " + heroiNome +
        ", está no nível: " + heroiXp + "," +
        " portanto sua classificalçao é: " + heroiClassificacao + "." )

} else if(heroiXp >= 9001.0 && heroiXp <= 10000.0){

    heroiClassificacao = "Imortal"

    console.log("O Herói de nome: " + heroiNome +
        ", está no nível: " + heroiXp + "," +
        " portanto sua classificalçao é: " + heroiClassificacao + "." )

} else{

    heroiClassificacao = "Radiante"

    console.log("O Herói de nome: " + heroiNome +
        ", está no nível: " + heroiXp + "," +
        " portanto sua classificalçao é: " + heroiClassificacao + "." )
}

    


