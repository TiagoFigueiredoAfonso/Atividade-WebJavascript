function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = ` São ${hora}hs e ${min} min.`
    if(hora < 12){
        img.src = 'loira.jpg'
        document.body.style.background = '#d4d410a6'
    }else if (hora < 19){
        img.src = 'ruiva.jpg'
        document.body.style.background = '#c73e0c9d'
    }else if (hora < 24){
        img.src = 'negra.jpg'
        document.body.style.background = 'black'
    }

}