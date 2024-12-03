// let str = prompt("Enter your full name");
// let st = '@';
// let size = str.length;
// console.log(str+st+size);
 let str1= prompt("Enter first player name");
 let str2= prompt("Enter second player name");
let button = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newbtn= document.querySelector(".newbtn");
let msg = document.querySelector(".msg");
let m= document.querySelector(".m");
const pattern=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
 
let turn= true;

button.forEach((i) => {
    i.addEventListener("click",() => {
        console.log("Box is clicked");
        if(turn){
            i.innerText = "O";
            turn=false;
        }
        else{
            i.innerText = "X";
            turn=true;
        }
        i.disabled = true;
        check();
    });
});

const newgame = () =>{
     turn = true;
     enable();
     msg.classList.add("hidden");
}
const enable =() =>{
    for( k of button){
        k.disabled = false;
        k.innerText="";
    }
}
const check = () =>{
    for(j of pattern){
       let p1= button[j[0]].innerText;
       let p2= button[j[1]].innerText;
       let p3= button[j[2]].innerText;

    
    if(p1 !="" && p2 !="" && p3 !="" ){
        if(p1==p2 && p2==p3){
            // if(p1=="O")console.log(str1, "is winneer");
            // else console.log(str2 , "is winner");
            winner(p1);
        }
       
    }
    
   }
}
const winner = (win) =>{
    if(win=="O"){
        m.innerText= `Congratulation! ${str1} You Won`;
        msg.classList.remove("hidden");
    }
    else if(win=="X"){
       m.innerText= `Congratulation! ${str2} You Won`;
       msg.classList.remove("hidden");
    }
    disable();
}
const disable =() =>{
    for( k of button){
        k.disabled = true
    }
}
newbtn.addEventListener("click",newgame);
reset.addEventListener("click",newgame);
