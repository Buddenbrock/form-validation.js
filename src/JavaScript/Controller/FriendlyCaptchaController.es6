class FriendlyCaptchaController {
    /**
     * @param options
     */
    constructor(options = {}) {
        this.form = options;
    }

    /**
     * @desc init friendlycaptcha validation
     */
    initFriendlyCaptcha = () => {
        this.friendlyCaptcha = this.form.element.querySelector('.' + this.form.friendlyCaptcha.className);

        if (this.friendlyCaptcha) {
            this.friendlyCaptchaWidget = new friendlyChallenge.WidgetInstance(this.friendlyCaptcha, {
                doneCallback: this.checkCaptureValue,
                errorCallback: this.checkCaptureValue
            });
        }
    }

    /**
     * @desc check value
     */
    checkCaptureValue = () => {
        let input = this.getFriendlyCaptchaField();

        input.dataset['rule'] = 'friendlyCaptcha';
        new RuleController(this.form).validateSingleInput(input);
    }

    /**
     * @desc get captcha field
     * @returns {HTMLElement}
     */
    getFriendlyCaptchaField = () => {
        let field,
            recaptchaElement = this.form.element.querySelector('.' + this.form.friendlyCaptcha.className);

        if (recaptchaElement) {
            field = this.friendlyCaptcha.querySelector('.' + this.form.friendlyCaptcha.inputClassName);
        }

        return field;
    }
}
