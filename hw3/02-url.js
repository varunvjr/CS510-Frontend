// Enter your code here
// URL legit check regular expression reference https://www.codegrepper.com/code-examples/javascript/how+to+validate+url+in+javascript

const btn = document.querySelector('input[type="button"]');
btn.addEventListener("click", (e) => {
  const url = document.getElementById("comments").value;
  var res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (!res) {
    alert("Invalid URL: " + url);
  } else {
    const div = document.getElementById("output");
    div.style.marginLeft = "25%";
    div.style.width = "50%";
    div.style.background = "white";
    div.style.borderRadius = "1px";
    const r1 = document.getElementById("result");
    r1.innerHTML = "<h1>Result</h1>";
    const pathName = document.getElementById("pathName");
    const pathValue = document.getElementById("pathValue");
    const qp = url.indexOf("?");
    let urs = "";
    if (qp !== -1) {
      document.getElementById("queryParameters").innerText = "Query Parameters";
      pathName.innerText = "URL";
      urs = url.substring(0, qp);
      pathValue.style.fontWeight = "bold";
      pathValue.innerText = urs;
      const s1 = url.substring(qp + 1);
      console.log("parameters", s1);
      const s2 = s1.replace("=", " : ");
      const parameter = s2.split("&");
      console.log("url string: ", urs);
      for (let i = 0; i < parameter.length; i++) {
        const p = document.createElement("P");
        p.style.marginBottom = "0rem";
        p.innerText = parameter[i];
        document.getElementById("queryParameters").appendChild(p);
      }
    } else {
      pathValue.innerText = url;
    }
  }
  e.preventDefault();
});

console.log("Enter your code here");

// Test Input #1:
// http://www.example.com

// Test Output
// http://www.example.com

// Test Input #2:
// http://www.example.com?name=r2d2

// Output
// http://www.example.com
// name: r2d2

// Test Input #3:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
