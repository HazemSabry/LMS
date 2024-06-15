/**
 * @author Hazem Sabry
 * @email hazemsabry2002@gmail.com
 * Constructor for the Home class.
 * Initializes the adsContainer, ads, and indicatorsContainer elements.
 *
 * @constructor
 */
class Home {
    adsContainer;
    ads;
    indicatorsContainer
    indicators = [];

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Constructor for the Home class.
     * Initializes the adsContainer, ads, and indicatorsContainer elements.
     */
    constructor() {
        this.adsContainer = document.getElementById("ads-container");
        this.ads = this.adsContainer.querySelectorAll(".ad-container");
        this.indicatorsContainer = document.getElementById("indicators-container");
    }

    /**
     *  @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Checks if an element is within the viewport of the user's current window.
     *
     * @param {Element} element - The HTML element to check.
     * @returns {boolean} - True if the element is within the viewport, false otherwise.
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || this.adsContainer.clientHeight) &&
            rect.right <= (window.innerWidth || this.adsContainer.clientWidth)
        );
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Adds indicators to the ads containers.
     *
     * @returns {void} - No return value.
     */
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

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Event listener for the adsContainer scroll event.
     * Updates the active indicator based on the current scroll position.
     */
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