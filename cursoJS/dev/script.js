function cal(){
    var N1 = document.getElementById('n1')
    var N2 = document.getElementById('n2')
    var Res = document.getElementById('res')
    if (N1.value.length ==0 && N2.value.length == 0){
     alert('[Erro] Verifique os dados')

     }else {
      var ca = document.getElementsByName('c')
      
     }if(ca[0].checked){
         var N1 = Number(N1.value)
         var N2 = Number(N2.value)
         var s = Number(N1 + N2)
    } else if (ca[1].checked){
         var N1 = Number(N1.value)
         var N2 = Number(N2.value)
          var s = Number(N1 - N2)
    }else if (ca[2].checked){
         var N1 = Number(N1.value)
         var N2 = Number (N2.value)
         var s = Number (N1 * N2)
    }else if (ca[3].checked){
         var N1 = Number(N1.value)
         var N2 = Number (N2.value)
         s = Number(N1 / N2)
    }Res.innerHTML = `O resultado é igual a ${s}`
}