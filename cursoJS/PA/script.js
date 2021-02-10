function contar(){
    var inicio = document.getElementById("txtin")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var res = document.getElementById('resultados')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = "Impossivel contar"
        /*alert('[ERRO] Faltam dados')*/
    } else {
        res.innerHTML = 'Contando.... '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if(i < f){
           for( var c = i; c <= f ; c+=p){
               res.innerHTML += `${c} \u{1F449} ` /* unicode emoji list*/
           }
           
        }else{
          for(var c = i; c>=f; c-=p){
             res.innerHTML += `${c} \u{1F449}`
            }
            
        }
      res.innerHTML += `\u{1F3C1}`
    }     
}