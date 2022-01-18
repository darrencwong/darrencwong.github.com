(function() {
    'use strict';

    const myVideo = document.getElementById('myvideo');
    const volume = document.querySelector('.fa-volume-mute');

    const words = document.querySelectorAll('div');

    const cursiveWord = [words[1], words[4], words[6], words[8], words[10]];

    const images = document.querySelectorAll('img');

    volume.addEventListener('click', function(){
        if (!myVideo.muted) {
            volume.className = 'fas fa-volume-mute';
            myVideo.muted = true;
        }
        else {
            volume.className = 'fas fa-volume-up';
            myVideo.muted = false;
        }
    });



    const times = {
        start:[1, 2, 8, 9, 10, 15, 16, 17, 18, 19, 20],
        stop:[12, 12, 15, 15, 15, 24, 24, 24, 27, 27, 27]
    }

    const intervalID = setInterval(checkTime, 500);

    function checkTime() {

        for (let i = 0; i < words.length; i++){

            if (times.start[i] < myVideo.currentTime && myVideo.currentTime < times.stop[i]) {
                words[i].className = 'showing';
            }

            // else if (myVideo.currentTime > times.stop[i]) {
            //     cursiveWord[i].style.zIndex = '0';
            //     words[i].className = 'hidden';
            // }

            else {
                words[i].className = 'hidden';
            }
        };
    };



    for (let i = 0; i < cursiveWord.length; i++){
        cursiveWord[i].addEventListener('mouseover', function(){
            images[i].className = 'showing';
        });
        
        cursiveWord[i].addEventListener('mouseout', function(){
            images[i].className = 'hidden';
            //cursiveWord[i].style.zIndex = `${-i-1}`;//
        });
    };

    
})();