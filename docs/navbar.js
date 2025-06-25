document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.createElement("div");
    const currentPage = window.location.pathname;
    const match = currentPage.match(/\/([^\/]+)\/?$/);
    const page = match ? match[1] : "";

    navbar.className = "navbar";
    navbar.innerHTML = `
        <a ${page === "" || page === "docs" ? "class='actual'" : ""} href="${page === "" || page === "docs" ? "" : "../"}">Accueil</a>
        <a ${page === "ressources" ? "class='actual'" : ""} href="${page === "" || page === "docs" ? "./ressources" : "../ressources"}">Ressources</a>
        <a ${page === "wiki" ? "class='actual'" : ""} href="${page === "" || page === "docs" ? "./wiki" : "../wiki"}">WiKi</a>
        <a ${page === "parties" ? "class='actual'" : ""} href="${page === "" || page === "docs" ? "./parties" : "../parties"}">Prochaines parties</a>
        <a ${page === "discord" ? "class='actual'" : ""} href="${page === "" || page === "docs" ? "./discord" : "../discord"}">Discord</a>
    `;

    document.body.insertBefore(navbar, document.body.firstChild);
});
