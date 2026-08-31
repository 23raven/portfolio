const tagsButton = document.getElementById('tags-button');
const searchButton = document.getElementById('search-button');

const tagsFilter = document.getElementById('tags-filter');
const searchBar = document.getElementById('project-search');
const searchInput = document.getElementById('project-search-input');


tagsButton.addEventListener('click', () => {
    const isVisible = tagsFilter.style.display === 'flex';

    tagsFilter.style.display = isVisible ? 'none' : 'flex';
    searchBar.style.display = 'none';
});


searchButton.addEventListener('click', () => {
    const isVisible = searchBar.style.display === 'block';

    searchBar.style.display = isVisible ? 'none' : 'block';
    tagsFilter.style.display = 'none';

    if (!isVisible) {
        searchInput.focus();
    }
});


searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase().trim();

    const projectTiles = document.querySelectorAll('.project-tile');

    projectTiles.forEach((project) => {
        const projectTitle = project.dataset.title || '';

        project.style.display = projectTitle.includes(searchValue)
            ? 'flex'
            : 'none';
    });
});