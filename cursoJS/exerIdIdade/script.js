function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados inseridos e tente novamente')
    }else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`//
        var genero = ''
        var img= document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){
           genero = 'Homem'
           if (idade >= 0 && idade < 10){
               //criança//
               img.setAttribute('src','criançaM.jpg')
           }else if (idade >10 && idade < 21){
               // jovem //
               img.setAttribute('src','jovemM.jpg')
           }else if (idade < 50){
               // adulto//
               img.setAttribute('src','adultoM.jpg')
           } else if (idade > 50){
               // velho//
               img.setAttribute('src','velhoM.jpg')
           }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança//
                img.setAttribute('src','criançaF.jpg')

            }else if (idade >10 && idade < 21){
                // jovem //
                img.setAttribute('src','jovemF.jpg')
            }else if (idade < 50){
                // adulto//
                img.setAttribute('src', 'adultoF.jpg')
            } else if (idade > 50){
                // velho//
                img.setAttribute('src', 'velhoF.jpg')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        img.style.textAlign= 'center'
    
    }

}