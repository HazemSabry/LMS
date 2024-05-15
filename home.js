class Home {
    adsContainer;
    ads;
    indicatorsContainer
    indicators = [];

    constructor() {
        this.adsContainer = document.getElementById("ads-container");
        this.ads = this.adsContainer.querySelectorAll(".ad-container");
        this.indicatorsContainer = document.getElementById("indicators-container");
    }

    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || this.adsContainer.clientHeight) &&
            rect.right <= (window.innerWidth || this.adsContainer.clientWidth)
        );
    }

    addIndicators() {
        this.ads.forEach((element, i) => {
            const indicator = document.createElement("div");
            indicator.classList.add("ad-indicator");
            indicator.addEventListener("click", () => {
                this.ads[i].scrollIntoView({ behavior: "smooth", inline: "nearest" });
            });
            this.indicators.push(indicator);
            this.indicatorsContainer.appendChild(indicator);
        });
        this.indicators[0].classList.add("active");
    }

    adScroll() {
        this.adsContainer.addEventListener("scroll", () => {
            this.ads.forEach((element, i) => {
                if (this.isInViewport(element)) {
                    this.indicators[i].classList.add("active");
                } else {
                    this.indicators[i].classList.remove("active");
                }
            });
        })
    }

}

const home = new Home();

home.addIndicators();
home.adScroll();