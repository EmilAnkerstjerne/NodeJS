const projectsWrapper = document.getElementById("projects-wrapper");

// let nameElement = document.createElement("h3");
// let categoryElement = document.createElement("h4");
// let technologiesElement = document.createElement("h5");


fetch("/api/projects/")
.then(response => response.json())
.then(({ projects }) => {
    // todo group the projects by category
    projects.map(project => {
        const projectDiv = document.createElement("div");
        projectDiv.innerHTML = `
            <h3>${escapeHTML(project.name)}</h3>
            <p>Category: ${escapeHTML(project.category)}</p>
            <p>Technologies: ${escapeHTML(project.technologies.join(", "))}</p>
            <p>Links: ....</p>
        `;
        projectsWrapper.appendChild(projectDiv);
    });

});