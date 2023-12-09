const buttons = document.querySelectorAll(".button");
const body = document.querySelectorAll("body");



buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        
        if (e.target.id === "grey") {
         
            document.body.style.backgroundColor = e.target.id;
        }
    });
});
