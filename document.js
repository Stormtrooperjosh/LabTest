function showSection(id) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active-link');
    });
    document.getElementById(`${id}-link`).classList.add('active-link');
}
