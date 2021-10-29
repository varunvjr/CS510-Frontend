// Enter your code here


function changeColors(){
    const colors=["#EBDEF0","#ABEBC6","#AED6F1","#F39C12","#5D6D7E"];
    const idx=Math.floor(Math.random()*colors.length);
    const bdy=document.querySelector("body");
    bdy.style.backgroundColor=colors[idx];
}
var handle=null;
var seconds=document.getElementById("interval").value;
console.log("seconds: ",seconds);
var btn=document.querySelector('input[type="button"]');
var disabled=document.getElementById("interval").disabled;
if(disabled){
    handle=setInterval(changeColors,seconds*1000);
}

btn.addEventListener("click",(e)=>{
    disabled=!disabled;
     if(!disabled){
        clearInterval(handle);
        document.getElementById("interval").disabled=false;
        seconds=document.getElementById("interval").value;
        btn.value="Start";
        btn.style.backgroundColor="blue";
       
        btn.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log("seconds: ",seconds);
            btn.value="Stop";
            btn.style.backgroundColor="red";
            document.getElementById("interval").disabled=true;
            handle=setInterval(changeColors,seconds*1000);
        })
     
     }else{
            document.getElementById("interval").disabled=true;
            btn.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log("seconds: ",seconds);
            btn.value="Start";
            btn.style.backgroundColor="blue";
            document.getElementById("interval").disabled=false;
            handle=setInterval(changeColors,seconds*1000);
        })
     }
})




