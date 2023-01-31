function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "user" && password === "pass") {
      alert("Login successful!");
    } 
    else if (username==="abhi" && password==="jaiswal"){
        alert("Login successful!");
    }
    else {
      alert("Login failed. Please try again.");
    }
  }
  