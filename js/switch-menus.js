var startContainer = document.querySelector("#start-container");
var homeMenu = document.querySelector("#menu--home");

var projectsContainer = document.querySelector("#projects-container");
var projectsMenu = document.querySelector("#menu--projects");

var aboutContainer = document.querySelector("#about-container");
var aboutMenu = document.querySelector("#menu--about");

var contactContainer = document.querySelector("#contact-container");
var contactMenu = document.querySelector("#menu--contact");

homeMenu.onclick = function () {
    startContainer.style.display = "block";
    projectsContainer.style.opacity = 0;
    aboutContainer.style.opacity = 0;
    contactContainer.style.opacity = 0;
    setTimeout(function () {
        startContainer.style.opacity = 1;
        projectsContainer.style.display = "none";
        aboutContainer.style.display = "none";
        contactContainer.style.display = "none";
    }, 200);
};

projectsMenu.onclick = function () {
    projectsContainer.style.display = "block";
    startContainer.style.opacity = 0;
    aboutContainer.style.opacity = 0;
    contactContainer.style.opacity = 0;
    setTimeout(function () {
        projectsContainer.style.opacity = 1;
        startContainer.style.display = "none";
        aboutContainer.style.display = "none";
        contactContainer.style.display = "none";
    }, 200);
};

aboutMenu.onclick = function () {
    aboutContainer.style.display = "block";
    startContainer.style.opacity = 0;
    projectsContainer.style.opacity = 0;
    contactContainer.style.opacity = 0;
    setTimeout(function () {
        aboutContainer.style.opacity = 1;
        startContainer.style.display = "none";
        projectsContainer.style.display = "none";
        contactContainer.style.display = "none";
    }, 200);
};

contactMenu.onclick = function () {
    contactContainer.style.display = "block";
    startContainer.style.opacity = 0;
    projectsContainer.style.opacity = 0;
    aboutContainer.style.opacity = 0;
    setTimeout(function () {
        contactContainer.style.opacity = 1;
        startContainer.style.display = "none";
        projectsContainer.style.display = "none";
        aboutContainer.style.display = "none";
    }, 200);
};
