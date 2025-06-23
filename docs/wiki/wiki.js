const sections = document.querySelectorAll('.section');
const items = document.querySelectorAll('.menu li');

function showSection(category) {
    sections.forEach(sec => {
        sec.style.display = sec.id === category ? 'block' : 'none';
    });
    items.forEach(item => {
    item.classList.toggle('active', item.dataset.category === category);
    });
}

items.forEach(item => {
    item.addEventListener('click', () => {
        showSection(item.dataset.category);
    });
});

showSection('base');