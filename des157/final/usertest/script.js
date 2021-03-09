(function(){
    "use strict";

    const userTest = alert("Hi there! Here are the three tasks for you to complete. 1. Enter the closet. 2. Hover over all the t-shirts. 3. Get more information on the Basquiat shirt. ")
/* When reloading, brower doesn't start all the way to the left, how to fix? */

/* Listens for user vertical scroll position and returns it as pageTop. */
    let pageTop;
    window.addEventListener("scroll", function(){
        pageTop = window.pageYOffset;
        return pageTop
    });

/* When button is clicked, moves h1 to top left, hides subheading, and runs loop through image array and gives transition for each image with delay, atm its removing the rotation attribute */
    const bodyLocate = document.querySelector("body");
    const buttonLocate = document.getElementById("enter");
    const h1Locate = document.querySelector("h1");
    const subheading = document.getElementById("subheading");
    const imgLocate = document.querySelectorAll("main img");
    buttonLocate.addEventListener("click", function(event){
        event.preventDefault();
/*         bodyLocate.style.backgroundColor = "lightcoral";
        bodyLocate.style.transition = "all 4.25s ease"; */
        h1Locate.style.transformOrigin = "left top";
        h1Locate.style.transform = "translate(-100%, -350px)";
        h1Locate.style.transitionProperty = "font-size";
        h1Locate.style.transition = "all 1s";
        h1Locate.style.fontSize = "30px";
        subheading.className = "hidden";
        let i = 2;
        for(const img of imgLocate){
            img.style.transform = "scale(1) translate(0, 2500px)";
            img.style.transition = "all 3s ease";
            img.style.transitionDelay = `${i}s`;
            i = i - 0.25;
        };
        buttonLocate.className = "hidden";
    });





    const articleLocate = document.querySelectorAll("article");
    const infoLocate = document.getElementById("info");

    /* Listens for user vertical scroll position and returns it as pageTop. */
    window.addEventListener("scroll", function(){
        pageTop = window.pageYOffset;
        return pageTop
    });

    for (let i = 0; i < imgLocate.length; i++){
        let clickImg = imgLocate[i];
        let otherImg ="";
/*         Why do I have to define otherImg when I use for(otherImg of imgLocate)? */
        clickImg.addEventListener("click", function(event){
            event.preventDefault();
            clickImg.style.top = `${pageTop + 200}px`;
            clickImg.style.left = "200px";
            clickImg.style.transition = "all 1.5s ease";
            clickImg.style.transitionDelay = "";
            infoLocate.style.top = `${pageTop}px`;
            articleLocate[i].style.transform = "translate(-2650px, 0)";
            articleLocate[i].style.transition = "all 1.5s ease";
            for (otherImg of imgLocate){
                if(otherImg !== clickImg) {
                    otherImg.style.transform = "translate(-2000px, 2500px)";
                    otherImg.style.transition = "all 1.5s ease";
                    otherImg.style.transitionDelay = "";
                }
            };
        });
    };

/*     kawsLocate.addEventListener("click", function(event){
        event.preventDefault();
        for (const img of imgLocate){
            if (img == imgLocate[0]){
                img.style.top = `${pageTop + 200}px`;
                img.style.left = "200px";
                img.style.transition = "all 2s ease";
                img.style.transitionDelay = "";
                sectionLocate.style.top = `${pageTop}px`;
                articleLocate[0].style.transform = "translate(-2150px, 0)";
                articleLocate[0].style.transition = "all 2s ease";
            }
            else {
                img.style.transform = "translate(-2000px, 2000px)";
                img.style.transition = "all 2s ease";
                img.style.transitionDelay = "";
                console.log(img);
            }
        };
    }); */
    


/* Changes background color on image hover */
    const backgroundColors = ["lightcoral", "goldenrod", "lightblue", "lightpink", "lightgreen", "lightblue"];
    const h2Locate = document.querySelectorAll("#titles h2");

/* How to get index of img? */
/*     let i="";
    for (i = 0; i < imgLocate.length; i++){
        console.log(i);
        let img = imgLocate[i];
        let thisBackgroundColor = backgroundColors[i];
        img.addEventListener("mouseover", function(event){
            event.preventDefault();
            bodyLocate.style.backgroundColor = `${thisBackgroundColor}`;
            console.log(thisBackgroundColor);
        });
    }; */

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
    


/*     let html = "";
    document.addEventListener("mousemove", reportPos);

    function reportPos(event){
        const xPos = event.clientX;
        const yPos = event.clientY;
        html = `The mouse is ${xPos} pixels from the left and ${yPos} pixels from the top`;
        p.innerHTML = html;
    } */
    

    for (let i = 0; i < imgLocate.length; i++){
        let img = imgLocate[i];
        let xPos = "";
        let yPos = "";
        img.addEventListener("mouseover", function(event){
            event.preventDefault();
            bodyLocate.style.backgroundColor = `${backgroundColors[i]}`;
            bodyLocate.style.transition = "all 1s ease";
            h2Locate[i].className = "showing";
            img.addEventListener("mousemove", function(event){
                xPos = event.clientX;
                yPos = event.clientY;
                h2Locate[i].style.left = `${xPos + 100}px`;
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
            h2Locate[i].className = "hidden";
        })
    };
 
    
/* Goes back to orignal screen from info page */
    const xLocate = document.querySelectorAll(".x");

    for(let i = 0; i < articleLocate.length; i++){
        let x = xLocate[i];
        x.addEventListener("click", function(event){
            event.preventDefault();
            for(const img of imgLocate){
                img.style.transform = "scale(1) translate(0, 2500px)";
                img.style.transition = "all 1.5s ease";
                img.style.top = "";
                img.style.left = "";
                articleLocate[i].style.transform = "translate(2150px, 0)";
            };
        });
    };
/*     for(const img of imgLocate){
        img.addEventListener("click", function(event){
            event.preventDefault();
            const thisImg = event.target.id;
            for(const section of sectionLocate){
                section.style.top = `${pageTop}px`;
            };
            document.getElementById(`overlay${thisImg}`).className = "overlay showing";
        });
    } */



    
/* Closes image upon click of overlay or x button. Iterates through overlayLocate array and stores each under overlay variable, listens for click on that overlay, changes showing class to overlay hidden. */

    const overlayLocate = document.querySelectorAll(".overlay");

    for(const overlay of overlayLocate){
        overlay.addEventListener("click", function(event){
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