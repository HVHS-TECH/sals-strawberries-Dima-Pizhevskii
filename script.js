
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("databaseOutput");


import { GLOBAL_user, loggedIn } from "./fb_io.js";


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


    firebase.database().ref('/' + GLOBAL_user.uid).set({
        favoriteGolfC: favoriteGolfC,
        golfQuantity: golfQuantity,
        name: name,
    });
        console.log(loggedIn)
        console.log(GLOBAL_user.uid)
        console.log(GLOBAL_user.$uid)
                let element = document.getElementById("statusMessage");

element.innerText = "Form data: " + name + ", " + favoriteGolfC + ", " + golfQuantity;
    }

}

window.writeForm = writeForm;


