let h1=document.getElementById("name");
let h2=document.getElementById("roll-no");
let button=document.getElementById("btn");

function clicked(){
    h2.textContent=" RA2311003020552";
    h1.style.color="red";
    h1.style.textDecoration="line-through";
    h1.style.textAlign="center";

   
}

function reset(){
    h1.textContent="GN Srihari Narayanan";
    h1.style.color="black";
    h1.style.textDecoration="none";
    h1.style.textAlign="left";
    h2.textContent="";
    button.innerText="Done";
    alert("Reset Successful");
   
    
}