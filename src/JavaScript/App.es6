class FormValidation {
    constructor(options = {}) {
        if (!options.classes) { options.classes = {} }
        if (!options.expression) { options.expression = {} }
        if (!options.expression.password) { options.expression.password = {} }
        if (!options.recaptcha) { options.recaptcha = {} }
        if (!options.friendlyCaptcha) { options.friendlyCaptcha = {} }

        /**
         * @type {{friendlyCaptcha: {inputClassName: string, disabled: boolean, class: string}, expression: {password: {passwordMinLen: number, passwordMaxLen: number, passwordExp: RegExp}, phone: RegExp, email: RegExp}, classes: {invalidField: string, hideError: string, fieldWrapper: string, error: string, formValidation: string}, errorFallbackMessage: string, recaptcha: {disabled: boolean, class: string}}}
         */
        this.form = {
            // class settings
            classes: {
                formValidation: options.classes.formValidation || "validate",
                invalidField: options.classes.invalidField || "invalid",
                fieldWrapper: options.classes.fieldWrapper || "form-group",
                error: options.classes.error || "error",
                hideError: options.classes.hideError || "d-none",
            },

            // error messages
            errorFallbackMessage: options.errorFallbackMessage || "Please check this field",

            // field expressions
            expression: {
                email: options.expression.email || /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i,
                phone: options.expression.phone || /^[0-9]{2,5}( )?([0-9]{4,9})$/i,
                password: {
                    passwordExp: options.expression.password.passwordExp || /^0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]$/i,
                    passwordMinLen: options.expression.password.passwordMinLen || 6,
                    passwordMaxLen: options.expression.password.passwordMaxLen || 20,
                },
            },

            // google recaptcha
            recaptcha: {
                disabled: options.recaptcha.disabled || true,
                className: options.recaptcha.className || "g-recaptcha"
            },

            // friendly captcha
            friendlyCaptcha: {
                disabled: options.friendlyCaptcha.disabled || true,
                className: options.friendlyCaptcha.className || "frc-captcha",
                inputClassName: options.friendlyCaptcha.inputClassName || "frc-captcha-solution"
            }
        }

        if (!this.form.friendlyCaptcha.disabled) {
            if (document.querySelector('.' + this.form.classes.formValidation)) {
                setTimeout(() => {
                    this.initValidation();
                }, 1000);
            }
        } else {
            this.initValidation();
        }
    }

    /**
     * @desc init validation
     */
    initValidation = () => {
        /**
         * @desc get form element
         */
        this.form.element = new HelperController(this.form).getForm();

        /**
         * @desc get all input fields
         */
        this.form.inputs = new HelperController(this.form).getInputFields();

        /**
         * @desc get form submit button
         */
        this.form.submitButton = new HelperController(this.form).getSubmitButton();

        /**
         * @desc validate input fields on form submit
         */
        this.form.element.addEventListener("submit", new SubmitController(this.form).formSubmit.bind(this));

        /**
         * @desc init google recaptcha
         */
        if (!this.form.recaptcha.disabled && document.querySelector('.' + this.form.recaptcha.className)) {
            new RecaptchaController(this.form).initRecaptcha();
        }

        /**
         * @desc init friendly captche
         */
        if (!this.form.friendlyCaptcha.disabled && document.querySelector('.' + this.form.friendlyCaptcha.className)) {
            new FriendlyCaptchaController(this.form).initFriendlyCaptcha();
        }

        /**
         * @desc triggers validation on given events
         */
        let inputEventListenerTypes = ["blur", "change", "keyup"];
        Array.from(this.form.inputs).forEach((input) => {
            inputEventListenerTypes.forEach((type) => {
                input.addEventListener(type, this.validateOnChange.bind(this));
            });
        });
    };

    /**
     * @desc triggers field validation of given field
     * @param event
     */
    validateOnChange = event => {
        new RuleController(this.form).validateSingleInput(event.target);
    };
}
