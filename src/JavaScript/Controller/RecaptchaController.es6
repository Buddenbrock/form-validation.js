class RecaptchaController {
    /**
     * @param options
     */
    constructor(options = {}) {
        this.form = options;
    }

    /**
     * @desc init recaptcha validation
     */
    initRecaptcha = () => {
        window.grecaptcha.ready(() => {
            this.recaptcha = this.form.element.querySelector('.' + this.form.recaptcha.className);

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
     * @desc get recaptcha field
     * @returns {HTMLElement}
     */
    getRecaptchaField = () => {
        let field,
            recaptchaElement = this.form.element.querySelector('.' + this.form.recaptcha.className);

        if (recaptchaElement) {
            field = document.getElementById(recaptchaElement.dataset["fieldId"]);
        }

        return field;
    };
}
