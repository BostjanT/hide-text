const btn = document.querySelector(".show-btn");
const p = document.querySelector(".text");
const input = document.querySelector(".input-text");

let state = true;

function showMeText() {
  if (state) {
    btn.innerText = "SHOW TEXT";
    p.style.opacity = 0;
  } else {
    btn.innerText = "HIDE TEXT";
    p.style.opacity = 1;
  }

  state = !state;
}

function changeText(text) {
  p.innerText = text;
  if(text.length == 0) {
    
  }
}

// EVENT LISTENERS

btn.addEventListener("click", showMeText);

input.addEventListener("change", () => {
  changeText(input.value);
  input.value = "";
});
