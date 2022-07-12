let main = document.querySelector('main');
let submit = document.querySelector('button');
let number = document.querySelector("input");

function draw(cols = 16, min = number.min, max = number.max) {
   if (cols < min) {
      cols = min;
   } else if (cols > max) {
      cols = max;
   }
   number.value = cols;
   main.innerHTML = "";
   document.documentElement.style.setProperty("--columns-row", cols);
   for (let i = 0; i < cols ** 2; i++) {
      let div = document.createElement("div");
      main.appendChild(div);
      div.addEventListener("mouseenter", (e) => e.currentTarget.classList.add("draw"));
   }
}

draw();

submit.addEventListener("click", (e) => {
   e.preventDefault();
   draw(number.value);
});




