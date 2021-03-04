(function(){
    "use strict";

/* Listens for user vertical scroll position and returns it as pageTop. */
    let pageTop;
    window.addEventListener("scroll", function(){
        pageTop = window.pageYOffset;
        return pageTop
    });


    const mainLocate = document.querySelector("main");
    const buttonLocate = document.getElementById("enter");
    const h1Locate = document.querySelector("h1");
    buttonLocate.addEventListener("click", function(event){
        event.preventDefault();
        h1Locate.style.transformOrigin = "left top";
        h1Locate.style.transform = "translate(-100%, -300px)";
        h1Locate.style.transitionProperty = "font-size";
        h1Locate.style.transition = "all 2s";
        h1Locate.style.fontSize = "30px";
        mainLocate.style.transform = "translate(0, 2000px)";
        mainLocate.style.transition = "all 2s ease-out";
    });

    




/* Opens overlay upon image click. Iterates through imgLocate array and stores each under img variable, listens for click on that image, gets id of individual img and stores under thisImg, gets id of overlay associated with that image and assigns class names overlay and showing. Also iterates through sectionLocate array and stores each under section variable, assigns the section top to equal pageTop, or user vertical scroll position. */

    const imgLocate = document.querySelectorAll("main img");
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