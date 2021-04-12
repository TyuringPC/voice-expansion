'use strict';
let synth = window.speechSynthesis;

const text = document.querySelector('html');
text.classList.add('main');

text.addEventListener("mouseup", createButton);

function createButton() {
    text.removeEventListener("mouseup", createButton);
    const $btn = document.createElement('BUTTON');
    $btn.textContent = "Произнести";
    text.appendChild($btn);
    $btn.onclick = function () {
        let speech = new SpeechSynthesisUtterance(document.getSelection().toString());
     
    synth.speak(speech);
    };
};