function signOut(){

  let openRequest = indexedDB.open("project", 1);
  var db;



  openRequest.onsuccess = function() { console.log("success");

      db = openRequest.result;
      db.onversionchange = function() { db.close(); };

              let transaction2 = db.transaction("LogInUser", "readwrite");
              let logInUser = transaction2.objectStore("LogInUser");

              logInUser.put({
                k: "UN",
                v: ""
              });

              alert("Ypu are logged out !")
              window.location.href = "index.html";
        }
}

function checkSignIn(){

  let openRequest = indexedDB.open("project", 1);
  var db;



  openRequest.onsuccess = function() { console.log("success");

      db = openRequest.result;
      db.onversionchange = function() { db.close(); };

              let transaction2 = db.transaction("LogInUser", "readwrite");
              let logInUser = transaction2.objectStore("LogInUser");

              var r = logInUser.get("UN");


              r.onsuccess = function(){


                if (r.result.v == ""){

              document.getElementById("signin").style.visibility = 'visible';
              document.getElementById("signout").style.visibility = 'hidden';
              document.getElementById("mylist").style.visibility = 'hidden';

                }else{

                  document.getElementById("signin").style.visibility = 'hidden';
                  document.getElementById("signout").style.visibility = 'visible';
                  document.getElementById("mylist").style.visibility = 'visible';

                }

              };

            }
}

checkSignIn();
