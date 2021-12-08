async function login(){
    await fetch("/api/login", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            username: document.getElementById("usernameInput").value,
            password: document.getElementById("passwordInput").value, 
        })
    })
    .then(response => console.log(response.status))
    location.assign("/admin/dashboard");
    
}

document.getElementById("loginButton").addEventListener("click", login);