var agora = new Date()
var hora = agora.getHours()
var min =agora.getMinutes()
var dia = agora.getDay()
var mes = agora.getMonth()
var ano = agora.getFullYear()
console.log (`Agora são ${hora} horas e ${min} minutos, do dia ${dia} de ${mes} de ${ano}`)
if (hora <= 12 && hora >= 6) {
    console.log ('Bom dia!')
} else if (hora > 12 && hora <= 18) {
    console.log ('Boa tarde!')
} else if (hora > 18 && hora <= 24) {
    console.log ('Boa noite!')
} else if (hora < 6 || hora != 24) {
    console.log ('Boa madrugada! Alma penada!')
}


/* Day no JS é relacionado aos dias da semana
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/