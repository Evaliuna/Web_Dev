let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

function calculator(expression){
    const allowed = /^[0-9+\-*/%.() ]+$/;

    if(!allowed.test(expression)){
        throw new Error("Invalid input");
    }
    return Function(`"use strict"; return (${expression})`)();
}

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML === '='){
            try{
                string = calculator(string).toString();
                input.value = string;
            } catch (error){
                string = "";
                input.value = "Error";
            }
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML === 'DEL'){
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})