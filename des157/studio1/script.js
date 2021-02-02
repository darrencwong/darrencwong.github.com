(function(){
    "use strict";
    const formLocate = document.querySelector("form");
    const articleLocate = document.getElementById("madlib");

    formLocate.addEventListener("submit", function(event){
        event.preventDefault();

        const userAdj = document.getElementById("adj").value;
        const userAdjRhyme = document.getElementById("adjrhyme").value;

        const userNoun = document.getElementById("noun").value;
        const userNounRhyme = document.getElementById("nounrhyme").value;

        const userName = document.getElementById("name").value;


        let verse;

        const line1 = ["Walk around with all this ice, you thinking I'm ", "Watch me flow, you can't be this ", "Straight outta college, now I'm so "];
        
        const line2 = ["This is a wise investment man, don't be a ", "Listen to the king, I'm such a ", "Boutta flex at my interview with a "];

        const line3 = ["So talented just like I'm a ", "Y'all can't compete, even with a ", "Hop in the whip, skrt out with my "]

        const line4 = ["Don't mess with me bro or you gon see me ", "Can't listen to you clowns, I'm boutta go ", "If you see me in the streets, don't start " ]
        
        if (userAdj && userAdjRhyme && userNoun && userNounRhyme){
            function randomInt(max) {
                const randomNum = Math.random();
                const randomValue = randomNum * max;
                const roundedRandomValue = Math.floor(randomValue);
                return (roundedRandomValue);
            }

            let finalNum = randomInt(line1.length);

            verse = line1[finalNum] + `<u>${userAdj}</u>, <br> <br>` + line2[finalNum] + `<u>${userAdjRhyme}</u> <br> <br>` +  line3[finalNum] + `<u>${userNoun}</u>, <br> <br>` + line4[finalNum] + `<u>${userNounRhyme}</u> <br>
            <br>
            - <u>${userName}</u>`;
        }

        else {
            verse = "Broski I need all the words for this to work.";
        }

        const button = document.createElement("button");
        button.innerHTML = "ANOTHER ONE!";
        button.id = "anotherone";
        
        articleLocate.innerHTML = verse;
        articleLocate.appendChild(button);
        articleLocate.removeAttribute("class");
        myform.className = "invisible";

        button.addEventListener("click", function(){
            articleLocate.className = "invisible";
            myform.removeAttribute("class");
        });


        const formData = document. querySelectorAll("input[type=text]");
        for (const eachField of formData) {
            eachField.value = "";
        } 
    })


}());

/* Questions
How do I get a line break in the Text Node
add <br> in tic marks 
How do I get the form to only show one item at a time?
assign class visible and invisible and change between
Does the required overide the if else error check
yeah
For the another one button, does that still have to be within the form event listener?
 */