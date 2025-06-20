
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.createElement("div");
    const currentPage = window.location.pathname;
    const match = currentPage.match(/\/([^\/]+)\/?$/);

    console.log(currentPage, match[1])

    navbar.className = "navbar";
    navbar.innerHTML = `
        <a ${!match[1] || match[1] === "docs" ? "class='actual'" : ""} href="${!match[1] || match[1] === "docs" ? "" : "../"}">Accueil</a>
        <a ${match[1] === "ressources" ? "class='actual'" : ""} href="${!match[1] || match[1] === "docs" ? "./ressources" : "../ressources"}">Ressources</a>
        <a ${match[1] === "wiki" ? "class='actual'" : ""} href="${!match[1] || match[1] === "docs" ? "./wiki" : "../wiki"}">WiKi</a>
        <a ${match[1] === "parties" ? "class='actual'" : ""} href="${!match[1] || match[1] === "docs" ? "./parties" : "../parties"}">Prochaines parties</a>
        <a ${match[1] === "discord" ? "class='actual'" : ""} href="${!match[1] || match[1] === "docs" ? "./discord" : "../discord"}">Discord</a>
    `;

    document.body.insertBefore(navbar, document.body.firstChild);
});
