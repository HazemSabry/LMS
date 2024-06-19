/**
 * @author Hazem Sabry 
 * @gmail hazemsabry2002@gmail.com
 * @class Deposit
 * @description This class handles the deposit OTP input and the selection of the teacher.
 * It also manages the auto-change of input fields when the user pastes an OTP or types it manually.
 * It also handles the focus movement between input fields.
 */
class Deposit {
    /**
     * @type {HTMLElement} - The deposit OTP Input Container element.
     */
    depositOTPInputContainer;
    /**
     * @type {HTMLElement} - The select teacher element.
     */
    selectTeacher;
    /**
     * @type {HTMLElement} - The card header element.
     */
    cardHeader;
    /**
     * @type {HTMLElement} - The warning message element.
     */
    warningMessage;

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Creates an instance.
     */
    constructor() {
        this.depositOTPInputContainer = document.getElementById("deposit-OTP-input-container");
        this.selectTeacher = document.getElementById("select-teacher");
        this.cardHeader = document.getElementById("card-header");
        this.warningMessage = document.getElementById("warning-message");
    }

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * This function is responsible for handling the auto-change of input fields 
     * when the user pastes an OTP or types it manually.
     * It also handles the focus movement between input fields.
     */
    depositOTPAutoChangeInputOnPress() {
        /**
         * @type {HTMLElement[]} - Array of input elements for the OTP.
         */
        const elsInput = [...this.depositOTPInputContainer.children];
        /**
         * @type {number} - The total number of input fields.
         */
        const len = elsInput.length;

        /**
         * @param {ClipboardEvent} ev - The paste event.
         * @returns {void}
         */
        const handlePaste = (ev) => {
            const clip = ev.clipboardData.getData('text');     // Get clipboard data
            const pin = clip.replace(/\s|-/g, "");             // Sanitize string
            const ch = [...pin];                               // Create array of chars
            let counter = 0;
            elsInput.forEach((el, i) => {
                for (let index = 0; index < 5; index++) {
                    el.value += ch[counter++] ?? ""
                }
            }); // Populate inputs
            elsInput[Math.min(len, pin.length) - 1]?.focus();  // Focus input
        };

        /**
         * @param {InputEvent} ev - The input event.
         * @returns {void}
         */
        const handleInput = (ev) => {
            const elInp = ev.currentTarget;
            const i = elsInput.indexOf(elInp);
            if (elInp.value.length === 5 && (i + 1) % len) elsInput[i + 1]?.focus();  // focus next
        };

        /**
         * @param {KeyboardEvent} ev - The keydown event.
         * @returns {void}
         */
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

    /**
     * @author Hazem Sabry 
     * @gmail hazemsabry2002@gmail.com
     * Changes the displayed teacher name in the card header and warning message elements based on the selected teacher.
     */
    changeTeacherName() {
        const teacherName = this.selectTeacher.value;
        const cardHeaderTeacherName = this.cardHeader.querySelector("span");
        const warningMessageTeacherName = this.warningMessage.querySelector("span");

        /**
         * Updates the displayed teacher name in the card header and warning message elements.
         */
        cardHeaderTeacherName.textContent = teacherName;
        warningMessageTeacherName.textContent = teacherName;

        /**
         * Adds an event listener to the select teacher element to update the displayed teacher name when the selection changes.
         * @param {Event} e - The change event.
         */
        this.selectTeacher.addEventListener("change", (e) => {
            cardHeaderTeacherName.textContent = "/ " + e.target.value;
            warningMessageTeacherName.textContent = e.target.value;
        })
    }
}

const deposit = new Deposit();

deposit.depositOTPAutoChangeInputOnPress();
deposit.changeTeacherName();