function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = new Date()
    var min = minutos.getMinutes()
    msg.innerHTML = (`Agora são ${hora}:${min}`)
    if (hora >= 0 && hora < 12){
        alert('Bom Dia!!')
        document.body.style.background = '#fa8324'
        img.scr = 'foto-manha.png'
    } else if (hora >= 12 && hora <= 18) {
        alert('Boa Tarde!!')
        img.src = 'foto-tarde.png'
        document.body.style.background = '#bcdaf4'
    } else {
        alert('Boa Noite!!')
        img.src = 'foto-noite.png'
        document.body.style.background = '#2d2d2c'
    }
}

