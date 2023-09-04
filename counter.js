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

    alert(count + " palabras");
})

