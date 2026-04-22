document.addEventListener("DOMContentLoaded", function () {
  const blendBtn = document.getElementById("blend-btn");
  const surnameInput = document.getElementById("surname");
  const fontSelect = document.getElementById("font");
  const colorSelect = document.getElementById("color");
  const colorPicker = document.getElementById("colorPicker");
  const sizeInput = document.getElementById("size");
  const spacingInput = document.getElementById("spacing");
  const letterSizeInput = document.getElementById("letterSize");
  const outputDiv = document.getElementById("output");

  blendBtn.addEventListener("click", function () {
    // here weclear previous output
    outputDiv.innerHTML = "";
    
    const surname = surnameInput.value.trim();
    const font = fontSelect.value;
    const selectedColor =
      colorPicker.value !== "#000000" ? colorPicker.value : colorSelect.value;
    const fontSize = letterSizeInput.value || sizeInput.value || 16;
    const letterSpacing = spacingInput.value + "px";
    const position = document.querySelector('input[name="pos"]:checked').value;

    if (surname === "") {
      alert("Please enter a surname!");
      return;
    }

    // here we split surname into characters
    const chars = surname.split("");

    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;

      // here we apply styles to the surname characters
      span.style.fontFamily = font;
      span.style.color = selectedColor;
      span.style.fontSize = fontSize + "px";
      span.style.letterSpacing = letterSpacing;
      span.style.position = "absolute";

      // here we position the characters based on the selected option
      if (position === "seq") {
        span.style.left = 15 * (index + 1) + "px";
        span.style.top = 15 * (index + 1) + "px";
      } else if (position === "rev") {
        span.style.left = 15 * (chars.length - index) + "px";
        span.style.top = 15 * (chars.length - index) + "px";
      } else if (position === "rand") {
        span.style.left = Math.floor(Math.random() * 280) + "px";
        span.style.top = Math.floor(Math.random() * 130) + "px";
      }

      outputDiv.appendChild(span);
    });
  });
});
