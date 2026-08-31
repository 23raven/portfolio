const projects = [
    {
        title: "Solar System",
        technologies: "Unity · C#",
        description: "Short description of the project, its purpose and what was implemented.",
        logo: "images/f2.jpg",

        tags: [
            "pet-project",
            "game-jam",
            "mechanics"
        ],

        links: {
            itch: "#",
            youtube: "#",
            github: "#"
        }
    }
];


function renderProjects() {
    const container = document.querySelector(".projects-tiles");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    projects.forEach((project) => {
        const tile = document.createElement("div");

        tile.className = "project-tile";
        tile.dataset.title = project.title.toLowerCase();

        const tags = project.tags
            .map((tag) => `<span>#${tag}</span>`)
            .join("");

        tile.innerHTML = `
            <div class="project-logo">
                <img src="${project.logo}" alt="${project.title} logo">
            </div>

            <div class="project-content">

                <div class="project-title">
                    ${project.title}
                </div>

                <div class="project-tags">
                    ${tags}
                </div>

                <div class="project-technologies">
                    ${project.technologies}
                </div>

                <div class="project-description">
                    ${project.description}
                </div>

                <div class="project-links">
                    <a href="${project.links.itch}" target="_blank" rel="noopener noreferrer">
                        Itch.io
                    </a>

                    <a href="${project.links.youtube}" target="_blank" rel="noopener noreferrer">
                        YouTube
                    </a>

                    <a href="${project.links.github}" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </div>

            </div>
        `;

        container.appendChild(tile);
    });
}



document.addEventListener("DOMContentLoaded", renderProjects);