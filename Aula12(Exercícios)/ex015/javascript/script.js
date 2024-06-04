function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.scr = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18) {
        //BOR TARDE!!
        img.scr = 'tarde.png'
        document.body.style.background = '#e2cd9f'
    } else {
        img.scr = 'noite.png'
        document.body.style.background = '#e2cd9f'
    }
}
