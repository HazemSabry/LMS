const rows = document.querySelectorAll(".row");

const imageDimension = 150 * screenHightScale;
const gapBetweenImages = 16 * screenHightScale;
const animationTime = 60;
const numberOfRows = rows.length;
const numberOfImagesPerRow = Math.ceil(screen.width / (imageDimension + gapBetweenImages)) + 1;
root.style.setProperty("--num-of-welcome-page-image", numberOfImagesPerRow);

const totalImageTranslateDistance = imageDimension * numberOfImagesPerRow + gapBetweenImages * (numberOfImagesPerRow - 1);
const animate1PxInMileSeconds = (animationTime * 1000) / totalImageTranslateDistance;
const animationDelayInMileSeconds = animate1PxInMileSeconds * (imageDimension + gapBetweenImages);

function initializeImages() {
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
            ? initializeImagesToLeft(images)
            : initializeImagesToRight(images);
        rowIndex++;
    });
}

function initializeImagesToLeft(images) {
    let counter = 0;
    images.forEach((image) => {
        image.style.left = `${counter * (imageDimension + gapBetweenImages)}px`;
        counter++;
    });
}

function initializeImagesToRight(images) {
    let counter = 0;
    images.forEach((image) => {
        image.style.right = `${counter * (imageDimension + gapBetweenImages)}px`;
        counter++;
    });
}

function startImagesAnimation() {
    let rowIndex = 0;
    rows.forEach((row) => {
        rowIndex % 2 === 0 ? infiniteScrollToLeft(row) : infiniteScrollToRight(row);
        rowIndex++;
    });
}

function infiniteScrollToLeft(row) {
    const images = row.querySelectorAll(".image");
    images.forEach((image) => {
        image.classList.add("scroll-left");
    });
}

function infiniteScrollToRight(row) {
    const images = row.querySelectorAll(".image");
    images.forEach((image) => {
        image.classList.add("scroll-right");
    });
}

function createInfiniteMovingImages() {
    const infiniteScrollInterval = setInterval(function () {
        let rowIndex = 0;
        rows.forEach((row) => {
            const firstChild = row.firstElementChild;
            row.removeChild(firstChild);
            row.appendChild(firstChild);
            rowIndex % 2 === 0
                ? (firstChild.style.left = `${(numberOfImagesPerRow - 1) * (imageDimension + gapBetweenImages)
                    }px`)
                : (firstChild.style.right = `${(numberOfImagesPerRow - 1) * (imageDimension + gapBetweenImages)
                    }px`);
            rowIndex++;
        });
    }, animationDelayInMileSeconds);
}

initialize();
initializeImages();
startImagesAnimation();
createInfiniteMovingImages();
