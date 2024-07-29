
let todo=document.getElementById("todo");
let addbtn=document.getElementById("addTask"); 

addbtn.addEventListener("click",()=>{
    let superDiv=document.createElement("div");
    superDiv.setAttribute("class","superDiv")
    let card=document.createElement("div");
    card.setAttribute("class","card");
    card.innerHTML="New Task";
    card.setAttribute("contenteditable",true); 
    superDiv.append(card);
    // remove defalut value by click
    card.addEventListener("click",()=>{
        // let targerCard=e.target;
        // console.log(targerCard); 
        if(card.innerText=="New Task"){
            card.innerText="";
        }  
    })  
// // remove card  by click using blur event if i click on sidecard it will remove
    card.addEventListener("blur",(e)=>{  
        let targetCard=e.target;
        let targetParent=targetCard.parentElement;

        if(card.innerText.trim()==""){
            targetParent.remove();
            // superDiv.remove();
        }
    }) 
   
    // create dropdown

    let dropdown = document.createElement("select");
    dropdown.setAttribute("class","select_option");
dropdown.innerHTML = `
    <option value="todo">todo</option>
    <option value="inprogress">in progress</option>
    <option value="done">done</option> `;
    superDiv.append(dropdown)

    dropdown.addEventListener("change",(e)=>{
        // let targetCardValue=e.target.value;
        let targetCardValue=dropdown.value
        let selectColum=document.getElementById(targetCardValue);
        // console.log(targetCardValue)
        selectColum.append(superDiv)
    })
    todo.append(superDiv)
})










