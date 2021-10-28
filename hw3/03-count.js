// Enter your code here

const word=document.getElementById("userinput");
word.addEventListener("input",(e)=>{
    e.preventDefault();
    const key=word.value.trim();
    console.log("keyword",key);
    const ul=key.length;
    console.log("Length: ",ul);
    const lk=key.toLowerCase();
    console.log("lk  ",lk);
    let paragraph=document.getElementById("intro").innerText;
    if(ul>=1){
    let re = new RegExp(key,'g'); // search for all instances
		let newText = paragraph.replace(re,`<mark>${key}</mark>`);
		document.getElementById("intro").innerHTML = newText;
    }else{

    }

    // console.log(paragraph);
    // paragraph.toLowerCase();
    // const words=paragraph.split(" ");
    // for(let i=0;i<words.length;i++){
    //     if(key.indexOf(words[i])!==-1){
    //         start.push(i);
    //     }
    // }
    // for(let j=0;j<start.length;j++){
    //    console.log("index",start[j]);
    //    console.log(paragraph.substring(start[j],start[j]+ul));
    // }
})

console.log('Enter your code here');
