var numberofDrumButtons = document.querySelectorAll(".drum").length;
var sounds = [];
for (var i = 0; i < numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        // change the color 
        var buttonInnerHTMl = this.innerHTML;
        playsound(buttonInnerHTMl);
        buttonAnimation(buttonInnerHTMl);

    });

}
function playsound(ch) {
    switch (ch) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var tom4 = new Audio('sounds/snare.mp3');
            tom4.play();
            break;
        case "k":
            var tom4 = new Audio('sounds/crash.mp3');
            tom4.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/kick-bass.mp3');
            tom4.play();
            break;
        default:
            console.log("Hello ");
            break;
    }
}
function buttonAnimation(currentKey) {
    var h = document.querySelector("." + currentKey);
    h.classList.add('pressed'); // adding a class on button click
    setTimeout(function () {
        h.classList.remove('pressed');
    }, 100);
}
// document add event listener adds function to whole document
// event parameter  
document.addEventListener("keydown", function (event) {
    playsound(event.key);
    buttonAnimation(event.key);

})
/*
    
*/

/*Higher Order functions */
/** Functions are functions which take other functions as inputs 
 * .addEventListener(input1,input2);
 * function within function
 * function multiply(num1,num2)
 * {
 *  return num1*num2;
 * }
 * function calculator(num1,num2,operator)
 * {
 * return operator(num2,num2);
 * }
 * now function call
 * calculator(num1,num2,add);
 * chrome debugger is good tool for removing errors in code
 * type debugger in code 
 * then type line of code  which is wrong 
 */
/**
 * Play sound in webpage 
 * var audio = new Audio('name.mp3');
 * audio.play();
 */