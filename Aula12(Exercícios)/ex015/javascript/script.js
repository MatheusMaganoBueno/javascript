function  carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        //BOM DIA!!
        console.log(hora)
        document.body.style.background = '#FDDFC1'
        img.scr = './manha.png'
    } else if(hora >= 12 && hora < 18) {
        //BOR TARDE!!
        console.log(hora)
        document.body.style.background = '##E5B59E'
        img.scr = './tarde.png'
    } else {
        document.body.style.background = '#171918'
        img.src = './noite.png'
    }
}
