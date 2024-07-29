
let todo=document.getElementById("todo");
let addbtn=document.getElementById("addTask"); 
let count=0;
addbtn.addEventListener("click",()=>{
   
    let card=document.createElement("div");
    card.setAttribute("class","card");
    card.innerHTML="New Task";
    card.id = `task-${count++}`;
    card.draggable=true
    //  card.setAttribute("contenteditable",true); 
    // card.setAttribute("draggable", true)
    todo.append(card);
   
    card.addEventListener("click",()=>{
        if(card.innerText=="New Task"){
            card.innerText="";
        }  
    })  
    card.addEventListener("blur",(e)=>{  
        if(card.innerText.trim()==""){
            card.remove()
        }
    }) 
   
   card.addEventListener("dragstart",(e)=>{
    card.style.opacity=0.5
    e.dataTransfer.setData('text', card.id);
    console.log("dragstart")
   })

   card.addEventListener("dragend",()=>{
    console.log("dragend")
    card.style.opacity=1
   })

   let dragEvents = ['dragover', 'dragenter', 'drop'];


for(let drag of dragEvents){
   // drag = dragover, dragenter, drop

   let columns = document.querySelectorAll(".colum");

   for(let col of columns){
      col.addEventListener(drag, (e)=>{
          e.preventDefault();
           if(drag == "drop"){
               let cardId = e.dataTransfer.getData('text');
               let taretCard = document.getElementById(cardId);
               col.append(taretCard)
           }

      })
   }
}

   //endbtn
})










