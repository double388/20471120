const plus = document.getElementById("plus");
const footer = document.getElementById("hide");

let shown = false;

footer.style.display = 'none';

plus.addEventListener("click", () => {
    shown = !shown;

    if(shown){
    footer.style.display = "flex";
    footer.scrollIntoView();
    }
    else{
        footer.style.display = "none";
    }
})

