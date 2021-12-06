const projectId = document.getElementById("project-id").innerHTML;

const name = document.getElementById("nameInput");
const year = document.getElementById("yearInput");
const category = document.getElementById("categoryInput");
const technologies = document.getElementById("technologiesInput");
const githubLink = document.getElementById("githubLinkInput");
const deployedLink = document.getElementById("deployedLinkInput");
const description = document.getElementById("descriptionInput");

fetch(`/api/projects/${projectId}`)
.then(response => response.json())
.then(({ project }) => {
    project.map(project => {
        name.value = project.name;
        year.value = project.year;
        category.value = project.category;
        technologies.value = project.technologies;
        githubLink.value = project.githubLink;
        deployedLink.value = project.deployedLink;
        description.value = project.description;
    })
});

function saveProject() {
    fetch(`/api/projects/${projectId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: name.value,
            year: year.value,
            category: category.value,
            technologies: technologies.value,
            githubLink: githubLink.value,
            deployedLink: deployedLink.value,
            description: description.value,
        })
    }).then(response => {
        console.log(response);
        if (response.status === 200) {
            console.log("Everything went well");
            window.location.replace("/admin/dashboard");
            alert("Project successfully updated!");
        } else {
            console.log("Error editing project.", response.status);
            alert("Message wasn't edited. Try again.");
        }
    })
}

document.getElementById("saveProjectButton").addEventListener("click", saveProject);
document.getElementById("back").addEventListener("click", () => {
    window.location.assign("/admin/dashboard");
})