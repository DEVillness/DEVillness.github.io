const headerIcons = document.querySelectorAll("body > header > ul > li > img");
const sections = document.querySelectorAll("body > main > section.splash");
const main = document.querySelector("body > main");

for (let i = 0; i < headerIcons.length; i++) {
    headerIcons[i].onclick = () => {
        main.scrollTo({top: sections[i].offsetTop, left: 0, behavior: 'smooth'});
    };
}

const scrolls = document.querySelectorAll("body > main > section.splash.projects > div.container > div.scroll > label > input");
const projects = document.querySelectorAll("body > main > section.splash.projects > div.container > div.project");
const projectContainer = document.querySelector("body > main > section.splash.projects > div.container");

for (let i = 0; i < scrolls.length; i++) {
    scrolls[i].addEventListener("change", () => {
            projectContainer.scrollTo({top: 0, left: projects[i].offsetLeft, behavior: 'smooth'});
        }
    );
}