var x = "Olá"

console.log(x)

console.log("Variáveis JavaScript");
console.log("Texto: "+ x + ", tipos de dados: " + typeof x );

x = 12 + 13;
        //  typeof e usado para saber qual o tipo de dado, pque a funçao esta usando 
console.log("Inteiro: " + x + ", tipos de dados: " + typeof x );

x = false;

console.log("Inteiro: " + x + ", tipos de dados: " + typeof x );

var semana = new Array (
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta0feira"

)

for(var dia in semana){
    console.log(semana[dia])
}


