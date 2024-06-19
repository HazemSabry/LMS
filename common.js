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

    technicalSupportBtnVisibility();
}

/**
 * @author Hazem Sabry 
 * @gmail hazemsabry2002@gmail.com
 * mobileGoBackBtnAction - This function adds a click event listener to the mobileGoBackBtn element.
 * If the screen width is less than MAX_MOBILE_SCREEN_WIDTH, clicking the button will navigate back in the browser history.
 */
function mobileGoBackBtnAction() {
    if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
        const mobileGoBackBtn = document.getElementById("mobile-go-back-btn");
        mobileGoBackBtn.addEventListener("click", () => {
            window.history.back();
        });
    }
}

/**
 * @author Hazem Sabry 
 * @gmail hazemsabry2002@gmail.com
 * technicalSupportBtnVisibility - This function checks the visibility of the technical support button.
 * It retrieves the button element from the DOM and checks if it exists.
 * Then, it retrieves the state of the button from the local storage.
 * If the button state is not found in the local storage, it sets the default state to false.
 * If the state is "true", it hides the button. If the state is "false", it shows the button.
 *
 * @param {HTMLButtonElement} technicalSupportBtn - The technical support button element.
 * @param {string} technicalSupportBtnCheckbox - The state of the technical support button in the local storage.
 */
function technicalSupportBtnVisibility() {
    const technicalSupportBtn = document.getElementById("technical-support-btn");
    if (!technicalSupportBtn) return;

    const technicalSupportBtnCheckbox = localStorage.getItem("technical-support-btn-checkbox");
    if (technicalSupportBtnCheckbox === null) {
        localStorage.setItem("technical-support-btn-checkbox", false);
    }
    else if (technicalSupportBtnCheckbox === "true") {
        technicalSupportBtn.style.display = "none";
    }
    else if (technicalSupportBtnCheckbox === "false") {
        technicalSupportBtn.style.display = "block";
    }
}



initialize();
