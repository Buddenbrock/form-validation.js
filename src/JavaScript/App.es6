class FormValidation {
    constructor(options = {}) {
        if(!options.classes) { options.classes = {} }
        if(!options.expression) { options.expression = {} }
        if(!options.expression.password) { options.expression.password = {} }
        if(!options.recaptcha) { options.recaptcha = {} }

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
                disabled: options.recaptcha.disabled || false,
                class: options.recaptcha.class || "g-recaptcha"
            }
        }

        if (document.querySelector('.' + this.form.classes.formValidation)) {
            this.initValidation();
        }
    }

    /**
     * @desc init validation
     */
    initValidation = () => {
        let inputEventListenerTypes = ["blur", "change", "keyup"];

        this.form.element = document.querySelector('.' + this.form.classes.formValidation);
        this.form.inputs = this.form.element.querySelectorAll('input, textarea, select');

        this.getSubmitButton();
        this.form.element.addEventListener("submit", this.formSubmit.bind(this));

        if(!this.form.recaptcha.disabled && document.querySelector('.' + this.form.recaptcha.class)) {
            this.initializeRecaptcha();
        }

        Array.from(this.form.inputs).forEach((input) => {
            inputEventListenerTypes.forEach((type) => {
                input.addEventListener(type, this.validateOnChange.bind(this));
            });
        });
    };

    /**
     * @desc get submit button
     */
    getSubmitButton = () => {
        this.form.submitButton = this.form.element.querySelector('button[type="submit"]');
    };

    /**
     * @desc stops submit process focus first error field
     * @param event
     */
    formSubmit = event => {
        if (!this.validateFormData()) {
            event.preventDefault();
            this.focusFirstErrorField();
        }
    };

    /**
     * @desc focused first field with error
     */
    focusFirstErrorField = () => {
        let formError = false;

        for (let i = 0; i < this.form.inputs.length; i++) {
            if (new RuleController(this.form).validateSingleInput(this.form.inputs[i]) || formError) {
                this.form.inputs[i].focus();
                break;
            }
        }
    };

    /**
     * @desc triggers field validation for every field
     * @returns {boolean}
     */
    validateFormData = () => {
        let formError = false;

        Array.from(this.form.inputs).forEach((input) => {
            formError = new RuleController(this.form).validateSingleInput(input) || formError;
        });

        return !formError;
    };

    /**
     * @desc triggers field validation of given field
     * @param event
     */
    validateOnChange = event => {
        new RuleController(this.form).validateSingleInput(event.target);
    };





    /**
     * @desc init recaptcha validation
     */
    initializeRecaptcha = () => {
        window.grecaptcha.ready(() => {
            this.recaptcha = this.form.element.querySelector('.' + this.form.recaptcha.class);

            if (this.recaptcha) {
                if (this.recaptcha.childElementCount === 0) {
                    window.grecaptcha.render(this.recaptcha, this.recaptcha.dataset);
                }

                window.recaptchaCallback = this.setCaptchaValue.bind(this);
                window.recaptchaExpiredCallback = this.unsetCaptchaValue.bind(this);
            }
        });
    };

    /**
     * @desc set capture value
     */
    setCaptchaValue = () => {
        let input = this.getRecaptchaField();

        if (input) {
            input.value = "1";
        }

        new RuleController(this.form).validateSingleInput(input);
    };

    /**
     * @desc unset capture value
     */
    unsetCaptchaValue = () => {
        let input = this.getRecaptchaField();

        if (input) {
            input.value = "";
        }

        new RuleController(this.form).validateSingleInput(input);
    };

    /**
     * @desc get recaptcha filed
     * @returns {HTMLElement}
     */
    getRecaptchaField = () => {
        let field,
        recaptchaElement = this.form.element.querySelector('.' + this.form.recaptcha.class);

        if (recaptchaElement) {
            field = document.getElementById(recaptchaElement.dataset["fieldId"]);
        }

        return field;
    };
}
