// Enter your code here

var num = document.getElementById("number");

num.addEventListener("change", (e) => {
  var n1 = num.value;
  var n2 = parseInt(n1);
  if (isNaN(n2)) {
    document.getElementById("result").innerText = "Please enter a number";
    document.getElementById("result").style.color = "red";
  }
  var rev = 0;

  while (1) {
    if (n2 <= 0) break;
    var rem = n2 % 10;
    rev = rev * 10 + rem;
    n2 = Math.floor(n2 / 10);
  }

  if (rev == n1) {
    document.getElementById("result").innerText = "Yes. This is a palindrome!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerText = "No. Try again";
    document.getElementById("result").style.color = "red";
  }
  e.preventDefault();
});
