const Config = {
  apiKey: "AIzaSyDQ-vXol30VprfwhFWIGVhOdpaUlYYFzoU",
  authDomain: "let-s-chat-3ea64.firebaseapp.com",
  databaseURL: "https://let-s-chat-3ea64-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-3ea64",
  storageBucket: "let-s-chat-3ea64.appspot.com",
  messagingSenderId: "583492107860",
  appId: "1:583492107860:web:bef158c1f5e0f53de8f7c1"
};

// Initialize Firebase
firebase.initializeApp(Config);
username=localStorage.getItem("username");
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();

function addroom() {
  room_name = document.getElementById("room_name").value;

 localStorage.setItem("Roomname",room_name);

 window.location = "Let's_chat_page.html";

 firebase.database().ref("/").child(room_name).update({
       purpose: "Adding Room Name"
 });
}



