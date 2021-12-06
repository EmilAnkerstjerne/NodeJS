function postProject() {
    fetch("/api/projects", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: document.getElementById("nameInput").value,
            year: document.getElementById("yearInput").value,
            category: document.getElementById("categoryInput").value,
            technologies: document.getElementById("technologiesInput").value,
            githubLink: document.getElementById("githubLinkInput").value,
            deployedLink: document.getElementById("deployedLinkInput").value,
            description: document.getElementById("descriptionInput").value,
        })  
    }).then(response => {
        console.log(response);
        if (response.status === 200) {
            console.log("Everything went well");
            window.location.replace("/admin/dashboard");
            alert("Project successfully created!");
        } else {
            console.log("Error creating project", response.status);
            alert("Project wasn't created. Try again.");
        }
    });
}

document.getElementById("addProjectButton").addEventListener("click", postProject);
document.getElementById("back").addEventListener("click", () => {
    window.location.assign("/admin/dashboard");
});
