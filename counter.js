let textarea = document.querySelector("#textarea");
let text = "";
let btn = document.querySelector("#btn");


textarea.addEventListener("input", ()=>{
    text = textarea.value;
    //console.log(text);
})

btn.addEventListener("click", ()=>{
    let count = 0;
    let array = text.split(" "); 
    
    for(word of array){
        if(word){
            count++;
        }
    }

    if(array==false){
        alert("Empty input");
    }else if(count == 1){
        alert(count + " palabra");
    }else{
        alert(count + " palabras");
    }
    
})

