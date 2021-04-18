
let btn = document.getElementById('randomizer');


btn.addEventListener('click', function(){
    let audio = document.getElementById('Aud');
    audio.volume = Math.random();
    console.log(audio.volume);

});
