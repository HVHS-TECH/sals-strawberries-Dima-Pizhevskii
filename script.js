
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("databaseOutput");


import { loggedIn } from "./fb_io.js";


function writeForm(){
    // Get the form data
    const name = document.getElementById("name").value;
    const favoriteGolfC = document.getElementById("favoriteGolfC").value;
    const golfQuantity = document.getElementById("golfQuantity").value;
    if (loggedIn == false){

                let element = document.getElementById("statusMessage");

element.innerText = "Please log in to submit the form.";
        return;

    }else {
    console.log ("Form data: " + name + ", " + favoriteGolfC + ", " + golfQuantity);


    firebase.database().ref('/').set({
        favoriteGolfC: favoriteGolfC,
        golfQuantity: golfQuantity,
        name: name,
    });
        console.log(loggedIn)
                let element = document.getElementById("statusMessage");

element.innerText = "Form data: " + name + ", " + favoriteGolfC + ", " + golfQuantity;
    }

}

window.writeForm = writeForm;

