var hoje = new Date()
var ano = hoje.getFullYear()
var mes = hoje.getMonth() + 1
var dia = hoje.getDate()
var hora = hoje.getHours()
var minuto = hoje.getMinutes()
var segundo = hoje.getSeconds()

console.log('Data: ' + dia + '/' + mes + '/' + ano)
console.log('Horário: ' + hora + ':' + minuto)

var dataExtenso = hoje.toDateString()
var dE = dataExtenso.split(' ')

if (dE[0] === 'Mon') {
    dE[0] = 'Segunda-feira'
}

else if (dE[0] === 'Tue') {
    dE[0] = 'Terça-feira'
}

else if (dE[0] === 'Wed') {
    dE[0] = 'Quarta-feira'
}

else if (dE[0] === 'Thu') {
    dE[0] = 'Quinta-feira'
}

else if (dE[0] === 'Fri') {
    dE[0] = 'Sexta-feira'
}

else if (dE[0] === 'Sat') {
    dE[0] = 'Sábado'
}

else if (dE[0] === 'Sun') {
    dE[0] = 'Domingo'
}

var mes = hoje.getMonth()
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembto', 'Outubro', 'Novembro', 'Dezembro']
var m = meses[mes]
console.log(dE[0] + ', ' + dE[2] + ' de ' + m + ' de ' + dE[3])
