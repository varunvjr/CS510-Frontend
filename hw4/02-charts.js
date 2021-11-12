let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];
let newFa=[];
let modifiedFamilies=[];
let newVa=[];
let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';
let characterArray=[];
let myGot=new Map([])
let families=[];
function storeFamilyNames(data){
  data.map((fa)=>{
    let houseName=fa.family.split(" ");
    let house=houseName[houseName.length-1];
    console.log("House :",house);
    if(myGot.has(house) ){
      let value=myGot.get(house);
      value+=1;
      myGot.set(house,value);
    }else{
      families.push(house);
      myGot.set(house,1);
    }
  })
  let idx=families.indexOf("Lanister");
  if(idx>-1){
    families.splice(idx,1);
  }
  let val=myGot.get("Lanister");
  console.log("Lanister valie",val);
  val+=myGot.get("Lannister");
  myGot.set("Lannister",val);
  myGot.delete("Lanister");
  console.log("got....",myGot);
  console.log("Hello",families);
  families.map((fam)=>{
    if(myGot.get(fam)<2){
      myGot.delete(fam);
    }
  })
  console.log("Got family after changes",myGot);
  console.log("got key",myGot.keys())
  console.log("got values",myGot.values())
  myGot.forEach((val,key) => {
    newFa.push(key);
    newVa.push(val);
  });
  console.log("Fam",newFa);
  console.log("FamVal",newVa);
}
fetch(url)
    .then(res=>res.json())
    .then(data=>{
        characterArray=[...characterArray,data];
        console.log(characterArray[0]);
        storeFamilyNames(characterArray[0]);
        console.log("ffff",newFa);
        console.log("vvvvvvvv",newVa)
        newFa.map((f)=>{
          let s="House "+f;
          modifiedFamilies.push(s);
        })
        renderChart();
    })
    .catch(err=>{console.log("Error",err)})
let renderChart = () => {
  let donutChart = document.getElementById('donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels:modifiedFamilies,
      datasets: [
        {
          label: 'My First Dataset',
          data: newVa,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};


