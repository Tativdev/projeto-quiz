// pergunta nome
let name = prompt('Qual seu nome');


// pergunta se deseja continuar
let decisao = prompt('Dejesa participar do Quiz? \n 1- Sim \n 2- Não')

let nomeS = document.getElementById('name')

nomeS.innerHTML = 'Olá,' + name;


if (decisao === '1') {
    let primeiraP = prompt('Qual a idade do Silvio Santos? \n 1- 138 \n 2- 89 \n 3- 92');
    if (primeiraP === '2') {
        document.getElementById('primeiraCorreta').innerHTML = 'Resposta 1 Correta'

    }
    else {
        document.getElementById('primeiraIncorreta').innerHTML = 'Resposta 1 Incorreta'
    }

    let segundaP = prompt('Há quanto tempo você está cansada da quarentena? \n 1- 2 meses \n 2- 5 meses \n 3- 7 meses');
    if (segundaP === '3') {

        document.getElementById('segundaCorreta').innerHTML = 'Resposta 3 Correta'
    } else {
        document.getElementById('segundaIncorreta').innerHTML = 'Resposta 2 Incorreta'
    }

    let terceiraP = prompt('Quem você quer ver fora? \n 1- Chaves \n 2- Silvio Santos 3- Bolsonaro');
    if (terceiraP === '3') {

        document.getElementById('terceiraCorreta').innerHTML = 'Resposta 3 Correta'
    }


    else {
        document.getElementById('terceiraIncorreta').innerHTML = 'Resposta 1 Incorreta'
    }







} else {
    alert('Não quer? então xau xau!');

}



// 



