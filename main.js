const screenHightScale = screen.height / 1050;
const imageDimension = 150 * screenHightScale;
const gapBetweenImages = 16 * screenHightScale;
const animationTime = 40;
const root = document.documentElement;
const rows = document.querySelectorAll(".row");
const numberOfRows = rows.length;
const numberOfImagesPerRow = rows[0].childElementCount;

const totalImageTranslateDistance = (imageDimension * numberOfImagesPerRow) + (gapBetweenImages * (numberOfImagesPerRow - 1));
const animate1PxInMileSeconds = (animationTime * 1000) / totalImageTranslateDistance;
const animationDelayInMileSeconds = animate1PxInMileSeconds * (imageDimension + gapBetweenImages);

function initialize() {
    root.style.setProperty("--screen-hight-scale", screenHightScale);
    initializeImages();
    startImagesAnimation();
}

function initializeImages() { 
    let rowIndex = 0;
    rows.forEach((row) => {
        const images = row.querySelectorAll(".image");
        rowIndex % 2 === 0 ? initializeImagesToLeft(images): initializeImagesToRight(images);
        rowIndex++;
    })
}

function initializeImagesToLeft(images) { 
    let counter = 0;
    images.forEach((image) => {
        image.style.left = `${counter * (imageDimension + gapBetweenImages)}px`;
        counter++;
    })
}

function initializeImagesToRight(images) { 
    let counter = 0;
    images.forEach((image) => {
        image.style.right = `${counter * (imageDimension + gapBetweenImages)}px`;
        counter++;
    })
}

function startImagesAnimation() {
    let rowIndex = 0;
    rows.forEach((row) => {
        rowIndex % 2 === 0 ? infiniteScrollToLeft(row): infiniteScrollToRight(row);
        rowIndex++;
    })
}

function infiniteScrollToLeft(row) {
    const images = row.querySelectorAll(".image");
    images.forEach((image) => {
        image.classList.add("scroll-left");
    })

    const infiniteScrollToLeftInterval = setInterval(function() {
        const firstChild = row.firstElementChild;
        row.removeChild(firstChild);
        row.appendChild(firstChild);
        firstChild.style.left = `${(numberOfImagesPerRow - 1) * (imageDimension + gapBetweenImages)}px`;
    }, animationDelayInMileSeconds);
}

function infiniteScrollToRight(row) {
    const images = row.querySelectorAll(".image");
    images.forEach((image) => {
        image.classList.add("scroll-right");
    })

    const infiniteScrollToRightInterval = setInterval(function() {
        const lastChild = row.firstElementChild;
        row.removeChild(lastChild);
        row.appendChild(lastChild);
        lastChild.style.right = `${(numberOfImagesPerRow - 1) * (imageDimension + gapBetweenImages)}px`;
    }, animationDelayInMileSeconds);
}


initialize();