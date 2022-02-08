(function() {
    'use strict';

    let globalData;

    const slider = document.getElementById('mySlider');
    const age = document.getElementById('age');
    const interests = document.getElementById('interests');
    const myImages = ['<img class="character" src="media/me_10.png" alt="figure illustration of 10 year old me" width="80%">', '<img class="character" src="media/me_13.png" alt="figure illustration of 13 year old me" width="80%">', '<img class="character" src="media/me_17.png" alt="figure illustration of 17 year old me" width="80%">', '<img class="character" src="media/me_21.png" alt="figure illustration of 21 year old me" width="80%">'];


    // Gets data
    async function getData(){
        const myData = await fetch('data.json');
        const personalityData = await myData.json();
        globalData = Object.values(personalityData);
    };
    getData();
    console.log(globalData); 
    // Not sure why global data is undefined globally


    const heightBar = new ProgressBar.Line('#heightBar', {
        strokeWidth: 15,
        easing: 'easeInOut',
        duration: 1000,
        color: '#EF8C0B',
        trailColor: '#333333',
        trailWidth: 15,
        svgStyle: {width: '100%', height: '100%'},
        text: {
          style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: 'black',
            position: 'absolute',
            right: '0',
            top: '25px',
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        }
    });

    const confidenceBar = new ProgressBar.Line('#confidenceBar', {
        strokeWidth: 15,
        easing: 'easeInOut',
        duration: 1000,
        color: '#EF8C0B',
        trailColor: '#333333',
        trailWidth: 15,
        svgStyle: {width: '100%', height: '100%'},
        text: {
          style: {
            color: 'black',
            position: 'absolute',
            right: '0',
            top: '25px',
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        }
    });

    const knowledgeBar = new ProgressBar.Line('#knowledgeBar', {
        strokeWidth: 15,
        easing: 'easeInOut',
        duration: 1000,
        color: '#EF8C0B',
        trailColor: '#333333',
        trailWidth: 15,
        svgStyle: {width: '100%', height: '100%'},
        text: {
          style: {
            color: 'black',
            position: 'absolute',
            right: '0',
            top: '25px',
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        }
    });

    const resilienceBar = new ProgressBar.Line('#resilienceBar', {
        strokeWidth: 15,
        easing: 'easeInOut',
        duration: 1000,
        color: '#EF8C0B',
        trailColor: '#333333',
        trailWidth: 15,
        svgStyle: {width: '100%', height: '100%'},
        text: {
          style: {
            color: 'black',
            position: 'absolute',
            right: '0',
            top: '25px',
            padding: 0,
            margin: 0,
            transform: null
          },
          autoStyleContainer: false
        },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100));
        }
    });
    

    // Starting state of four bars
    heightBar.animate(40 / 100);
    confidenceBar.animate(60 / 100);
    knowledgeBar.animate(20 / 100);
    resilienceBar.animate(15 / 100);
    // Not sure why globalData works in if statement but not outside if its a global variable


    // Listens for change in slider and executes different code depending on what segment it's in
    slider.addEventListener('change', function(){

        if (slider.value == 0){
            heightBar.animate((globalData[0].height) / 100); // Number from 0.0 to 1.0);
            confidenceBar.animate((globalData[0].confidence) / 100);
            knowledgeBar.animate((globalData[0].knowledge) / 100);
            resilienceBar.animate((globalData[0].resilience) / 100);
            
            age.innerHTML = `${globalData[0].age}<span id="yearsold"> yrs old</span>`;

            interests.innerHTML = `<p>${globalData[0].interests[1]}</p> <p>${globalData[0].interests[2]}</p> <p>${globalData[0].interests[3]}</p>`;

            document.getElementById('imageContainer').innerHTML = myImages[0];
            document.querySelector('img').className += ' animate__animated animate__slideInRight';

            document.querySelector('h1').style.fontFamily = "'Faster One', cursive";
        }
        
        if (slider.value > 0 && slider.value <= 33.33){
            // Sets value for each of the four bars using data from json file
            heightBar.animate((globalData[1].height) / 100); 
            confidenceBar.animate((globalData[1].confidence) / 100);
            knowledgeBar.animate((globalData[1].knowledge) / 100);
            resilienceBar.animate((globalData[1].resilience) / 100); 

            // Sets value for each of the four bars using data from json file
            age.innerHTML = `${globalData[1].age}<span id="yearsold"> yrs old</span>`;

            // Sets interests from json data inside interest section
            interests.innerHTML = `<p>${globalData[1].interests[1]}</p> <p>${globalData[1].interests[2]}</p> <p>${globalData[1].interests[3]}</p>`;

            // Sets corresponding illustration image with age and adds slideInRight animation
            document.getElementById('imageContainer').innerHTML = myImages[1];
            document.querySelector('img').className += ' animate__animated animate__slideInRight';

            // Changes font corresponding with age
            document.querySelector('h1').style.fontFamily = "'Lacquer', cursive";

            // document.querySelector('h2').className = 'animate__animated animate__flipInX'; Couldn't get animation to work with every slider change even though I'm trying to replace class name with every if statement. Only works on page load because it's specified in html
        }
        
        else if (slider.value > 33.33 && slider.value <= 66.66){

            heightBar.animate((globalData[2].height) / 100);
            confidenceBar.animate((globalData[2].confidence) / 100);
            knowledgeBar.animate((globalData[2].knowledge) / 100);
            resilienceBar.animate((globalData[2].resilience) / 100);

            age.innerHTML = `${globalData[2].age}<span id="yearsold"> yrs old</span>`;

            interests.innerHTML = `<p>${globalData[2].interests[1]}</p> <p>${globalData[2].interests[2]}</p> <p>${globalData[2].interests[3]}</p>`;

            document.getElementById('imageContainer').innerHTML = myImages[2];
            document.querySelector('img').className += ' animate__animated animate__slideInRight';

            document.querySelector('h1').style.fontFamily = "Helvetica, sans-serif";  
        }

        else if (slider.value > 66.66 && slider.value <= 100){

            heightBar.animate((globalData[3].height) / 100);
            confidenceBar.animate((globalData[3].confidence) / 100);
            knowledgeBar.animate((globalData[3].knowledge) / 100);
            resilienceBar.animate((globalData[3].resilience) / 100);

            age.innerHTML = `${globalData[3].age}<span id="yearsold"> yrs old</span>`;

            interests.innerHTML = `<p>${globalData[3].interests[1]}</p> <p>${globalData[3].interests[2]}</p> <p>${globalData[3].interests[3]}</p>`;

            document.getElementById('imageContainer').innerHTML = myImages[3];
            document.querySelector('img').className += ' animate__animated animate__slideInRight';

            document.querySelector('h1').style.fontFamily = "'Oswald', sans-serif";
        }
    });

}());