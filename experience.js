const experiences = [
    {
        company: "Prime Food Factory",
        position: "Operations Analyst",

        description: [
            "Managed and organized internal and local document workflows",
            "Prepared official documentation for the sale of goods and services and coordinated with the accounting department",
            "Prepared documentation to verify the proper use of loan funds for the bank and Damu Fund, and coordinated with external appraisers",
            "Verified incoming goods against supporting documentation and coordinated workflows between warehouse, production, accounting and external organizations."
        ],

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
            <ul class="experience-description">
    ${experience.description
        .map((point) => `<li>${point}</li>`)
        .join("")}
</ul>
            <div class="experience-date">${experience.date}</div>
        `;

        container.appendChild(tile);
    });
}


document.addEventListener("DOMContentLoaded", renderExperiences);