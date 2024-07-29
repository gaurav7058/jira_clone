
let todo=document.getElementById("todo");
let addbtn=document.getElementById("addTask"); 

addbtn.addEventListener("click",()=>{
    let card=document.createElement("div");
    // card.className="card";
    //        or
    card.setAttribute("class","card");
    card.innerHTML="New Task";
    // card.contentEditable=true;
    // or
    card.setAttribute("contenteditable",true);
    card.setAttribute("draggable", true)
    todo.append(card);
 
    // remove defalut value by click
    card.addEventListener("click",(e)=>{
        if(card.innerHTML=="New Task"){
            card.innerHTML="";
        }  
    })  
// remove card  by click using blur event if i click on sidecard it will remove
    card.addEventListener("blur",(e)=>{   
        if(card.innerText.trim()==""){
            card.remove();
        }
    }) 

})










