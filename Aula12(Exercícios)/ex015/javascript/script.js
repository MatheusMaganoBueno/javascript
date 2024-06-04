function  carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        console.log(hora)
        img.scr = 'manha.png'
        document.body.style.background = 'violet'
    } else if(hora >= 12 && hora < 18) {
        //BOR TARDE!!
        console.log(hora)
        img.scr = 'tarde.png'
        document.body.style.background = 'blue'
    } else {
        //BOA NOITE!!
        img.scr = 'noite.png'
        document.body.style.background = 'grey'
    }
}
