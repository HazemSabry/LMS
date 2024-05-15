class Nav {
    nav;
    pageBody;
    mobileMenu;
    desktopMenu;
    bottomNav;
    technicalSupportBtn;

    constructor() {
        this.nav = document.querySelector("nav");
        this.pageBody = this.nav.nextElementSibling;
        const navBar = this.nav.querySelector(".nav");
        this.mobileMenu = navBar.querySelector(".menu-side");
        this.desktopMenu = navBar.querySelector(".menu-dropdown");
        this.bottomNav = document.getElementById("bottom-nav");
        this.technicalSupportBtn = document.getElementById("technical-support-btn");
    }

    addTheNavMarginTOPageBody() {
        this.pageBody.style.marginTop = `${this.nav.offsetHeight}px`;
    }

    chooseTheMenu() {
        if (screen.width >= MAX_MOBILE_SCREEN_WIDTH) {
            this.desktopMenu.style.display = "block";
            this.mobileMenu.style.display = "none";
        } else if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
            this.mobileMenu.style.display = "block";
            this.desktopMenu.style.display = "none";
        }
    }

    addTheBottomNavMarginToPageBody() {
        if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
            this.bottomNav.style.display = "flex";
            this.pageBody.style.marginBottom = `${this.bottomNav.offsetHeight}px`
            this.technicalSupportBtn.style.bottom = `calc(3vh + ${this.nav.offsetHeight}px)`;
        }
    }

}

const navBar = new Nav();

navBar.addTheNavMarginTOPageBody();
navBar.chooseTheMenu();
navBar.addTheBottomNavMarginToPageBody();