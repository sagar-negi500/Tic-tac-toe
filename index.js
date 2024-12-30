let allbox=document.querySelectorAll(".box");
let reset=document.querySelector("#reset")

let msgCon= document.querySelector(".msgContainer")
let msg= document.querySelector(".msg")
let newbu= document.querySelector("#newG")

let turnO=true;
let count=0;

const resetbut=()=>{
enableAllbox();
msgCon.classList.add("msgContainer")
}

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

allbox.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("clicked")
    // let count=0;
    // box.innerText="ab";
    if(turnO){
        box.innerText="X";
       box.style.color="yellow"
        turnO=false;
    }
    else{
        box.innerText="0"; 
        turnO=true;
    }
    box.disabled=true;
    count++;
  
    let iswinner=checkwinner();

    if(count===9 &&!iswinner){
        msg.innerText="the game is draw";
        msgCon.classList.remove("msgContainer")
        disableAllbox();
    }

    
})
})

const disableAllbox =()=>{
    for( let box of allbox){
        box.disabled=true;
    }
}
const enableAllbox =()=>{
    for( let box of allbox){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(pos1val)=>{
    msg.innerText=`The Winner is   ${pos1val}`;
    msgCon.classList.remove("msgContainer")

    disableAllbox();
}

const checkwinner =()=> {
   
        for(let pattern of winPattern ){
        let pos1val=allbox[pattern[0]].innerText;
        let pos2val=allbox[pattern[1]].innerText;
        let pos3val=allbox[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("the winner is " + pos1val);
                    showWinner(pos1val);
                }
                
        }
              
        }
        

        
}

newbu.addEventListener("click",resetbut);
reset.addEventListener("click",resetbut);
