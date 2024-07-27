document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".box");

    buttons.forEach(button =>{
        button.addEventListener("click", function(){
            button.classList.toggle("clicked");
        });
    });
});