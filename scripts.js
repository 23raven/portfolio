const tagsButton = document.getElementById('tags-button');
const searchButton = document.getElementById('search-button');

const tagsFilter = document.getElementById('tags-filter');
const searchBar = document.getElementById('project-search');
const searchInput = document.getElementById('project-search-input');


let activeTag = 'all';


function filterProjects() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const projectTiles = document.querySelectorAll('.project-tile');

    projectTiles.forEach((project) => {
        const projectTitle = project.dataset.title || '';
        const projectTags = project.dataset.tags || '';

        const matchesSearch =
            projectTitle.includes(searchValue);

        const matchesTag =
            activeTag === 'all' ||
            projectTags.split(' ').includes(activeTag);

        project.style.display =
            matchesSearch && matchesTag
                ? 'flex'
                : 'none';
    });
}


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
    filterProjects();
});


tagsFilter.addEventListener('click', (event) => {
    const button = event.target.closest('button');

    if (!button) {
        return;
    }

    activeTag = button.dataset.tag;

    filterProjects();
});