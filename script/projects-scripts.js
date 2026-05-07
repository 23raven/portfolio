// Данные для проектов
const projectsData = [

    {
        imageSrc: "images/banners/banner-java-dbwizard.jpg",
        title: "Database Wizard",
        description: "Database Wizard is a tool for managing database tables through an intuitive web interface",
        techIconSrc: "images/icons/ic-tech-java.png",
        githubLink: "https://github.com/iskandar-rassulov/jvsp24-dbwz",
        viewLink: "https://www.youtube.com/watch?v=D8zTbJWPgSg"
    },
    {
        imageSrc: "images/banners/banner-java-fileconv.jpg",
        title: "File Converter",
        description: "This application allows you to convert images, audio, video and documents to various formats right from your browser",
        techIconSrc: "images/icons/ic-tech-java.png",
        githubLink: "https://github.com/iskandar-rassulov/jvsp24-flcv",
        viewLink: "https://www.youtube.com/watch?v=M_9XGhGIzjk&pp=0gcJCXcA-SJGOe9V"
    },
    {
        imageSrc: "images/banners/banner-java-medrec.jpg",
        title: "Medical Records",
        description: "Medical Records Management System is a simplified system for managing electronic medical records",
        techIconSrc: "images/icons/ic-tech-java.png",
        githubLink: "https://github.com/iskandar-rassulov/jvfx24-mrms",
        viewLink: "https://www.youtube.com/watch?v=80VjwO4nTTg"
    },
    {
        imageSrc: "images/banners/banner-js-lofipom.jpg",
        title: "Lofi Pomodoro",
        description: "Lofi Pomodoro is a simple and effective Pomodoro timer with lofi music",
        techIconSrc: "images/icons/ic-tech-js.png",
        githubLink: "https://github.com/iskandar-rassulov/js24-lfpm",
        viewLink: "https://iskandar-rassulov.github.io/js24-lfpm/"
    },
    {
        imageSrc: "images/banners/banner-js-katakana.png",
        title: "Katakana Quiz",
        description: "A project to learn and practice katakana and hiragana with a simple quiz",
        techIconSrc: "images/icons/ic-tech-js.png",
        githubLink: "https://github.com/iskandar-rassulov/js24-ktkn",
        viewLink: "https://iskandar-rassulov.github.io/js24-ktkn/"
    },
    {
        imageSrc: "images/banners/banner-js-todo.png",
        title: "To Do List",
        description: "A simple To-Do List application written in vanilla JavaScript, HTML, and CSS",
        techIconSrc: "images/icons/ic-tech-js.png",
        githubLink: "https://github.com/iskandar-rassulov/js24-tdl",
        viewLink: "https://iskandar-rassulov.github.io/js24-tdl/"
    },
    {
        imageSrc: "images/banners/banner-js-qrcode.png",
        title: "QR Code Generator",
        description: "Simple QR code generator [text and url]",
        techIconSrc: "images/icons/ic-tech-js.png",
        githubLink: "https://github.com/iskandar-rassulov/js24-qrcg",
        viewLink: "https://iskandar-rassulov.github.io/js24-qrcg/"
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

    projectButtons.appendChild(techIcon);
    projectButtons.appendChild(githubButton);
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
