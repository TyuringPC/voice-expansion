'use strict';
let synth = window.speechSynthesis;

const text = document.querySelector('body');

text.addEventListener("mouseup", textShow);


//Передаем в переменную speech текст и после его проговариваем
function textShow() {
    let speech = new SpeechSynthesisUtterance(document.getSelection().toString());
     
    synth.speak(speech);
};