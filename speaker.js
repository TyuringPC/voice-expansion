'use strict';
window.onload = function(){
    const synth = window.speechSynthesis;
    const $doc = document.querySelector('html');
    const $body = document.querySelector('body');
    const $ul = document.createElement('ul');
    const $li = document.createElement('li');
   
    $ul.classList.add('corner');

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
        if (text) {
            const speech = new SpeechSynthesisUtterance(text);

            $doc.removeEventListener("mouseup", createLi);
            $body.appendChild($ul);
            $ul.appendChild($li);
            
            $ul.style.display = "block";
            $ul.style.top = event.pageY - 60 + "px";
            $ul.style.left = event.pageX - 45 + "px";
            $li.onclick = function() {
                
                synth.speak(speech); 
                $ul.style.display = "none";
                $ul.remove();
            };
            $doc.addEventListener("mouseup", createLi);
        };
    };
}
