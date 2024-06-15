const screenScale = getComputedStyle(root).getPropertyValue('--screen-scale');
const animationScreenImage = document.getElementById("animation-screen image");
const animationScreenImageInnerHTML = animationScreenImage.innerHTML;
const createAccountBtn = document.getElementById("create-account-btn");
const loginBtn = document.getElementById("login-btn");

const imageDimension = 150 * screenScale;
const gapBetweenImages = 16 * screenScale;
const animationTime = 60;
const numberOfImagesPerRow = Math.ceil(screen.width / (imageDimension + gapBetweenImages)) + 1;
root.style.setProperty("--num-of-welcome-page-image", numberOfImagesPerRow);

const totalImageTranslateDistance = imageDimension * numberOfImagesPerRow + gapBetweenImages * (numberOfImagesPerRow - 1);
const animate1PxInMileSeconds = (animationTime * 1000) / totalImageTranslateDistance;
const animationDelayInMileSeconds = animate1PxInMileSeconds * (imageDimension + gapBetweenImages);

/**
 * @author Hazem Sabry 
 * @email hazemsabry20002@gmail.com 
 * WelcomePage class represents the welcome page functionality.
 */
class WelcomePage {
    constructor() {
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com 
     * Initializes the images on the welcome page.
     */
    initializeImages() {
        const rows = document.querySelectorAll(".row");
        const numberOfRows = rows.length;

        const imagesSrc = [
            "assets/student13.jpg",
            "assets/student14.jpg",
            "assets/student15.jpg",
            "assets/student16.jpg",
            "assets/student17.jpg",
            "assets/student18.jpg",
            "assets/student19.jpg",
            "assets/student20.jpg",
            "assets/student21.jpg",
            "assets/student22.jpg",
            "assets/student23.jpg",
            "assets/student24.jpg",
            "assets/student25.jpg",
            "assets/student26.jpg",
            "assets/student27.jpg",
            "assets/student28.jpg",
            "assets/student29.jpg",
            "assets/student30.jpg",
            "assets/student31.jpg",
            "assets/student32.jpg",
            "assets/student33.jpg",
            "assets/student34.jpg",
            "assets/student35.jpg",
            "assets/student36.jpg",
        ];

        let rowIndex = 0;
        let index = 0;
        rows.forEach((row) => {
            for (let i = 0; i < numberOfImagesPerRow - 4; i++) {
                const imageContainer = document.createElement("div");
                imageContainer.classList.add("image");
                const image = document.createElement("img");
                image.src = imagesSrc[index % imagesSrc.length];
                image.alt = "student image";
                imageContainer.appendChild(image);
                row.appendChild(imageContainer);
                index++;
            }
            const images = row.querySelectorAll(".image");
            rowIndex % 2 === 0
                ? this.initializeImagesToLeft(images)
                : this.initializeImagesToRight(images);
            rowIndex++;
        });
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com 
     * Initializes the images to the left of the row.
     * @param {HTMLCollectionOf<Element>} images - The collection of images to be positioned to the left.
     */
    initializeImagesToLeft(images) {
        let counter = 0;
        images.forEach((image) => {
            image.style.left = `${counter * (imageDimension + gapBetweenImages)}px`;
            counter++;
        });
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com 
     * Initializes the images to the right of the row.
     * @param {HTMLCollectionOf<Element>} images - The collection of images to be positioned to the right.
     */
    initializeImagesToRight(images) {
        let counter = 0;
        images.forEach((image) => {
            image.style.right = `${counter * (imageDimension + gapBetweenImages)}px`;
            counter++;
        });
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com 
     * Starts the animation of the images on the welcome page.
     * This method iterates through each row of images and initiates the infinite scrolling effect to the left or right.
     */
    startImagesAnimation() {
        const rows = document.querySelectorAll(".row");

        let rowIndex = 0;
        rows.forEach((row) => {
            rowIndex % 2 === 0 ? this.infiniteScrollToLeft(row) : this.infiniteScrollToRight(row);
            rowIndex++;
        });
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com 
     * Initializes the images to the left of the row.
     * @param {HTMLCollectionOf<Element>} images - The collection of images to be positioned to the left.
     */
    infiniteScrollToLeft(row) {
        const images = row.querySelectorAll(".image");
        images.forEach((image) => {
            image.classList.add("scroll-left");
        });
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com 
     * Initializes the images to the right of the row.
     * @param {HTMLCollectionOf<Element>} images - The collection of images to be positioned to the right.
     */
    infiniteScrollToRight(row) {
        const images = row.querySelectorAll(".image");
        images.forEach((image) => {
            image.classList.add("scroll-right");
        });
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com 
     * Creates an infinite moving images effect on the welcome page.
     */
    createInfiniteMovingImages() {
        /**
         * Selects all rows containing images.
         * @returns {HTMLCollectionOf<Element>} A collection of all rows.
         */
        const rows = document.querySelectorAll(".row");

        /**
         * @author Hazem Sabry 
         * @email hazemsabry20002@gmail.com 
         * Sets an interval for the infinite scrolling effect.
         * @returns {number} The interval ID for the setInterval function.
         */
        const infiniteScrollInterval = setInterval(function () {
            let rowIndex = 0;

            /**
             * Loops through each row of images.
             * @param {HTMLCollectionOf<Element>} row - The current row of images.
             */
            rows.forEach((row) => {
                const firstChild = row.firstElementChild;

                /**
                 * Removes the first child element from the current row.
                 * @param {Element} firstChild - The first child element to be removed.
                 */
                row.removeChild(firstChild);

                /**
                 * Appends the first child element back to the current row.
                 * @param {Element} firstChild - The first child element to be appended.
                 */
                row.appendChild(firstChild);

                /**
                 * Checks if the current row is positioned to the left.
                 * @returns {boolean} True if the row is positioned to the left, false otherwise.
                 */
                rowIndex % 2 === 0

                    /**
                     * Sets the left position of the first child element.
                     * @param {Element} firstChild - The first child element to be positioned.
                     * @param {string} position - The left position of the element.
                     */
                    ? (firstChild.style.left = `${(numberOfImagesPerRow - 1) * (imageDimension + gapBetweenImages)
                        }px`)

                    /**
                     * Sets the right position of the first child element.
                     * @param {Element} firstChild - The first child element to be positioned.
                     * @param {string} position - The right position of the element.
                     */
                    : (firstChild.style.right = `${(numberOfImagesPerRow - 1) * (imageDimension + gapBetweenImages)
                        }px`);

                /**
                 * Increments the row index.
                 * @param {number} rowIndex - The current row index.
                 */
                rowIndex++;
            });
        }, animationDelayInMileSeconds);
    }

    /**
     * @author Hazem Sabry 
     * @email hazemsabry20002@gmail.com 
     * Event listener for the "Create Account" and "Login" buttons.
     * Redirects the user to the respective pages when clicked.
     */
    btnAction() {
        createAccountBtn.addEventListener("click", () => {
            window.location.href = "CreateAccountPage.html";
        });
        loginBtn.addEventListener("click", () => {
            window.location.href = "LoginPage.html";
        });
    }
}

const welcomePage = new WelcomePage();

welcomePage.initializeImages();
welcomePage.startImagesAnimation();
welcomePage.createInfiniteMovingImages();
welcomePage.btnAction();

/**
 * Event listener for the "visibilitychange" event.
 * When the document becomes visible, it restores the original content of the "animation-screen image" element,
 * initializes the images on the welcome page, starts the animation of the images, and creates the infinite moving images effect.
 *
 * @param {Event} event - The event object representing the "visibilitychange" event.
 */
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        // Restores the original content of the "animation-screen image" element.
        animationScreenImage.innerHTML = animationScreenImageInnerHTML;
        // Initializes the images on the welcome page.
        welcomePage.initializeImages();
        // Starts the animation of the images on the welcome page.
        welcomePage.startImagesAnimation();
        // Creates the infinite moving images effect on the welcome page.
        welcomePage.createInfiniteMovingImages();
    }
});