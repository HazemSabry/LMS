const root = document.documentElement;
const html = document.documentElement;
const errorColor = getComputedStyle(root).getPropertyValue("--error-color");
const btnColor = getComputedStyle(root).getPropertyValue(
    "--next-btn-background-color"
);
const MAX_MOBILE_SCREEN_WIDTH = 950;
const language = html.getAttribute("lang");

function initialize() {
    const screenHightScale = screen.height / 1050;
    const screenWidthScale = screen.width / 1680;
    const screenScale =
        screenWidthScale > screenHightScale ? screenWidthScale : screenHightScale;
    root.style.setProperty("--screen-scale", screenScale);

    if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
        html.style.fontSize = "16px";
    }
}

function mobileGoBackBtnAction() {
    if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
        const mobileGoBackBtn = document.getElementById("mobile-go-back-btn");
        mobileGoBackBtn.addEventListener("click", () => {
            window.history.back();
        });
    }
}



initialize();
