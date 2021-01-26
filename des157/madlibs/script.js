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


        const verse = `Walk around with all this ice, you thinking I'm ${userAdj}, This is a wise investment man, don't be a ${userAdjRhyme}. So well rounded like I'm a ${userNoun}, Talented man going all the way ${userNounRhyme}`;

        articleLocate.innerHTML = verse;
        
    })


}());

/* Questions
How do I get a line break in the Text Node
How do I get the form to only show one item at a time? */