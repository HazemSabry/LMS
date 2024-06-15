class Settings {
    /**
     * @type {HTMLElement} - The navigation bar element.
     */
    nav;
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

    logoSection;

    nightModeCheckbox;

    technicalSupportBtnCheckbox;

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

    saveChanges() {
        this.nightModeCheckbox.addEventListener("click", (e) => {
            localStorage.setItem(e.target.name, e.target.checked);
        })
        this.technicalSupportBtnCheckbox.addEventListener("change", (e) => {
            localStorage.setItem(e.target.name, e.target.checked);
            technicalSupportBtnVisibility();
        })
    }

    getSettingsValue() {
        this.nightModeCheckbox.checked = localStorage.getItem("night-mode-checkbox") === "true";
        this.technicalSupportBtnCheckbox.checked = localStorage.getItem("technical-support-btn-checkbox") === "true";
    }
}

const settings = new Settings();

settings.chooseMobileDisplayOrDesktopDisplay();
settings.saveChanges();
settings.getSettingsValue();