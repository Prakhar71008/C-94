var firebaseConfig = {
    apiKey: "AIzaSyBssQf8JTNX7ITD0cErFGswCieuel49dcY",
    authDomain: "practice-5c81e.firebaseapp.com",
    databaseURL: "https://practice-5c81e-default-rtdb.firebaseio.com",
    projectId: "practice-5c81e",
    storageBucket: "practice-5c81e.appspot.com",
    messagingSenderId: "269840021133",
    appId: "1:269840021133:web:e8c2fd5fa176f4cf0c54c4"
  };

  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"add user"
    });
}