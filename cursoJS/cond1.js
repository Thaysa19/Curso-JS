 var agora= new Date()
var hora = agora.getHours()
 if (hora < 5){
     console.log('BOA MADRUGA')
 }else if(hora < 12){
    console.log('BOM DIA')
} else if (hora ==12){
    console.log('BOM MEIO DIA ')

} else if (hora >= 18){
    console.log('Boa noite')
} else if (hora < 18){
    console.log('BOA TARDE')
}
