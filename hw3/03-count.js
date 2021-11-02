// Enter your code here
//Regular expression feature src:https://dev.to/comscience/highlight-searched-text-on-a-page-with-just-javascript-17b3//
const word = document.getElementById("userinput");
word.addEventListener("input", (e) => {
  e.preventDefault();
  const key = word.value.trim();
  console.log("keyword", key);
  const ul = key.length;
  console.log("Length: ", ul);
  let paragraph = document.getElementById("intro").innerText;
  if (ul >= 1) {
    let re = new RegExp(key, "g"); // search for all instances
    let newText = paragraph.replace(
      re,
      `<mark style="background:yellow;">${key}</mark>`
    );
    document.getElementById("intro").innerHTML = newText;
  } else {
    document.getElementById("intro").innerText = paragraph;
  }
});

console.log("Enter your code here");
