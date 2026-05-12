// Данные для проектов
const projectsData = [

    {
        imageSrc: "images/banners/banner_solar.png",
        title: "Solar System",
        description: "A Unity 3D project featuring an interactive Solar System with a simple orbit mini game and visual progression",
        techIconSrc: "images/icons/ic-tech-unity.png",
        githubLink: "https://github.com/23raven/Unity_Solar-System",
        youtubeLink: "https://www.youtube.com/watch?v=e2kvKioneVA",
        viewLink: "https://23raven.itch.io/solar-system"
    },
    {
        imageSrc: "images/banners/banner_rollball.png",
        title: "Roll-a-Ball",
        description: "Simple 3D game made with Unity where the player controls a rolling ball and interacts with objects on the level.",
        techIconSrc: "images/icons/ic-tech-unity.png",
        githubLink: "https://github.com/23raven/Unity_Rolling-Ball",
        youtubeLink: "https://www.youtube.com/watch?v=F68Bac06U3c",
        viewLink: "https://23raven.itch.io"
    },   
    
    
];

// Функция для создания элемента проекта
function createProjectTile(project) {
    const projectTile = document.createElement('div');
    projectTile.className = 'tile-project';

    const projectImage = document.createElement('img');
    projectImage.className = 'tile-project-image';
    projectImage.src = project.imageSrc;
    projectImage.alt = "Project Image";

    const projectTitle = document.createElement('h3');
    projectTitle.className = 'tile-project-title';
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.className = 'tile-project-description';
    projectDescription.textContent = project.description;

    const projectButtons = document.createElement('div');
    projectButtons.className = 'project-buttons';

    const techIcon = document.createElement('img');
    techIcon.className = 'tech-icon';
    techIcon.src = project.techIconSrc;
    techIcon.alt = "Tech Icon";

    const githubButton = document.createElement('a');
    githubButton.className = 'github-button'; // Добавляем класс для стилизации
    githubButton.href = project.githubLink;
    githubButton.target = "_blank";
    const githubImage = document.createElement('img');
    githubImage.src = "images/icons/ic-github-project.png";
    githubImage.alt = "GitHub Button";
    githubButton.appendChild(githubImage);

    const viewButton = document.createElement('a');
    viewButton.className = 'view-button'; // Добавляем класс для стилизации
    viewButton.href = project.viewLink;
    viewButton.target = "_blank";
    const viewImage = document.createElement('img');
    viewImage.src = "images/icons/ic-open-project.png";
    viewImage.alt = "View Button";
    viewButton.appendChild(viewImage);

    const youtubeButton = document.createElement('a');
    youtubeButton.className = 'youtube-button';
    youtubeButton.href = project.youtubeLink;
    youtubeButton.target = "_blank";
    const youtubeImage = document.createElement('img');
    youtubeImage.src = "images/icons/ic-youtube-project.png";
    youtubeImage.alt = "YouTube Button";
    youtubeButton.appendChild(youtubeImage);

    projectButtons.appendChild(techIcon);
    projectButtons.appendChild(githubButton);
    projectButtons.appendChild(youtubeButton);
    projectButtons.appendChild(viewButton);

    projectTile.appendChild(projectImage);
    projectTile.appendChild(projectTitle);
    projectTile.appendChild(projectDescription);
    projectTile.appendChild(projectButtons);

    return projectTile;
}

// Функция для добавления проектов в контейнер
function addProjectsToContainer() {
    const projectContainer = document.querySelector('.project-container');

    projectsData.forEach(project => {
        const projectTile = createProjectTile(project);
        projectContainer.appendChild(projectTile);
    });
}

// Вызов функции для добавления проектов при загрузке страницы
document.addEventListener('DOMContentLoaded', addProjectsToContainer);
