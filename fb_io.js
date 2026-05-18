/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
var GLOBAL_user;

function fb_authenticate(){
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}
function fb_handleLogin(_user){
  if (_user) {
    console.log("User is logged in")
    GLOBAL_user + _user;
  } else {
    console.log("User is NOT logged in, starting popup process")
    fb_popupLogin();
  }
}
function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;
    console.log("User has logged in")
    console.log(result.user["displayName"])
  })
}

function fb_logout() {
  authenticationListener();
  firebase.auth().signOut();
  console.log("loggedout")
}


function fb_error(){
    // Don't forget your error handling!
}
