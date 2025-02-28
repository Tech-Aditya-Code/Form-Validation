// validation
function mydata() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("email").value;
    let z = document.getElementById("pass").value;
    
    // any field empty return false 
    if (x == "" || y == "" || z == "")
        {
        alert("All fields are mandatory!");
        return false;
        }
    
    // name length < 3 return false
    else if (x.length < 3)
        {
            alert("Name must contain atleast 3 characters!");
            return false;
        }
    
    // password length < 8 return false
    else if (z.length < 8)
        {
            alert("password must contain length 8!");
            return false;
        } 
    else 
        {
            return true;
        }
}

// shows password
function show() {
    let p = document.getElementById("pass");
    if (p.type === "password")
    {
        p.type = "text";
    }
    else {
        p.type = "password";
    }
}

// clears input field
function clr(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    return false;
}