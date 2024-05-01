const screenHightScale = screen.height / 1050;
const root = document.documentElement;

function initialize() {
    root.style.setProperty("--screen-hight-scale", screenHightScale);
}

function createBackgroundMovingImages() {
    const body = document.body;
    console.log
    body.style.maxHeight = "100vh";
    body.style.overflow = 'hidden';

    const backgroundStudentImages = [
        "./assets/backgroundStudent1.jpg",
        "./assets/backgroundStudent2.jpg",
        "./assets/backgroundStudent3.jpg",
        "./assets/backgroundStudent4.jpg",
        "./assets/backgroundStudent5.jpg",
        "./assets/backgroundStudent6.jpg",
        "./assets/backgroundStudent7.jpg",
        "./assets/backgroundStudent8.jpg",
        "./assets/backgroundStudent9.jpg",
        "./assets/backgroundStudent10.jpg",
        "./assets/backgroundStudent11.jpg",
        "./assets/backgroundStudent12.jpg",
        "./assets/backgroundStudent13.jpg",
        "./assets/backgroundStudent14.jpg",
        "./assets/backgroundStudent15.jpg",
        "./assets/backgroundStudent16.jpg",
        "./assets/backgroundStudent17.jpg",
        "./assets/backgroundStudent18.jpg",
        "./assets/backgroundStudent19.jpg",
        "./assets/backgroundStudent20.jpg",
        "./assets/backgroundStudent21.jpg",
        "./assets/backgroundStudent22.jpg",
        "./assets/backgroundStudent23.jpg",
        "./assets/backgroundStudent24.jpg",
        "./assets/backgroundStudent25.jpg",
        "./assets/backgroundStudent26.jpg",
    ];

    const animationTime = 50;
    const numOfRows = Math.ceil(window.screen.height / 150);
    const backgroundImageDimension = screen.height / numOfRows;
    const numOfCols = Math.ceil(screen.width / backgroundImageDimension) + 1;
    const animationDelayInMileSeconds = (animationTime / numOfCols) * 1000;

    const root = document.documentElement;
    root.style.setProperty("--background-image-dimension", `${backgroundImageDimension}px`);
    root.style.setProperty("--number-of-background-images-per-row", numOfCols);

    const backgroundMovingImages = document.createElement('div');
    backgroundMovingImages.classList.add('background-moving-images');

    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement('div');
        row.classList.add("background-moving-images-row");
        let rndIndex;

        for (let j = 0; j < numOfCols; j++) {
            let rndImg;
            do {
                rndImg = Math.round(Math.random() * (backgroundStudentImages.length - 1));
            } while (rndIndex == rndImg);
            rndIndex = rndImg;
            const image = document.createElement('img');
            image.src = backgroundStudentImages[rndIndex];
            image.alt = "background student image";
            image.classList.add("background-image");
            image.style.left = `${j * backgroundImageDimension}px`;
            image.style.pointerEvents = "none";
            image.style.animation = `backgroundImageScrollLeft ${animationTime}s linear infinite`
            row.appendChild(image);
        }
        backgroundMovingImages.appendChild(row);
    }

    body.appendChild(backgroundMovingImages);

    const rows = document.querySelectorAll(".background-moving-images-row");

    const infiniteScrollToLeftInterval = setInterval(function () {
        rows.forEach((row) => {
            const firstChild = row.firstElementChild;
            row.removeChild(firstChild);
            row.appendChild(firstChild);
            firstChild.style.left = `${(numOfCols - 1) * backgroundImageDimension}px`;
        });

    }, animationDelayInMileSeconds);
}

initialize()