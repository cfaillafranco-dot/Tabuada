let numero, saida;
function Gerar(){
    numero = Number(document.getElementById("numero").value);
    //Pega o valor digitado no nput com id = "numero"
    //e converte para número
    saida = "";
    if(numero < 0){
        saida = "Digite um número maior que zero."
        //Mensagem de erro
    }
    else if(numero > 10){
        saida = "<h3> Número grande </h3>"
    }

    else{
        for(i=0;i<=10;i++){
            saida = saida + numero + "X" + i + "=" + (numero*i) + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = saida;
}

function Mostrar()
{
    let alunos = ["Ana", "Pedro", "Elvis", "Lucas"]

    let saida2 = "";

    for(let a = 0; a < alunos.length; a++){
        saida2 = saida2 + alunos[a] + "<br>";
}

    document.getElementById("alunos").innerHTML = saida2;


}