function sendContactMessage() {
    fetch("/api/contact", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: document.getElementById("nameInput").value,
            email: document.getElementById("emailInput").value,
            phone: document.getElementById("phoneInput").value,
            message: document.getElementById("messageInput").value,
        })  
    }).then(response => {
        console.log(response);
        if (response.status === 200) {
            console.log("Everything went well");
            window.location.replace("/");
            alert("Message successfully sent!");
        } else {
            console.log("Error sending the contact message", response.status);
            alert("Message wasn't sent. Try again.");
        }
    });
}

document.getElementById("contact-button").addEventListener("click", sendContactMessage);