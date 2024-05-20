class Nav {
    nav;
    pageBody;
    mobileMenu;
    desktopMenu;
    mobileProfile;
    desktopProfile;
    bottomNav;
    technicalSupportBtn;
    mobileNavHeader;
    mobileGoBackBtn;

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
    }

    componentExisted(component) {
        if (document.body.contains(component)) {
            return true;
        } else {
            return false;
        }
    }

    addMobileNavHeader() {
        if (!this.componentExisted(this.mobileNavHeader)) return;
        this.mobileNavHeader.style.display = "block";
        this.mobileGoBackBtn.addEventListener("click", () => {
            window.history.back();
        });
    }


    addTheNavMarginTOPageBody() {
        this.pageBody.style.paddingTop = `${this.nav.offsetHeight}px`;
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

    chooseTheProfile() {
        if (screen.width >= MAX_MOBILE_SCREEN_WIDTH) {
            this.desktopProfile.style.display = "block";
            this.mobileProfile.style.display = "none";
        } else if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
            this.mobileProfile.style.display = "block";
            this.desktopProfile.style.display = "none";
        }
    }

    addTheBottomNavMarginToPageBody() {
        if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
            this.bottomNav.style.display = "flex";
            this.pageBody.style.marginBottom = `${this.bottomNav.offsetHeight}px`
            this.technicalSupportBtn.style.bottom = `calc(1vh + ${this.bottomNav.offsetHeight}px)`;
        }
    }

}

const navBar = new Nav();

navBar.addMobileNavHeader();
navBar.addTheNavMarginTOPageBody();
navBar.chooseTheMenu();
navBar.chooseTheProfile();
navBar.addTheBottomNavMarginToPageBody();