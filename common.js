const root = document.documentElement;
const html = document.documentElement;
const errorColor = getComputedStyle(root).getPropertyValue("--error-color");
const btnColor = getComputedStyle(root).getPropertyValue(
    "--next-btn-background-color"
);
const MAX_MOBILE_SCREEN_WIDTH = 950;
const language = html.getAttribute("lang");

function initialize() {
    const screenHightScale = screen.height / 1050;
    const screenWidthScale = screen.width / 1680;
    const screenScale =
        screenWidthScale > screenHightScale ? screenWidthScale : screenHightScale;
    root.style.setProperty("--screen-scale", screenScale);

    if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
        html.style.fontSize = "16px";
    }
}

function createBackgroundMovingImages() {
    const body = document.body;
    body.style.maxHeight = "100vh";
    body.style.overflow = "hidden";

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
    root.style.setProperty(
        "--background-image-dimension",
        `${backgroundImageDimension}px`
    );
    root.style.setProperty("--number-of-background-images-per-row", numOfCols);

    const backgroundMovingImages = document.createElement("div");
    backgroundMovingImages.classList.add("background-moving-images");

    for (let i = 0; i < numOfRows; i++) {
        const row = document.createElement("div");
        row.classList.add("background-moving-images-row");
        let rndIndex;

        for (let j = 0; j < numOfCols; j++) {
            let rndImg;
            do {
                rndImg = Math.round(
                    Math.random() * (backgroundStudentImages.length - 1)
                );
            } while (rndIndex == rndImg);
            rndIndex = rndImg;
            const image = document.createElement("img");
            image.src = backgroundStudentImages[rndIndex];
            image.alt = "background student image";
            image.classList.add("background-image");
            image.style.left = `${j * backgroundImageDimension}px`;
            image.style.pointerEvents = "none";
            image.style.animation = `backgroundImageScrollLeft ${animationTime}s linear infinite`;
            image.setAttribute("background-moving-image", "");
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

function mobileGoBackBtnAction() {
    if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
        const mobileGoBackBtn = document.getElementById("mobile-go-back-btn");
        mobileGoBackBtn.addEventListener("click", () => {
            window.history.back();
        });
    }
}

function firstCardGoBackBtnAction() {
    const firstCardGoBackBtn = document.getElementById("first-card-go-back-btn");
    firstCardGoBackBtn.addEventListener("click", () => {
        window.history.back();
    });
}

function nextBtnCardAction() {
    const nextBtnsCards = document.querySelectorAll("[next-btn]");
    const createAccountOrLoginCardsContainer = document.getElementById(
        "create-account-or-login-cards-container"
    );
    const createAccountOrLoginCardContainers = document.querySelectorAll(
        ".create-account-or-login-card-container"
    );
    nextBtnsCards.forEach((nextBtnCard) => {
        nextBtnCard.addEventListener("click", (e) => {
            e.preventDefault();
            const scrollLength = createAccountOrLoginCardContainers[0].offsetWidth;

            createAccountOrLoginCardsContainer.scrollBy({
                top: 0,
                left: -1 * scrollLength,
                behavior: "smooth",
            });
        });
    });
}

function backBtnCardAction() {
    const backBtnsCards = document.querySelectorAll("[back-btn]");
    const createAccountOrLoginCardsContainer = document.getElementById(
        "create-account-or-login-cards-container"
    );
    const createAccountOrLoginCardContainers = document.querySelectorAll(
        ".create-account-or-login-card-container"
    );
    backBtnsCards.forEach((backBtnCard) => {
        backBtnCard.addEventListener("click", (e) => {
            e.preventDefault();
            const scrollLength = createAccountOrLoginCardContainers[0].offsetWidth;

            createAccountOrLoginCardsContainer.scrollBy({
                top: 0,
                left: scrollLength,
                behavior: "smooth",
            });
        });
    });
}

function createAccountOrLoginBtnCardSubmitForm() {
    const createAccountOrLoginSubmitBtn = document.getElementById(
        "create-account-or-login-submit-btn"
    );
    const createAccountOrLoginCardsContainer = document.getElementById(
        "create-account-or-login-cards-container"
    );
    const createAccountOrLoginCardContainers = document.querySelectorAll(
        ".create-account-or-login-card-container"
    );

    createAccountOrLoginSubmitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        for (let i = 0; i < createAccountOrLoginCardContainers.length; i++) {
            const inputs =
                createAccountOrLoginCardContainers[i].querySelectorAll("[form-input]");
            for (let j = 0; j < inputs.length; j++) {
                if (
                    inputs[j].value.trim() === "" ||
                    (inputs[j].getAttribute("type") === "gmail" &&
                        !inputs[j].value.includes("@"))
                ) {
                    inputs[j].style.boxShadow = `0 2px 0 0  ${errorColor}`;
                    const scrollLength =
                        createAccountOrLoginCardContainers[i].offsetWidth *
                        (createAccountOrLoginCardContainers.length - 1 - i);
                    createAccountOrLoginCardsContainer.scrollBy({
                        top: 0,
                        left: scrollLength,
                        behavior: "smooth",
                    });
                    return;
                } else if (inputs[j].type === "checkbox" && !inputs[j].checked) {
                    inputs[
                        j
                    ].style.boxShadow = `${errorColor} 0px 1px 4px, ${errorColor} 0px 0px 0px 3px`;
                } else if (!(inputs[j].type === "checkbox")) {
                    inputs[j].style.boxShadow = `0 1px 0 0  #000`;
                    inputs[j].addEventListener("focus", () => {
                        inputs[j].style.boxShadow = `0 2px 0 0  ${btnColor}`;
                    });
                    inputs[j].addEventListener("focus", () => {
                        inputs[j].style.boxShadow = `0 2px 0 0  ${btnColor}`;
                    });
                    inputs[j].addEventListener("blur", () => {
                        inputs[j].style.boxShadow = `0 1px 0 0  #000`;
                    });
                } else {
                    inputs[j].style.boxShadow = `0 0 0 0  #fff`;
                }
            }
        }

        const passwordInput = document.getElementById("student-password");
        const surePasswordInput = document.getElementById("student-sure-password");
        if (document.body.contains(surePasswordInput)) {
            if (passwordInput.value !== surePasswordInput.value) {
                surePasswordInput.style.boxShadow = `0 2px 0 0  ${errorColor}`;
            }
        }
    });
}

function createAccountOrLoginScreenResize() {
    const pageHeader = document.getElementById("page-header");
    const createAccountOrLoginCardsContainer = document.getElementById(
        "create-account-or-login-cards-container"
    );
    const createAccountOrLoginCardContainers = document.querySelectorAll(
        ".create-account-or-login-card-container"
    );
    const backgroundColor =
        getComputedStyle(root).getPropertyValue("--background-color");

    if (screen.width > MAX_MOBILE_SCREEN_WIDTH) {
        //createBackgroundMovingImages();
        createAccountOrLoginCardsContainer.style.zIndex = "99999";
        createAccountOrLoginCardContainers.forEach(
            (createAccountOrLoginCardContainer) => {
                createAccountOrLoginCardContainer.style.zIndex = "99999";
            }
        );

        document.addEventListener("visibilitychange", () => {
            const body = document.body;
            if (document.visibilityState === "visible") {
                // const backgroundMovingImages = document.querySelector(
                //     ".background-moving-images"
                // );
                // body.removeChild(backgroundMovingImages);
                // createBackgroundMovingImages();
            }
        });
    }

    if (screen.width < MAX_MOBILE_SCREEN_WIDTH) {
        pageHeader.style.display = "block";

        createAccountOrLoginCardContainers.forEach(
            (createAccountOrLoginCardContainer) => {
                createAccountOrLoginCardContainer.style.backgroundColor =
                    backgroundColor;
                createAccountOrLoginCardContainer.style.alignItems = "flex-start";
                createAccountOrLoginCardContainer.style.paddingTop = "3rem";
            }
        );
    }
}

function saveInputValueToSession() {
    const inputs = document.querySelectorAll("input");
    const selects = document.querySelectorAll("select");

    inputs.forEach((input) => {
        input.addEventListener("blur", (e) => {
            sessionStorage.setItem(
                `form input name=${e.target.name}`,
                e.target.value
            );
        });
    });

    selects.forEach((select) => {
        select.addEventListener("blur", (e) => {
            sessionStorage.setItem(
                `form select name=${e.target.name}`,
                e.target.value
            );
        });
    });
}

function getInputValueFromSession() {
    const inputs = document.querySelectorAll("input");
    const selects = document.querySelectorAll("select");

    inputs.forEach((input) => {
        input.value = sessionStorage.getItem(`form input name=${input.name}`);
    });

    selects.forEach((select) => {
        select.value = sessionStorage.getItem(`form select name=${select.name}`);
    });
}

function togglePasswordVisibility(togglePasswordVisibilityBtn, passwordInput) {

    togglePasswordVisibilityBtn.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordVisibilityBtn.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="icon">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
        } else {
            passwordInput.type = "password";

            togglePasswordVisibilityBtn.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="icon">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M4.4955 7.44088C3.54724 8.11787 2.77843 8.84176 2.1893 9.47978C0.857392 10.9222 0.857393 13.0778 2.1893 14.5202C3.9167 16.391 7.18879 19 12 19C13.2958 19 14.4799 18.8108 15.5523 18.4977L13.8895 16.8349C13.2936 16.9409 12.6638 17 12 17C7.9669 17 5.18832 14.82 3.65868 13.1634C3.03426 12.4872 3.03426 11.5128 3.65868 10.8366C4.23754 10.2097 4.99526 9.50784 5.93214 8.87753L4.4955 7.44088Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M8.53299 11.4784C8.50756 11.6486 8.49439 11.8227 8.49439 12C8.49439 13.933 10.0614 15.5 11.9944 15.5C12.1716 15.5 12.3458 15.4868 12.516 15.4614L8.53299 11.4784Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M15.4661 12.4471L11.5473 8.52829C11.6937 8.50962 11.8429 8.5 11.9944 8.5C13.9274 8.5 15.4944 10.067 15.4944 12C15.4944 12.1515 15.4848 12.3007 15.4661 12.4471Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M18.1118 15.0928C19.0284 14.4702 19.7715 13.7805 20.3413 13.1634C20.9657 12.4872 20.9657 11.5128 20.3413 10.8366C18.8117 9.18002 16.0331 7 12 7C11.3594 7 10.7505 7.05499 10.1732 7.15415L8.50483 5.48582C9.5621 5.1826 10.7272 5 12 5C16.8112 5 20.0833 7.60905 21.8107 9.47978C23.1426 10.9222 23.1426 13.0778 21.8107 14.5202C21.2305 15.1486 20.476 15.8603 19.5474 16.5284L18.1118 15.0928Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M2.00789 3.42207C1.61736 3.03155 1.61736 2.39838 2.00789 2.00786C2.39841 1.61733 3.03158 1.61733 3.4221 2.00786L22.0004 20.5862C22.391 20.9767 22.391 21.6099 22.0004 22.0004C21.6099 22.3909 20.9767 22.3909 20.5862 22.0004L2.00789 3.42207Z"
                                            fill="#000000"></path>
                                    </g>
                                </svg>`;
        }
    });
}

function forgetPasswordBtnAction() {
    const forgetPasswordBtn = document.getElementById("forget-password-btn");
    forgetPasswordBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "ForgetPasswordPage.html";
    });
}



initialize();
