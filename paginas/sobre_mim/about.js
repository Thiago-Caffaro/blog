let audio = new Audio('../../assets/audio/partidaLol.mp3');
var image = document.getElementById('thalya');
var botaoPartida = document.getElementById('match');

document.getElementById("match").addEventListener('click', function(){
    botaoPartida.style.setProperty('display', 'none');
    audio.play();
    image.src = '../../assets/images/thalyaLol.png';
})

audio.addEventListener('ended', function() {
    image.src = '../../assets/images/thalya.png';
    botaoPartida.style.setProperty('display', 'inline-block');
});