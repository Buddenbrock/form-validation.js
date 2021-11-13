class FormValidation {
    constructor(options = {}) {
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
                disabled: options.recaptcha.status || false,
                class: options.recaptcha.class || "g-recaptcha"
            }
        };

        if (document.querySelector('.' + this.form.classes.formValidation)) {
            this.initValidation();
        }
    }

    /**
     * @desc init validation
     */
    initValidation = () => {

    }
}

new FormValidation();