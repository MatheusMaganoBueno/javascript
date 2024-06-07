function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamento!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex [0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 3) {
                //bebezinho
                img.setAttribute('src', 'bebezinho-m.png')
            } else if (idade > 3 && idade < 8) {
                //bebê
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade > 8 && idade < 15) {
                //criança 
                img.setAttribute('src', 'crianca-m.png') 
            }  else if (idade > 15 && idade < 23) {
                //adolescente
                img.setAttribute('src', 'adolescente-m.png')   
            } else if (idade > 23 && idade < 33) {
                //moço
                img.setAttribute('src', 'moco.png')
            }  else if (idade > 33 && idade < 49) {
                //homem
                img.setAttribute('src', 'homem.png')
            } else  {
                //idoso
                img.setAttribute('src', 'senhor.png')
            } 
                
        } else if (fsex [1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 3) {
                //bebezinho
                img.setAttribute('src', 'bebezinho-f.png')
            } else if (idade > 3 && idade < 8) {
                //bebê
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade > 8 && idade < 15) {
                //criança
                img.setAttribute('src', 'crianca-f.png')
            }  else if (idade > 15 && idade < 23) {
                //adolescente
                img.setAttribute('src', 'adolescente-f.png')
            } else if (idade > 23 && idade < 33) {
                //moça
                img.setAttribute('src', 'moca.png')
            }  else if (idade > 33 && idade < 49) {
                //mulher
                img.setAttribute('src', 'mulher.png')
            } else {
                //idosa
                img.setAttribute('src', 'senhora.png')
            } 
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}