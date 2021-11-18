let backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
];
let newFa = [];
let modifiedFamilies = [];
let newVa = [];
let borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
];
let noneValue = 0;
// URL to Game of Thrones API to fetch all characters
let url = "https://thronesapi.com/api/v2/Characters";
let characterArray = [];
let myGot = new Map([]);
let families = [];
function storeFamilyNames(data) {
  data.map((fa) => {
    let houseName = fa.family.split(" ");
    let house = houseName[houseName.length - 1];
    if (myGot.has(house)) {
      let value = myGot.get(house);
      value += 1;
      myGot.set(house, value);
    } else {
      families.push(house);
      myGot.set(house, 1);
    }
  });
  let idx = families.indexOf("Lanister");
  if (idx > -1) {
    families.splice(idx, 1);
  }

  let val = myGot.get("Lanister");
  val += myGot.get("Lannister");
  myGot.set("Lannister", val);
  myGot.delete("Lanister");

  families.map((fam) => {
    if (fam == "Unknown" || fam == "None" || fam == "") {
      noneValue++;
      myGot.delete(fam);
    }
  });
  console.log("Families", myGot.keys());
  console.log(families);
  families.map((fa) => {
    if (myGot.get(fa) < 2) {
      myGot.delete(fa);
    }
  });
  myGot.forEach((val, key) => {
    newFa.push(key);
    newVa.push(val);
  });
}
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    characterArray = [...characterArray, data];
    console.log(characterArray[0]);
    storeFamilyNames(characterArray[0]);
    console.log("None value", noneValue);
    newFa.map((f) => {
      let s = "House " + f;
      modifiedFamilies.push(s);
    });
    modifiedFamilies.push("None");
    newVa.push(noneValue);
    renderChart();
  } catch (err) {
    console.log(err);
  }
}

let renderChart = () => {
  let donutChart = document.getElementById("donut-chart");

  new Chart(donutChart, {
    type: "doughnut",
    options: {
      title: {
        display: true,
        text: "Exercise 02 - Charts",
        fontSize: "40",
        fontStyle: "bold",
        fontColor: "black",
        lineHeight: "1.5",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
    data: {
      labels: modifiedFamilies,
      datasets: [
        {
          label: "My First Dataset",
          data: newVa,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

getData();
