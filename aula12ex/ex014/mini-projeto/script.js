

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var today = new Date()
    var hoje = today.getDate()
    paragraph.innerHTML = (`Hoje é dia ${hoje} / 11 !`)
    msg.innerHTML = (`Agora são ${hora} horas !`)
    if (hora >= 3 && hora  && hora <= 12){
        // BOM DIA !
        msg.innerHTML = (`São ${hora} hora(s) Bom dia, <strong>Vamos tomar café !</strong>`)
        img.src = 'foto-manha.jpg'
    } else if (hora >= 12 &&  hora < 18) {
        // BOA TARDE !
        msg.innerHTML = (`São ${hora} hora(s) Boa tarde, <strong>Vamos almoçar !</strong>`)
        img.src = 'foto-tarde.jpg'
    } else {
        msg.innerHTML = (`São ${hora} hora(s) Boa noite, <strong>Vamos jantar !</strong>`)
        // BOA NOITE !
        img.src = 'foto-noite.jpg'
    }
}