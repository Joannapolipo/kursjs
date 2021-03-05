const body = document.body;
const btn = document.querySelector("#btn");

body.addEventListener("click", function(e) {

    console.log("Kliknąłeś w body");

});

btn.addEventListener("click", function(e) {

    console.log("Kliknąłeś przycisk");

});
