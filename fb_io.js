/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
console.log("Running fb_io.js")

var GLOBAL_user;
var authenticationListener;
export var loggedIn = false;
      let myString = loggedIn;

function fb_authenticate(){
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);



}
function fb_handleLogin(_user){
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user = _user;
    console.log(GLOBAL_user.displayName)
    let element = document.getElementById("statusMessage");

element.innerText = "Hello, " + GLOBAL_user.displayName + "! You are logged in and set up to submit the form.";
  } else {
    console.log("User is NOT logged in, starting popup process")
    fb_popupLogin();
  
  }
    if (true){
    loggedIn = true;
    console.log(loggedIn)

  }
}
function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;
    console.log("User has logged in")
    console.log(result.user["displayName"])
    
let element = document.getElementById("statusMessage");

element.innerText = "Hello, " + result.user["displayName"] + "! You are logged in and set up to submit the form.";
  })
}

function fb_logout() {
  authenticationListener();
  firebase.auth().signOut();
  console.log("loggedout")
  if (true){
    loggedIn = false;
  }
      console.log(loggedIn)


let element = document.getElementById("statusMessage");

element.innerText = "You have logged out. Please log in to submit the form.";
}


function fb_error(){
    // Don't forget your error handling!
}


window.fb_authenticate = fb_authenticate;
window.fb_logout = fb_logout; 





export {myString};