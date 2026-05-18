
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("databaseOutput");
function writeForm(){
    // Get the form data
    const name = document.getElementById("name").value;
    const favoriteGolfC = document.getElementById("favoriteGolfC").value;
    const golfQuantity = document.getElementById("golfQuantity").value;
    console.log ("Form data: " + name + ", " + favoriteGolfC + ", " + golfQuantity);


    firebase.database().ref('/').set({
        favoriteGolfC: favoriteGolfC,
        golfQuantity: golfQuantity,
        name: name,
    });

}

