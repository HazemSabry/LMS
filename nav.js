/**
 * @author Hazem Sabry 
 * @gmail hazemsabry2002@gmail.com
 * Represents a navigation bar component.
 */
class Nav {
    /**
     * @type {HTMLElement} - The navigation bar element.
     */
    nav;
    /**
     * @type {HTMLElement} - The page body element.
     */
    pageBody;
    /**
     * @type {HTMLElement} - The mobile menu element.
     */
    mobileMenu;
    /**
     * @type {HTMLElement} - The desktop menu element.
     */
    desktopMenu;
    /**
     * @type {HTMLElement} - The mobile profile element.
     */
    mobileProfile;
    /**
     * @type {HTMLElement} - The desktop profile element.
     */
    desktopProfile;
    /**
     * @type {HTMLElement} - The bottom navigation element.
     */
    bottomNav;
    /**
     * @type {HTMLElement} - The technical support button element.
     */
    technicalSupportBtn;
    /**
     * @type {HTMLElement} - The mobile navigation header element.
     */
    mobileNavHeader;
    /**
     * @type {HTMLElement} - The mobile go back button element.
     */
    mobileGoBackBtn;

    homePagePageMenuBtn;
    coursesPageMenuBtn;
    profilePageMenuBtn;
    informationPageMenuBtn;
    depositPageMenuBtn;
    FAQPageMenuBtn;
    privacyPolicyPageMenuBtn;
    userAgreementPageMenuBtn;
    technicalSupportPageMenuBtn;
    aboutAppPageMenuBtn;

    /**
     * Creates an instance of Nav.
     */
    constructor() {
        this.nav = document.querySelector("nav");
        this.pageBody = document.getElementById("page-body");
        const navBar = this.nav.querySelector(".nav");
        this.mobileMenu = navBar.querySelector(".menu-side");
        this.desktopMenu = navBar.querySelector(".menu-dropdown");
        this.mobileProfile = navBar.querySelector(".profile-side");
        this.desktopProfile = navBar.querySelector(".profile-dropdown");
        this.bottomNav = document.getElementById("bottom-nav");
        this.technicalSupportBtn = document.getElementById("technical-support-btn");
        this.mobileNavHeader = document.getElementById("page-header");
        this.mobileGoBackBtn = document.getElementById("mobile-go-back-btn");
        this.homePagePageMenuBtn = navBar.querySelectorAll("[home-page-menu-btn]");
        this.coursesPageMenuBtn = navBar.querySelectorAll("[courses-page-menu-btn]");
        this.profilePageMenuBtn = navBar.querySelectorAll("[profile-page-menu-btn]");
        this.informationPageMenuBtn = navBar.querySelectorAll("[information-page-menu-btn]");
        this.depositPageMenuBtn = navBar.querySelectorAll("[deposit-page-menu-btn]");
        this.FAQPageMenuBtn = navBar.querySelectorAll("[FAQ-page-menu-btn]");
        this.privacyPolicyPageMenuBtn = navBar.querySelectorAll("[privacy-policy-page-menu-btn]");
        this.userAgreementPageMenuBtn = navBar.querySelectorAll("[user-agreement-page-menu-btn]");
        this.technicalSupportPageMenuBtn = navBar.querySelectorAll("[technical-support-page-menu-btn]");
        this.aboutAppPageMenuBtn = navBar.querySelectorAll("[about-app-page-menu-btn]");
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com
     * Checks if a given component (HTML element) exists in the DOM.
     *
     * @param {HTMLElement} component - The HTML element to check for existence.
     * @returns {boolean} - Returns true if the component exists in the DOM, false otherwise.
     */
    componentExisted(component) {
        if (document.body.contains(component)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com
     * Adds the mobile navigation header to the DOM and sets its display property to "block".
     * Also, adds a click event listener to the mobileGoBackBtn that navigates back in the browser history.
     *
     * @returns {void} - No return value.
     */
    addMobileNavHeader() {
        if (!this.componentExisted(this.mobileNavHeader)) return;
        this.mobileNavHeader.style.display = "block";
        this.mobileGoBackBtn.addEventListener("click", () => {
            window.history.back();
        });
    }


    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com
     * Adds the padding top to the pageBody element based on the height of the nav element.
     *
     * @returns {void} - No return value.
     */
    addTheNavMarginTOPageBody() {
        this.pageBody.style.paddingTop = `${this.nav.offsetHeight}px`;
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com
     * Chooses the appropriate menu to display based on the screen width.
     *
     * @returns {void} - No return value.
     */
    chooseTheMenu() {
        if (screen.width >= MAX_MOBILE_SCREEN_WIDTH) {
            this.desktopMenu.style.display = "block";
            this.mobileMenu.style.display = "none";
        } else if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
            this.mobileMenu.style.display = "block";
            this.desktopMenu.style.display = "none";
        }
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com
     * Chooses the appropriate profile to display based on the screen width.
     *
     * @returns {void} - No return value.
     */
    chooseTheProfile() {
        // Check if the screen width is greater than or equal to the maximum mobile screen width
        if (screen.width >= MAX_MOBILE_SCREEN_WIDTH) {
            // If true, display the desktop profile and hide the mobile profile
            this.desktopProfile.style.display = "block";
            this.mobileProfile.style.display = "none";
        } else if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
            // If false, display the mobile profile and hide the desktop profile
            this.mobileProfile.style.display = "block";
            this.desktopProfile.style.display = "none";
        }
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com
     * Adds the bottom navigation bar to the DOM and sets its display property to "flex".
     * Also, adds a margin bottom to the pageBody element and adjusts the position of the technical support button.
     *
     * @returns {void} - No return value.
     */
    addTheBottomNavMarginToPageBody() {
        if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
            this.bottomNav.style.display = "flex";
            this.pageBody.style.marginBottom = `${this.bottomNav.offsetHeight}px`;
            this.technicalSupportBtn.style.bottom = `calc(1vh + ${this.bottomNav.offsetHeight}px)`;
        }
    }

    setMenuBtnAction() {
        this.homePagePageMenuBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                location.href = "./HomePage.html"
            })
        })

        // coursesPageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })

        // profilePageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })

        // informationPageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })

        // depositPageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })

        // FAQPageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })

        // privacyPolicyPageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })

        // userAgreementPageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })

        // technicalSupportPageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })

        // aboutAppPageMenuBtn.forEach((btn) => {
        //     btn.addEventListener("click", () => {

        //     })
        // })
    }
}

const navBar = new Nav();

navBar.addMobileNavHeader();
navBar.addTheNavMarginTOPageBody();
navBar.chooseTheMenu();
navBar.chooseTheProfile();
navBar.addTheBottomNavMarginToPageBody();
navBar.setMenuBtnAction();