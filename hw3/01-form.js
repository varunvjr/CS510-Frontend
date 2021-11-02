const form = document.getElementById("form");
form.addEventListener("submit", submitForm);

function submitForm(e) {
  console.group();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const option = document.getElementById("option").value;
  const section = document.querySelectorAll('input[name="section"]');
  let sec = "no selection";
  let feedback = "no feedback";
  const checkboxes = document.querySelectorAll('input[name="course"]:checked');
  let courses = [];
  checkboxes.forEach((ch) => {
    courses.push(ch.value);
  });
  let courseList = "none of the courses";
  if (courses.length > 0) {
    courseList = "";
    courses.forEach((ch) => {
      courseList += ch;
      courseList += ", ";
    });
  }
  const FB = document.getElementById("Anything else?").value;
  if (FB.length > 0) {
    feedback = FB;
  }
  for (const rb of section) {
    if (rb.checked) {
      sec = rb.value;
      break;
    }
  }

  console.log("============== Form Submission =================");
  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Class Registration: ", option);
  console.log("Class Section: ", sec);
  console.log("Courses Taken: " + courseList);
  console.log("Feedback: ", feedback);

  console.groupEnd();

  e.preventDefault();
}
