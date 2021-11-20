class ErrorController {
    /**
     * @param options
     */
    constructor(options = {}) {
        this.form = options;
    }

    /**
     * @desc get error message wrapper inside given fieldset
     * @param fieldset
     * @returns {any}
     */
    getError = fieldset => {
        return fieldset.querySelector("." + this.form.classes.error);
    };

    /**
     * @desc create error field
     * @param input
     * @returns {HTMLDivElement}
     */
    createError = input => {
        let error = document.createElement("div");

        error.className = this.form.classes.error;
        error.setAttribute("role", "alert");
        error.innerText =
            input.dataset["msg"] !== undefined ? input.dataset["msg"] : this.form.errorFallbackMessage;

        return error;
    };

    /**
     * @desc insert error field inside fieldset
     * @param input
     * @param error
     */
    insertError = (input, error) => {
        let element = input,
            checkbox = input.dataset["rule"] === "checked",
            radio = input.dataset["rule"] === "radio",
            requiredBox = input.dataset["rule"] === "required",
            recaptcha = input.dataset["rule"] === "recaptcha",

        if (input.nextElementSibling) {
            if (checkbox || radio) {
                element = input.parentElement;
            } else if (requiredBox || recaptcha) {
                element = input.nextElementSibling;
            }
        }

        new HelperController(this.form).insertAfter(error, element);
    };

    /**
     * @desc show error message for given field
     * @param input
     */
    showError = input => {
        let fieldset = new HelperController(this.form).getFieldset(input),
            error = this.getError(fieldset);

        new HelperController(this.form).addClassOnElement(fieldset, this.form.classes.invalidField);

        if (error !== undefined && error !== null) {
            new HelperController(this.form).removeClassOnElement(error, this.form.classes.hideError);
        } else {
            error = this.createError(input);
            this.insertError(input, error);
        }
    };

    /**
     * @desc hide error message for given field
     * @param input
     */
    hideError = input => {
        let fieldset = new HelperController(this.form).getFieldset(input),
            error = this.getError(fieldset);

        new HelperController(this.form).removeClassOnElement(fieldset, this.form.classes.invalidField);

        if (error !== undefined && error !== null) {
            new HelperController(this.form).removeClassOnElement(error, this.form.classes.hideError);
            new HelperController(this.form).addClassOnElement(error, this.form.classes.hideError);
        }
    };
}
