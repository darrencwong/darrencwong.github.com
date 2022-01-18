(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    let mode = 'light';

    button.addEventListener('click', function() {
        if (mode === 'light') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'dark';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'light'
        }
    })

    const myImages = ['images/header_light.jpg', 'images/header_dark.jpg'];
    let currentImage = 0;

    document.querySelector('button').addEventListener('click', switchPhoto);

    function switchPhoto() {
        if (currentImage == 1) {
            currentImage = 0;
            document.getElementById('bannerimage').src = myImages[currentImage];
        }

        else {
            currentImage++;
            document.getElementById('bannerimage').src = myImages[currentImage];
        }
    }

})()