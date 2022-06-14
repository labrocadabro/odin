let options = document.getElementsByTagName('figure')
    for (i=0; i < options.length; i++) {
        options[i].addEventListener("mouseover", (e) => e.currentTarget.style.color = "#000");
        options[i].addEventListener("mouseout", (e) => e.currentTarget.style.color = "#aaa");
        options[i].addEventListener("click", result);
    }

function result(e) {
    let chosen = e.currentTarget.cloneNode(true);
    document.getElementById("options").appendChild(chosen);
}
//e.target.style.color ="black"