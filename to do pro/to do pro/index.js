//without list printing

// const Box1=document.getElementById("inputBox");
// const box2=document.getElementById("textarea");

// function addtext(){
//     if(inputBox.value===''){
//         alert("you must write something");
//     }
//     else{
//         let text=document.getElementById("textarea");
//         text.innerHTML=inputBox.value;
//         textarea.appendChild(text);
//     }
// }

//list adding


// const box1=document.getElementById("inputBox");
// const box2=document.getElementById("list");

// function addtext(){
//     if(inputBox.value===''){
//         alert("you must write something");
//     }
//     else{
//         let a = document.createElement("li");
//         a.innerHTML=inputBox.value;
//         list.appendChild(a);
//     }
// }

//list text adding with a button


const box1=document.getElementById("inputBox");
const box2=document.getElementById("list");


//for only make a button with text
// function myFunction() {
//     var x = document.createElement("BUTTON");
//     var t = document.createTextNode("Click me");
//     x.appendChild(t);
//     document.body.appendChild(x);
//     return x; 
    
//     }
//   }
//for make a button and if you click on it the inputfield text removed
// function myFunction() {
//     var button = document.createElement("BUTTON");
//     var buttonText = document.createTextNode("Remove Value");
//     button.appendChild(buttonText);

//     button.onclick = function() {
//         document.getElementById('inputBox').value = '';
        
//     };

//     return button;
// }
//by simple function para removing

// function remove() {
//     const input = document.getElementById("list");
//     // remove input.
//     input.style.display = "none";
    
//   }

//for button and by clicking on the button the text will remove.

function myFunction() {
    var button = document.createElement("BUTTON");
    var buttonText = document.createTextNode("Remove Text");
    button.appendChild(buttonText);

    button.onclick = function() {
        var listItem = this.parentElement; // Get the parent list item
        var textToRemove = listItem.firstChild.textContent; // Get the text content of the list item
        document.getElementById('inputBox').value = document.getElementById('inputBox').value.replace(textToRemove, '').trim();
        listItem.remove(); // Remove the list item containing the text
    };

    return button;
}





function addtext(){
    if(inputBox.value===''){
        alert("you must write something");
    }
    else  {
        let a = document.createElement("li");
        a.innerHTML=inputBox.value;
        
        var button = myFunction(); 
        a.appendChild(button); 

        list.appendChild(a);        
}



}
