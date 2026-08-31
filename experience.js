const experiences = [
    {
        company: "Prime Food Factory",
        position: "Operations Analyst",
        description: "УУУУУУУУУУУУУrk and responsibilities. Description of work and responsibilities.",
        date: "Aug 2025 — Aug 2026"
    }
];


function renderExperiences() {
    const container = document.querySelector(".experience-tiles");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    experiences.forEach((experience) => {
        const tile = document.createElement("div");
        tile.className = "experience-tile";

        tile.innerHTML = `
            <div class="experience-company">${experience.company}</div>
            <div class="experience-position">${experience.position}</div>
            <div class="experience-description">${experience.description}</div>
            <div class="experience-date">${experience.date}</div>
        `;

        container.appendChild(tile);
    });
}


document.addEventListener("DOMContentLoaded", renderExperiences);