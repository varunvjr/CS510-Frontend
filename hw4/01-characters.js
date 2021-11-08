// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';
let characterArray=[];
fetch(url)
    .then(res=>res.json())
    .then(data=>{
        characterArray=[...characterArray,data];
        console.log(characterArray[0]);
        printCharacters(characterArray[0]);
    })
    .catch(err=>{console.log("Error",err)})

function printCharacters(actor){
    actor.map(act=>{
        const div=document.createElement("div");
        const p=document.createElement("p");
        p.innerText=act.fullName;
        div.innerHTML="<img src="+act.imageUrl+" alt="+act.image+"/>"+act.fullName+ "";
        document.querySelector(".characters").appendChild(div);

        console.log("Name: ",act.imageUrl);
    })
}

  
