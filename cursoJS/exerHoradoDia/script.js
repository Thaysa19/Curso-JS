function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    document.body.style.background ="rgb(211, 200, 176)"
   img.src= 'manhã.jpg'
} else if (hora >= 12 && hora < 18){
    document.body.style.background = 'rgb(167, 191, 207)'
    img.src= 'tarde.jpg'
} else{
    img.src= 'noite.jpg'
    document.body.style.background= 'rgb(17, 10, 8)'
}
}
