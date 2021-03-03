'use strict';
function toggle() {
    var trailer = document.querySelector('.trailer');
    var video = document.querySelector('video');
    trailer.classList.toggle('active')
    video.currentTime = 0;
    video.pause();
}

let nam = document.getElementById('team'); 
let mai = document.querySelector('#mail'); 
let con = document.querySelector('#contact'); 
let slo = document.querySelector('#slot'); 
let pl1 = document.querySelector('#player1'); 
let pl2 = document.querySelector('#player2'); 
let pl3 = document.querySelector('#player3'); 
let pl4 = document.querySelector('#player4'); 
let pl5 = document.querySelector('#player5'); 

document.querySelector('.subm').addEventListener('click',function(){
    if (!document.querySelector('#team').value=='' && !document.querySelector('#mail').value=='' && !document.querySelector('#contact').value=='' && !document.querySelector('#slot').value=='' && !document.querySelector('#player1').value=='' && !document.querySelector('#player2').value=='' && !document.querySelector('#player3').value=='' && !document.querySelector('#player4').value=='' && !document.querySelector('#player5').value=='') {
        alert('Submitted Successfully, will contact ASAP...Play hard with CCE.')
    }
})

