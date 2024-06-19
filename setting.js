/**
 * @author Hazem Sabry
 * @email hazemsabry20002@gmail.com
 * 
 * Sets the event listeners for each menu button to navigate to the corresponding page when clicked.
 */
class Settings {
    /**
     * @type {HTMLElement} - The navigation bar element.
     */
    nav;
    /**
    * @type {HTMLElement} - The navbar element.
    */
    navBar;
    /**
     * @type {HTMLElement} - The page body element.
     */
    pageBody;
    /**
     * @type {HTMLElement} - The mobile navigation header element.
     */
    mobileNavHeader;
    /**
     * @type {HTMLElement} - The page body element.
     */
    logoSection;
    /**
     * @type {HTMLElement} - The mobile profile element.
     */
    nightModeCheckbox;
    /**
     * @type {HTMLElement} - The desktop profile element.
     */
    technicalSupportBtnCheckbox;
    /**
     * @type {HTMLElement} - The technical support button element.
     */
    technicalSupportBtn;

    constructor() {
        this.nav = document.querySelector("nav");
        this.navBar = this.nav.querySelector(".nav");
        this.mobileNavHeader = document.getElementById("page-header");
        this.pageBody = document.getElementById("page-body");
        this.logoSection = this.pageBody.querySelector(".logo-section");
        this.nightModeCheckbox = document.getElementById("night-mode-checkbox");
        this.technicalSupportBtnCheckbox = document.getElementById("technical-support-btn-checkbox");
        this.technicalSupportBtn = document.getElementById("technical-support-btn");
    }

    /**
     * @author Hazem Sabry
     * @email hazemsabry20002@gmail.com
     * 
     * Choose whether to display the mobile navigation header or the desktop navigation bar.
     *
     * @returns {void} - This method does not return any value.
     */
    chooseMobileDisplayOrDesktopDisplay() {
        if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
            this.mobileNavHeader.style.display = "block";
            this.navBar.style.display = "none";
            this.pageBody.style.paddingTop = `${this.nav.offsetHeight}px`;
            this.logoSection.style.display = "block";
        } else {
            this.navBar.style.display = "flex";
            this.mobileNavHeader.style.display = "none";
            this.pageBody.style.paddingTop = `${this.nav.offsetHeight}px`;
            this.logoSection.style.display = "none";
        }
    }

    /**
     * @author Hazem Sabry
     * @email hazemsabry20002@gmail.com
     *
     * Saves the changes made to the settings, such as the night mode and technical support button checkboxes.
     *
     * @returns {void} - This method does not return any value.
     */
    saveChanges() {
        this.nightModeCheckbox.addEventListener("click", (e) => {
            localStorage.setItem(e.target.name, e.target.checked);
        })
        this.technicalSupportBtnCheckbox.addEventListener("change", (e) => {
            localStorage.setItem(e.target.name, e.target.checked);
            technicalSupportBtnVisibility();
        })
    }

    /**
     * @author Hazem Sabry
     * @email hazemsabry20002@gmail.com
     *
     * Retrieves the saved settings values from localStorage and updates the checkboxes accordingly.
     *
     * @returns {void} - This method does not return any value.
     */
    getSettingsValue() {
        this.nightModeCheckbox.checked = localStorage.getItem("night-mode-checkbox") === "true";
        this.technicalSupportBtnCheckbox.checked = localStorage.getItem("technical-support-btn-checkbox") === "true";
    }
}

const settings = new Settings();

settings.chooseMobileDisplayOrDesktopDisplay();
settings.saveChanges();
settings.getSettingsValue();