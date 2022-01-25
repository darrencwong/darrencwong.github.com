(function(){
    'use strict';

    document.addEventListener('mousemove', reportPos);
    let numDataPoints;
    let globalData;
    let sectionNum;

    async function getData(){
        const appTime = await fetch('data.json');
        const data = await appTime.json();
        const dataPoints = Object.keys(data);
        numDataPoints = dataPoints.length;
        globalData = Object.values(data);
        
    };
    getData();

    let prevLoc = 0;
    
    function reportPos(event){
        const windowSize = window.innerWidth;
        const sectionWidth = windowSize / numDataPoints;
        const xPos = event.clientX;
        sectionNum = Math.floor(xPos / sectionWidth);
        if (sectionNum !== prevLoc) {
            showData (sectionNum, globalData);
            showIcons (sectionNum, globalData);
            prevLoc = sectionNum;
        }; 
    };

    function showData (dataPointNum, data){
        document.getElementById('time').innerHTML = `${data[dataPointNum].time}`;
        document.getElementById('data').innerHTML = `<p>Youtube: ${data[dataPointNum].youtube}m</p>
        <p>Instagram: ${data[dataPointNum].instagram}m</p>
        <p>Messages: ${data[dataPointNum].messages}m</p>`;
    };


    function showIcons (sectionNum, globalData){
        if (sectionNum !== prevLoc){
            const sectionIcons = document.querySelectorAll('i');
            for (let i=0; i < sectionIcons.length; i++){
                sectionIcons[i].remove();
            };
            prevLoc = sectionNum;
        };

        // Adds one Instagram icon every time through the for loop up until the number specified in the data
        for(let i=0; i < globalData[sectionNum].instagram; i++) {
            const randomNum1 = Math.floor(Math.random()*1300);
            const randomNum2 = Math.floor(Math.random()*700);

            document.getElementById('icons').innerHTML += `<i id="instagram${i}_${sectionNum}" class="fab fa-instagram-square" style="left:${randomNum1}px; top:${randomNum2}px;"></i>`;
        };

        for(let i=0; i < globalData[sectionNum].youtube; i++) {
            const randomNum1 = Math.floor(Math.random()*1300);
            const randomNum2 = Math.floor(Math.random()*700);

            document.getElementById('icons').innerHTML += `<i id="youtube${i}_${sectionNum}" class="fab fa-youtube" style="left:${randomNum1}px; top:${randomNum2}px;"></i>`;
        };

        for(let i=0; i < globalData[sectionNum].messages; i++) {
            const randomNum1 = Math.floor(Math.random()*1300);
            const randomNum2 = Math.floor(Math.random()*700);

            document.getElementById('icons').innerHTML += `<i id="messages${i}_${sectionNum}" class="fas fa-comment" style="left:${randomNum1}px; top:${randomNum2}px;"></i>`;
        };
    };

    // I tried to condense the code but couldn't get access the data values with the apps array

    // function showIcons (sectionNum, globalData){
    //     const apps = ["youtube", "instagram", "messages"];
    //     console.log(globalData[sectionNum].apps[0]);

    //     for (let i=0; i<apps.length; i++){
            
    //         if (sectionNum !== prevLoc){
    //             const sectionIcons = document.querySelectorAll('i');
    //             for (let i=0; i < sectionIcons.length; i++){
    //                 sectionIcons[i].remove();
    //             };
    //             prevLoc = sectionNum;
    //         };
    
    //         // Adds one Instagram icon every time through the for loop up until the number specified in the data

            

    //         for(let i=0; i < globalData[sectionNum].apps[i]; i++) {
    //             const randomNum1 = Math.floor(Math.random()*1300);
    //             const randomNum2 = Math.floor(Math.random()*700);
    
    //             document.getElementById('icons').innerHTML += `<i id="${apps[i]}${i}_${sectionNum}" class="fab fa-${apps[i]}-square" style="left:${randomNum1}px; top:${randomNum2}px;"></i>`;
    //         };
    //     };
    // };

    
})();