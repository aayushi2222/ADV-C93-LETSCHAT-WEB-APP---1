var firebaseConfig = {
      apiKey: "AIzaSyD1hNw2kavT1UBT0KwosoT5I-70clD713w",
      authDomain: "letschat-13f16.firebaseapp.com",
      databaseURL: "https://letschat-13f16-default-rtdb.firebaseio.com",
      projectId: "letschat-13f16",
      storageBucket: "letschat-13f16.appspot.com",
      messagingSenderId: "1024343018793",
      appId: "1:1024343018793:web:2b6e211f41a47f6ab47b38",
      measurementId: "G-94GL25PWQB"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
