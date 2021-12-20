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
  
  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }