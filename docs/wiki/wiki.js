const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.menu > li[data-category]');
const subItems = document.querySelectorAll('.submenu li');

function showSection(id) {
    window.location.hash = id;
    sections.forEach(sec => sec.style.display = 'none');
    const target = document.getElementById(id);
    if (target) target.style.display = 'block';

    subItems.forEach(sub => sub.classList.remove('active'));
    const activeSub = document.querySelector(`.submenu li[data-sub='${id}']`);
    if (activeSub) activeSub.classList.add('active');
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const submenu = item.querySelector('.submenu');
        const firstSub = submenu?.querySelector('li');

        if (firstSub) {
            showSection(firstSub.dataset.sub);
        } else {
            showSection(item.dataset.category);
        }

        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

subItems.forEach(sub => {
    sub.addEventListener('click', (e) => {
        e.stopPropagation();
        showSection(sub.dataset.sub);
    });
});

const svgRedirect = `<span class="material-symbols-outlined">open_in_new</span>`;

document.querySelectorAll('a').forEach(a => {
    a.insertAdjacentHTML('beforeend', svgRedirect);
});

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) showSection(hash.substring(1));
    else showSection('base');
});

window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash) showSection(hash.substring(1));
});
