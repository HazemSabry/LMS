const pageHeader = document.getElementById("page-header");
const createAccountOrLoginCardsContainer = document.getElementById("create-account-or-login-cards-container");
const createAccountOrLoginCardContainers = document.querySelectorAll(".create-account-or-login-card-container");
const backgroundColor = getComputedStyle(root).getPropertyValue("--background-color");
console.log(backgroundColor);

function screenResize() {
    if (screen.width > MAX_MOBILE_SCREEN_WIDTH) {
        createBackgroundMovingImages();
        createAccountOrLoginCardsContainer.style.zIndex = "99999";
        createAccountOrLoginCardContainers.forEach((createAccountOrLoginCardContainer) => {
            createAccountOrLoginCardContainer.style.zIndex = "99999";
        });
    }

    if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
        pageHeader.style.display = "block";

        createAccountOrLoginCardContainers.forEach((createAccountOrLoginCardContainer) => {
            createAccountOrLoginCardContainer.style.backgroundColor = backgroundColor;
            createAccountOrLoginCardContainer.style.alignItems = "flex-start";
        });
    }
}

screenResize();

