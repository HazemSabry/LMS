function firstCardGoBackBtn() {
    const firstCardGoBackBtn = document.getElementById("first-card-go-back-btn");
    if (document.body.contains(firstCardGoBackBtn)) {
        firstCardGoBackBtnAction();
    }
}

function nextBtnCard() {
    const nextBtnsCards = document.querySelectorAll("[next-btn]");
    if (nextBtnsCards.length > 0) {
        nextBtnCardAction();
    }
}

function backBtnCard() {
    const backBtnsCards = document.querySelectorAll("[back-btn]");
    if (backBtnsCards.length > 0) {
        backBtnCardAction();
    }
}

function togglePasswordVisibilityBtn() {
    const togglePasswordVisibilityBtn = document.getElementById("eye-icon-container-password");
    if (document.body.contains(togglePasswordVisibilityBtn)) {
        const passwordInput = document.getElementById("student-password");
        togglePasswordVisibility(togglePasswordVisibilityBtn, passwordInput);
    }
}

function toggleSurePasswordVisibilityBtn() {
    const togglePasswordVisibilityBtn = document.getElementById("eye-icon-container-sure-password");
    if (document.body.contains(togglePasswordVisibilityBtn)) {
        const passwordInput = document.getElementById("student-sure-password");
        togglePasswordVisibility(togglePasswordVisibilityBtn, passwordInput);
    }
}

function forgetPasswordBtn() {
    const forgetPasswordBtn = document.getElementById("forget-password-btn");
    if (document.body.contains(forgetPasswordBtn)) {
        forgetPasswordBtnAction();
    }
}

function goToOTPPageBtn() {
    const goToOTPPageBtn = document.getElementById("go-to-OTP-page-btn");
    if (document.body.contains(goToOTPPageBtn)) {
        goToOTPPageBtn.addEventListener("click", () => {
            window.location.href = "OTPPage.html";
        })
    }
}

function OTPAutoChangeInputOnPress() {
    const OTPInputContainer = document.getElementById("OTP-input-container");
    if (document.body.contains(OTPInputContainer)) {
        const elsInput = [...OTPInputContainer.children];
        const len = elsInput.length;

        const handlePaste = (ev) => {
            const clip = ev.clipboardData.getData('text');     // Get clipboard data
            const pin = clip.replace(/\s|-/g, "");             // Sanitize string
            const ch = [...pin];                               // Create array of chars
            elsInput.forEach((el, i) => el.value = ch[i] ?? ""); // Populate inputs
            elsInput[Math.min(len, pin.length) - 1]?.focus();  // Focus input
        };

        const handleInput = (ev) => {
            const elInp = ev.currentTarget;
            const i = elsInput.indexOf(elInp);
            if (elInp.value && (i + 1) % len) elsInput[i + 1]?.focus();  // focus next
        };

        const handleKeyDn = (ev) => {
            const elInp = ev.currentTarget
            const i = elsInput.indexOf(elInp);
            if (!elInp.value && ev.key === "Backspace" && i) elsInput[i - 1]?.focus(); // Focus previous
        };

        elsInput.forEach(elInp => {
            elInp.addEventListener("paste", handlePaste);   // Handle pasting
            elInp.addEventListener("input", handleInput);   // Handle typing
            elInp.addEventListener("keydown", handleKeyDn); // Handle deleting
        });
    }
}

createAccountOrLoginScreenResize();
firstCardGoBackBtn();
mobileGoBackBtnAction();
nextBtnCard();
backBtnCard();
createAccountOrLoginBtnCardSubmitForm();
saveInputValueToSession();
getInputValueFromSession();
togglePasswordVisibilityBtn();
toggleSurePasswordVisibilityBtn();
forgetPasswordBtn();
goToOTPPageBtn();
OTPAutoChangeInputOnPress();