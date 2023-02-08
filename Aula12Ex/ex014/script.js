function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}h`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#F5DEB3'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#F4A460'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#10111e'
    }
    
}
