(function(){
    "use strict";

/* Listens for user vertical scroll position and returns it as pageTop. */
    let pageTop;
    window.addEventListener("scroll", function(){
        pageTop = window.pageYOffset;
        return pageTop
    });

/* When button is clicked, moves h1 to top left, hides subheading, and runs loop through image array and gives transition for each image with delay, atm its removing the rotation attribute */
    const bodyLocate = document.querySelector("body");
    const enterLocate = document.getElementById("enter");
    const h1Locate = document.querySelector("h1");
    const subheading = document.getElementById("subheading");
    const imgLocate = document.querySelectorAll("main img");
    const rotatedeg = ["-20deg", "20deg", "-60deg", "10deg", "-40deg", "20deg"];
    enterLocate.addEventListener("click", function(event){
        event.preventDefault();
/*      bodyLocate.style.backgroundColor = "lightcoral";
        bodyLocate.style.transition = "all 4.25s ease"; */
        h1Locate.style.transformOrigin = "left top";
        h1Locate.style.transform = "translate(-90%, -350px)";
        h1Locate.style.transitionProperty = "font-size";
        h1Locate.style.transition = "all 1s";
        h1Locate.style.fontSize = "36px";
        subheading.className = "hidden";
        let delay = 2;
        for(let i = 0; i < imgLocate.length; i++){
            let img = imgLocate[i];
            img.style.transform = `scale(1) translate(0, 2500px) rotate(${rotatedeg[i]})`;
            img.style.transition = "all 3s ease";
            img.style.transitionDelay = `${delay}s`;
            delay = delay - 0.25;
        };
        enterLocate.className = "hidden";
    });



    h1Locate.addEventListener("click", function(){
        location.reload();
    });



    /* Changes background color on image hover and shows hover title, which follows user mouse movement*/
    const backgroundColors = ["lightcoral", "goldenrod", "lightblue", "lightpink", "lightgreen", "lightblue"];
    const h2Locate = document.querySelectorAll("#titles h2");

    let xPos;
    document.addEventListener("mousemove", function(event){
        xPos = event.clientX;
        return xPos
    });

    let yPos;
    document.addEventListener("mousemove", function(event){
        yPos = event.clientY;
        return yPos
    });

/* How to console log result from function? */
    

    for (let i = 0; i < imgLocate.length; i++){
        let img = imgLocate[i];
        let xPos = "";
        let yPos = "";
        img.addEventListener("mouseover", function(event){
            event.preventDefault();
            img.style.zIndex = "5";
            img.style.transition = "transform 0.5s";
            img.style.transform = `scale(1.1) translate(0, 2285px) rotate(${rotatedeg[i]})`;
            bodyLocate.style.backgroundColor = `${backgroundColors[i]}`;
            bodyLocate.style.transition = "all 1s ease";
            h2Locate[i].className = "showing";
            img.addEventListener("mousemove", function(event){
                xPos = event.clientX;
                yPos = event.clientY;
                if (i%2 == 0){
                    h2Locate[i].style.left = `${xPos + 100}px`;
                }
                else {
                    h2Locate[i].style.left = `${xPos - 600}px`;
                    /* h2Locate[i].style.color = "white"; */
                }
                
                if (pageTop > 0){
                    h2Locate[i].style.top = `${yPos + pageTop}px`;
                }
                else {
                    h2Locate[i].style.top = `${yPos}px`;
                }
            });
        });
        img.addEventListener("mouseout", function(event){
            event.preventDefault();
            img.style.zIndex = "";
            img.style.transform = `scale(1) translate(0, 2500px)`;
            h2Locate[i].className = "hidden";
        })
    };











    const articleLocate = document.querySelectorAll("article");
    const infoLocate = document.getElementById("info");
    const arrowLocate = document.querySelectorAll(".fa");

/* Listens for user vertical scroll position and returns it as pageTop. */
    window.addEventListener("scroll", function(){
        pageTop = window.pageYOffset;
        return pageTop
    });

    for (let i = 0; i < imgLocate.length; i++){
        let clickImg = imgLocate[i];
/*      Why do I have to define otherImg when I use for(otherImg of imgLocate)? */
/* Prevent scroll on body */
        clickImg.addEventListener("click", function(event){
            event.preventDefault();
            bodyLocate.style.overflow = "hidden";
            if (pageTop > 0){
                clickImg.style.top = `${pageTop + 150}px`;
            }
            else {
                clickImg.style.top = "150px";
            }
            clickImg.style.left = "15%";
            clickImg.style.transform = "scale(1) translate(0, 2500px)";
            clickImg.style.transition = "all 1.5s ease";
            clickImg.style.transitionDelay = "";
            infoLocate.style.top = `${pageTop}px`;
            articleLocate[i].style.transform = "translate(-2650px, 0)";
            articleLocate[i].style.transition = "all 1.5s ease";
            arrowLocate[i].style.opacity = "1";
            arrowLocate[i].style.transitionDelay = "1.5s";
            for (const otherImg of imgLocate){
                if(otherImg !== clickImg) {
                    otherImg.style.transform = "translate(-2000px, 2500px)";
                    otherImg.style.transition = "all 1.5s ease";
                    otherImg.style.transitionDelay = "";
                }
            };
        });
    };
 

    
/* Goes back to orignal screen from info page */
    for(let i = 0; i < arrowLocate.length; i++){
        let arrow = arrowLocate[i];
        arrow.addEventListener("click", function(event){
            event.preventDefault();
            bodyLocate.style.overflow = "";
            arrow.style.opacity = "0";
            arrow.style.transitionDelay = "";
            for(const img of imgLocate){
                img.style.transform = "scale(1) translate(0, 2500px)";
                img.style.transition = "all 1.5s ease";
                img.style.top = "";
                img.style.left = "";
                articleLocate[i].style.transform = "translate(2650px, 0)";
            };
        });
    };





/* Listens for keydown of esc and changes showing class to overlay hidden. */

    document.addEventListener("keydown", function(event){
        if (event.key == "Escape"){
            for(let i = 0; i < arrowLocate.length; i++){
                let arrow = arrowLocate[i];
                event.preventDefault();
                bodyLocate.style.overflow = "";
                arrow.style.opacity = "0";
                arrow.style.transitionDelay = "";
                for(const img of imgLocate){
                    img.style.transform = "scale(1) translate(0, 2500px)";
                    img.style.transition = "all 1.5s ease";
                    img.style.top = "";
                    img.style.left = "";
                    articleLocate[i].style.transform = "translate(2650px, 0)";
                };
            };
        }
    });


/* window.addEventListener(“resize”, init)
Clear the cache
chrome clear browsing data, shift command delete */

    

    


}());