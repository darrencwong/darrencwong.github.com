(function(){
    "use strict";

/* Listens for user vertical scroll position and returns it as pageTop. */
    let pageTop;
    window.addEventListener("scroll", function(){
        pageTop = window.pageYOffset;
        return pageTop
    });

/* When button is clicked, moves h1 to top left, hides subheading, and runs loop through image array and gives transition for each image with delay, atm its removing the rotation attribute */
    const mainLocate = document.querySelector("main");
    const buttonLocate = document.getElementById("enter");
    const h1Locate = document.querySelector("h1");
    const subheading = document.getElementById("subheading");
    const imgLocate = document.querySelectorAll("main img");
    buttonLocate.addEventListener("click", function(event){
        event.preventDefault();
        h1Locate.style.transformOrigin = "left top";
        h1Locate.style.transform = "translate(-100%, -350px)";
        h1Locate.style.transitionProperty = "font-size";
        h1Locate.style.transition = "all 2s";
        h1Locate.style.transitionDelay = "4s";
        h1Locate.style.fontSize = "30px";
        /* subheading.className = "hidden"; */
        let i = 1.5;
        for(const img of imgLocate){
            img.style.transform = "scale(1) translate(0, 2000px)";
            img.style.transition = "all 3s ease";
            img.style.transitionDelay = `${i}s`;
            i = i - 0.25;
        };
    });

    




/* Opens overlay upon image click. Iterates through imgLocate array and stores each under img variable, listens for click on that image, gets id of individual img and stores under thisImg, gets id of overlay associated with that image and assigns class names overlay and showing. Also iterates through sectionLocate array and stores each under section variable, assigns the section top to equal pageTop, or user vertical scroll position. */

    const sectionLocate = document.querySelectorAll(".overlay");

    for(const img of imgLocate){
        img.addEventListener("click", function(event){
            event.preventDefault();
            const thisImg = event.target.id;
            for(const section of sectionLocate){
                section.style.top = `${pageTop}px`;
            };
            document.getElementById(`overlay${thisImg}`).className = "overlay showing";
        });
    }



    
/* Closes image upon click of overlay or x button. Iterates through overlayLocate array and stores each under overlay variable, listens for click on that overlay, changes showing class to overlay hidden. */

    const overlayLocate = document.querySelectorAll(".overlay");

    for(const overlay of overlayLocate){
        overlay.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector(".showing").className = "overlay hidden";
        });
    };

    const xLocate = document.querySelectorAll(".x");

    for(const x of xLocate){
        x.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector(".showing").className = "overlay hidden";
        });
    };



/* Listens for keydown of esc and changes showing class to overlay hidden. */

    document.addEventListener("keydown", function(event){
        if (event.key == "Escape"){
            document.querySelector(".showing").className = "overlay hidden";
        }
    })


    

    


}());