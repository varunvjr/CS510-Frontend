// Enter your code here

var num=document.getElementById("number");

num.addEventListener("change",(e)=>{
    var n1=num.value;
    console.log("number",n1);
    var n2=parseInt(n1);
    var rev=0;

    while(1){
        if(n2<=0)
            break;
        var rem=n2%10;
        rev=rev*10+rem;
        n2=Math.floor(n2/10);
    }

    if(rev==n1){
        document.getElementById("result").innerText="Yes";
    }else{
        document.getElementById("result").innerText="No";
    }
    e.preventDefault();
})

