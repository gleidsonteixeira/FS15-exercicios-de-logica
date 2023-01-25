// QUESTAO 1
// function boasVindas(){
//     document.write("Seja bem-vindo Thiago");
// }
// boasVindas();

// QUESTAO 2
// function calcularIdade(ano, mes){
//     let anoAtual = 2023;
//     let mesAtual = "janeiro";
//     if(mes == mesAtual){
//         document.write("Thiago tem " + (anoAtual - ano) + " anos")
//     }else{
//         document.write("Thiago tem " + (anoAtual - ano - 1) + " anos")
//     }
// }
// calcularIdade(1993, "dezembro");

// QUESTAO 3
// function percentualSala(alunos, faltaram){
//     let percentual = ((faltaram / alunos) * 100).toFixed(0); 
//     return percentual;
// }
// document.write("faltaram "+ percentualSala(19, 8) + "% dos alunos")

// QUESTAO 4
// function media(teorica = 0, pratica1 = 0, pratica2 = 0){
//     let pratica = (pratica1 + pratica2) / 2;
//     let nota = (teorica + pratica) / 2;
//     return nota;
// }
// document.write("A média do Natan é: "+ media(2,8,6));

// QUESTAO 5
// let manha = 0;
// let tarde = 0;
// let noite = 0; 
// function estacionamento(horario){
//     let hora = horario.slice(0,2);
//     if(hora > 4 && hora <= 11){
//         manha += 1;
//         return;
//     }
//     if(hora > 11 && hora <= 17){
//         tarde += 1;
//         return;
//     }
//     if((hora > 17 && hora <= 23) || (hora >= 00 && hora <= 4)){
//         noite += 1;
//         return;
//     }
// }

estacionamento("00:30");
estacionamento("19:30");
estacionamento("18:30");
estacionamento("14:30");
estacionamento("08:30");
estacionamento("20:30");
estacionamento("22:30");
estacionamento("07:30");
estacionamento("03:30");
estacionamento("04:30");

document.write("Acessos da manha:" + manha + "<br>");
document.write("Acessos da tarde:" + tarde + "<br>");
document.write("Acessos da noite:" + noite + "<br>");

