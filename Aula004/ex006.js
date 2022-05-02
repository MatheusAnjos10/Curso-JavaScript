var horario = new Date()
var min = new Date()
var hora = horario.getHours()
var m = min.getMinutes()
if (hora < 12) {
    console.log('Bom Dia')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log ('Boa Noite')
}
console.log(`São ${hora}:${m}`)
  



