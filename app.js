//Here all the elements are called and stored in variables.
var sidebarElement = document.querySelector(".sidebar");
const showMenuBtnElement = document.querySelector(".show-menu-btn");
const closeMenuBtnElement = document.querySelector(".close-menu-btn");

//This will set the height of sidebar 0px so that it will not be visible in large screens
sidebarElement.style.height = "0px";

//This functions toggles sidebar. Specifically it opens the sidebar
function showSidebar() {
    sidebarElement.style.height = "250px";

    showMenuBtnElement.style.display = "none";

    closeMenuBtnElement.style.display = "block";
}

//This function closes the sidebar
function closeSidebar() {
    sidebarElement.style.height = "0px";

    showMenuBtnElement.style.display = "block";

    closeMenuBtnElement.style.display = "none";
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenRightElements = document.querySelectorAll(".hidden-to-right");
hiddenRightElements.forEach((el) => observer.observe(el));

const hiddenLeftElements = document.querySelectorAll(".hidden-to-left");
hiddenLeftElements.forEach((el) => observer.observe(el));

const hiddenBottomElements = document.querySelectorAll(".hidden-to-bottom");
hiddenBottomElements.forEach((el) => observer.observe(el));

const hiddenTopElements = document.querySelectorAll(".hidden-to-top");
hiddenTopElements.forEach((el) => observer.observe(el));