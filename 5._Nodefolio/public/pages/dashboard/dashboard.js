const projectsWrapper = document.getElementById("projects-wrapper");

let categories = [];


fetch("/api/projects/")
.then(response => response.json())
.then(({ projects }) => {

    let j = 0;

    projects.map(project => {
        categories.push(project.category);
    });
    const uniqueCategories = [... new Set(categories)];

    uniqueCategories.map(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button type="button" class="collapsible">${category}</button>
        <div class="content" id="${category}">
        </div>
        `;
        projectsWrapper.appendChild(categoryDiv);
    });

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active1");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    });
    }

    projects.map(project => {
        const categoryDiv = document.getElementById(project.category);
        const projectDiv = document.createElement("div");
        projectDiv.className = "projectDiv";
        
        projectDiv.innerHTML = `
            <h3>${escapeHTML(project.name)}</h3>
            <p>Year: <strong>${escapeHTML(project.year.toString())}</strong></p>
            <p>Category: <strong>${escapeHTML(project.category)}</strong></p>
            <p>Technologies: <strong>${escapeHTML(project.technologies)}</strong></p>
            <p>Description: <strong>${escapeHTML(project.description)}</strong></p>
            <p><strong><a href="${escapeHTML(project.githubLink)}" target="_blank">GitHub</a></strong></p>
            <p>${(project.deployedLink) ? `<strong><a href=\"${escapeHTML(project.deployedLink)}\" target=\"_blank\">Deployed</a>` : "Project is not deployed"}</p> 
        `;

        

        const editButton = document.createElement("button");
        editButton.className = "dashboard-button";
        editButton.innerHTML = "Edit";
        editButton.type = "button";
        editButton.id = "edit-button"
        editButton.addEventListener("click", () => {
            window.location.assign(`/admin/dashboard/editproject/${project.id}`);
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "dashboard-button";
        deleteButton.innerHTML = "Delete";
        deleteButton.type = "button";
        deleteButton.id = "delete-button"
        deleteButton.addEventListener("click", () => {
            if (confirm(`Do you want to delete ${project.name}?`)){
                fetch(`/api/projects/${project.id}`, {
                    method: "DELETE"
                });
                projectDiv.style.display = "none";
            };

        });
        projectDiv.appendChild(editButton);
        projectDiv.appendChild(deleteButton);

        
        
        categoryDiv.appendChild(projectDiv);

    });

});


document.getElementById("addProjectButton").addEventListener("click", () => {
    window.location.assign("/admin/dashboard/addproject"); 
});