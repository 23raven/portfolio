const projects = [
    {
        title: "Zero Direction",
        technologies: "Unity · C#",
        description: "A simple 2D platformer built in Unity where the direction of gravity can change during gameplay",
        logo: "images/icon_zd.png",

        tags: [
            "game-jam",
        ],

        links: {
            itch: "https://23raven.itch.io/zero-direction",
            youtube: "https://youtu.be/Cr8du3bMqoM",
            github: "https://github.com/23raven/Zero-Direction"
        }
    },
    {
        title: "Tracer FPS",
        technologies: "Unity · C#",
        description: "Tracer FPS is a reverse-engineering project recreating Tracer’s core gameplay mechanics from Overwatch in Unity",
        logo: "images/icon_tr.png",

        tags: [
            "pet-project",
            "mechanics"
        ],

        links: {
            itch: "https://23raven.itch.io/tracerfps",
            youtube: "https://youtu.be/bb6q8can3Yo",
            github: "https://github.com/23raven/Unity_TracerFPS"
        }
    },
    {
        title: "Nova Expedition",
        technologies: "Unity · C#",
        description: "A small story-driven adventure game developed with Unity, where the player explores a mysterious alien planet and uncovers its secrets",
        logo: "images/icon_ne.png",

        tags: [
            "pet-project"
        ],

        links: {
            itch: "https://23raven.itch.io/nova-expedition-trials",
            youtube: "https://www.youtube.com/watch?v=IYjij2PDPBA",
            github: "https://github.com/23raven/Unity_Nova-Expedition-Trials"
        }
    },
    {
        title: "Tooth Fairy",
        technologies: "Unity · C#",
        description: "A small 2D game made in Unity where you play as a Tooth Fairy",
        logo: "images/icon_tf.png",

        tags: [
            "pet-project"
        ],

        links: {
            itch: "https://23raven.itch.io/tooth-fairy",
            youtube: "https://www.youtube.com/watch?v=kRUNb_6U_4g",
            github: "https://github.com/23raven/Unity_Tooth-Fairy"
        }
    },
    {
        title: "Solar System",
        technologies: "Unity · C#",
        description: "A Unity 3D project featuring an interactive Solar System with a simple orbit mini game and visual progression",
        logo: "images/icon_ss.png",

        tags: [
            "pet-project"
        ],

        links: {
            youtube: "https://www.youtube.com/watch?v=e2kvKioneVA",
            github: "https://github.com/23raven/Unity_Solar-System"
        }
    },
    {
        title: "Rolling Ball",
        technologies: "Unity · C#",
        description: "Unity Rolling Ball is a simple 3D game made with Unity where the player controls a rolling ball and interacts with objects on the level",
        logo: "images/icon_rb.png",

        tags: [
            "pet-project"
        ],

        links: {
            youtube: "https://www.youtube.com/watch?v=F68Bac06U3c",
            github: "https://github.com/23raven/Unity_Rolling-Ball"
        }
    },
    {
        title: "Sprite Flight",
        technologies: "Unity · C#",
        description: "The player controls a small spaceship flying inside a confined area while avoiding moving obstacles",
        logo: "images/icon_sf.png",

        tags: [
            "pet-project"
        ],

        links: {
            youtube: "https://www.youtube.com/watch?v=vYucQs1Fw9o",
            github: "https://github.com/23raven/Unity_Sprite-Flight"
        }
    },
    {
        title: "Tanks",
        technologies: "Unity · C#",
        description: "Small tank battle prototype made in Unity",
        logo: "images/icon_tks.png",

        tags: [
            "pet-project"
        ],

        links: {
            youtube: "https://www.youtube.com/watch?v=bU9ElsaJo18",
            github: "https://github.com/23raven/Unity_Tanks"
        }
    },
    {
        title: "Flappy Bird Clone",
        technologies: "Unity · C#",
        description: "A simple Flappy Bird clone built with Unity",
        logo: "images/icon_fb.png",

        tags: [
            "pet-project"
        ],

        links: {
            youtube: "https://www.youtube.com/watch?v=uHSEDY-xDtA",
            github: "https://github.com/23raven/Unity_Flappy-Bird"
        }
    },
    {
        title: "Tic Tac Toe",
        technologies: "Unity · C#",
        description: "Simple 2D Tic Tac Toe game made in Unity",
        logo: "images/icon_ttt.png",

        tags: [
            "pet-project"
        ],

        links: {
            youtube: "https://www.youtube.com/watch?v=ZDp5QZ-_KfI",
            github: "https://github.com/23raven/Unity_TicTacToe"
        }
    },
    
];


function renderProjects() {
    const container = document.querySelector(".projects-tiles");
    const tagsContainer = document.querySelector(".project-tags-filter");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const allTags = new Set();

    projects.forEach((project) => {
        project.tags.forEach((tag) => {
            allTags.add(tag);
        });

        const tile = document.createElement("div");

        tile.className = "project-tile";
        tile.dataset.title = project.title.toLowerCase();
        tile.dataset.tags = project.tags.join(" ");

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
            ${project.links.itch ? `
                <a href="${project.links.itch}" target="_blank" rel="noopener noreferrer">
                    Itch.io
                </a>
            ` : ""}

            ${project.links.youtube ? `
                <a href="${project.links.youtube}" target="_blank" rel="noopener noreferrer">
                    YouTube
                </a>
            ` : ""}

            ${project.links.github ? `
                <a href="${project.links.github}" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            ` : ""}
        </div>

    </div>
`;

        container.appendChild(tile);
    });


    if (tagsContainer) {
        tagsContainer.innerHTML = "";

        const allButton = document.createElement("button");
        allButton.textContent = "ALL";
        allButton.dataset.tag = "all";
        
        allButton.classList.add('active');

        tagsContainer.appendChild(allButton);

        allTags.forEach((tag) => {
            const button = document.createElement("button");

            button.textContent = `#${tag}`;
            button.dataset.tag = tag;

            tagsContainer.appendChild(button);
        });
    }
}


document.addEventListener("DOMContentLoaded", renderProjects);