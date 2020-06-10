
let userName =[];
let time=[];

let tags = document.querySelectorAll("button");
let inputTags = document.querySelectorAll("input");
let pTags = document.querySelectorAll("p");
let divTag = document.querySelector("div")

for(let i=0;i<tags.length;i++){
    tags[i].onclick = function(){nameChecking(inputTags[i])}
}

function nameChecking(arg1){
    let MT =arg1.value; 
    let mtId= arg1.getAttribute("id");

    for(let i=pTags.length;i>0;i--){
        time.push(pTags[(i-1)].innerText)
    }

    if(time.includes(mtId)){
        console.log(time)
        time.splice(time.indexOf(mtId),1);
        time.push(mtId);
        console.log(time)
    }
    
    arg1.value="";
    arg1.focus();
    divTag.innerHTML="";

    Perinting();    
}

function Perinting(){
    let childPara = document.createElement("label");
    childPara.textContent="CONVERSATIONS";
    divTag.appendChild(childPara);
    let lengthOfArr = time.length;
    for(let i=0;i<lengthOfArr;i++){
        let child = document.createElement("p");
        child.textContent=time.pop();
        divTag.appendChild(child)
    }
    
}

// nameAndMsg();