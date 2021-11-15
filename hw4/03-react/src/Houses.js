import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useEffect } from 'react';
import axios from 'axios';


let newVa=[];
let modifiedFamilies=[];

const Houses = () => {
    let newFa=[];
    let noneValue=0;
    const storeData=(data)=>{
        let myGot=new Map([])
        let families=[];
        console.log("Hello",data)
        // eslint-disable-next-line array-callback-return
        data.map((fa)=>{
            let houseName=fa.family.split(" ");
            let house=houseName[houseName.length-1];
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
          val+=myGot.get("Lannister");
          myGot.set("Lannister",val);
          myGot.delete("Lanister");
         
          // eslint-disable-next-line array-callback-return
          families.map(fam=>{
            if(myGot.get(fam)<2){
              noneValue++;
              myGot.delete(fam);
            }
          })
        
          myGot.forEach((val,key) => {
            newFa.push(key);
            newVa.push(val);
          });
         // eslint-disable-next-line array-callback-return
         newFa.map((f)=>{
            let s="House "+f;
            modifiedFamilies.push(s);
          })
          modifiedFamilies.push("None");
          newVa.push(noneValue);
          console.log("Modified families",modifiedFamilies);
          console.log("values",newVa)
    }
    useEffect(()=>{
        const getData=async()=>{
            const {data}=await axios.get("https://thronesapi.com/api/v2/Characters")
            storeData(data);
        }
        modifiedFamilies=[];
        newVa=[];
        getData();
    })
    const data = {
        labels: modifiedFamilies,
        datasets: [
          {
            label: '# of Votes',
            data: newVa,
            backgroundColor: [
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
            ],
            borderColor: [
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
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div>
        Welcome to houses page
        <Doughnut data={data}/>
           
        </div>
    )
}

export default Houses
