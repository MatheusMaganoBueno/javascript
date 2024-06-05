function verificar() {
    var anonascimento = window.document.querySelector('#iano')
    var ano = parseInt(anonascimento);
    var mas = window.document.querySelector('#imas')
    var fem = window.document.querySelector('#ifem')
    var foto = window.document.querySelector('#imagem')
    var msg = window.document.querySelector('#imsg')

    switch(gender) {
        case (mas = true && ano <= 2024 && ano > 2021):
        foto.scr = './agua.jpg'
        break;

        default: 
        console.log('Olá mundo')
        break;
    } 
}
