// Enter your code here

function changeColors() {
  const colors = ["#EBDEF0", "#ABEBC6", "#AED6F1", "#F39C12", "#5D6D7E"];
  const idx = Math.floor(Math.random() * colors.length);
  const bdy = document.querySelector("body");
  bdy.style.backgroundColor = colors[idx];
}
var handle = null;
var seconds = document.getElementById("interval").value;
console.log("seconds: ", seconds);
var btn = document.querySelector('input[type="button"]');
handle = setInterval(changeColors, seconds * 1000);

btn.addEventListener("click", (e) => {
  var disabled = document.getElementById("interval").disabled;
  if (disabled) {
    clearInterval(handle);
    document.getElementById("interval").disabled = false;
    seconds = document.getElementById("interval").value;
    btn.value = "Start";
    btn.className = "btn btn-primary";
  } else {
    btn.value = "Stop";
    btn.className = "btn btn-danger";
    document.getElementById("interval").disabled = true;
    handle = setInterval(changeColors, seconds * 1000);
  }
});
