'use strict';
const synth = window.speechSynthesis;
const $doc = document.querySelector('html');
const $body = document.querySelector('body');
const $ul = document.createElement('ul');

$ul.classList.add('context-menu');
$ul.style.cssText = `
    margin: 0;
    padding: 0;
    position: fixed;
    list-style: none;
    background: #fff;
    border: 1px solid #000;
    border-radius: 1px;
    display: none;
`
const $li = document.createElement('li');
$li.style.cssText = `
    width: 20%;
    padding: 0px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 16px;
`
$li.innerText = 'Озвучить';
 
$doc.addEventListener("mouseup", createLi);

    
function createLi(){
    $ul.addEventListener("mouseup", event =>{
        event.stopPropagation();
    },false);

    const text = document.getSelection().toString();
    const speech = new SpeechSynthesisUtterance(text);

    $doc.removeEventListener("mouseup", createLi);
    $body.appendChild($ul);
    $ul.appendChild($li);
    
    $ul.style.display = "block";
    $ul.style.top = event.clientY - 30 + "px";
    $ul.style.left = event.clientX - 15 + "px";
    $li.onclick = function() {
        
        synth.speak(speech); 
        $ul.style.display = "none";
        $ul.remove();
    };
    $doc.addEventListener("mouseup", createLi);
};

