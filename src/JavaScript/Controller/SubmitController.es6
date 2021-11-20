class SubmitController {
    /**
     * @param options
     */
    constructor(options = {}) {
        this.form = options;
    }

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
}
