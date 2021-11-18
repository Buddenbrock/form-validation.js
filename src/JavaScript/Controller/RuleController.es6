class RuleController {
    constructor(options = {}) {
      this.form = options;
    }

    /**
     * @desc validate single given field
     * @param input
     * @returns {boolean}
     */
    validateSingleInput = input => {
        let rule = input.dataset["rule"],
          exp,
          inputError = false;

        // let required = input.dataset["required"];
        // @TODO: Add mechanic for checking if field is required or only checked if contains content
        // @TODO: Add expression to all validation types
        // @TODO: Add input:date
        // @TODO: Add input:datetime
        // @TODO: Add input:time
        // @TODO: Add input:month
        // @TODO: Add input:number
        // @TODO: Add input:url
        // @TODO: Add input:file
        // @TODO: Add input:range
        // @TODO: Add input:password
        // @TODO: Add input:password-verification
        // @TODO: Add input:email-verification
        // @TODO: Add input:range

        if (rule !== undefined) {
            [rule, exp] = rule.split(":");

            switch (rule) {
                case "required":
                    inputError = this.ruleRequired(input, exp, inputError);
                    break;

                case "minlen":
                    inputError = this.ruleMinLength(input, exp, inputError);
                    break;

                case "email":
                    inputError = this.ruleEmail(input, exp, inputError);
                    break;

                case "phone":
                    inputError = this.rulePhone(input, exp, inputError);
                    break;

                case "checked":
                    inputError = this.ruleChecked(input, exp, inputError);
                    break;

                case "radio":
                    inputError = this.ruleRadio(input, exp, inputError);
                    break;

                case "selected":
                    inputError = this.ruleSelected(input, exp, inputError);
                    break;

                case "regExp":
                    inputError = this.ruleExp(input, exp, inputError);
                    break;

                case "recaptcha":
                    inputError = this.ruleRequired(input, exp, inputError);
                    break;
            }

            if (inputError) {
                new ErrorController(this.form).showError(input);
            } else {
                new ErrorController(this.form).hideError(input);
            }
        }

        return inputError;
    };

    /**
     * @desc checks given field if value is empty
     * @param input
     * @param exp
     * @param inputError
     * @returns {boolean}
     */
    ruleRequired = (input, exp, inputError) => {
        if (input.value === "") {
            inputError = true;
        }

        return inputError;
    };

    /**
     * @desc checks given field if value matches given min length
     * @param input
     * @param exp
     * @param inputError
     * @returns {boolean}
     */
    ruleMinLength = (input, exp, inputError) => {
        if (input.value.length < parseInt(exp)) {
            inputError = true;
        }

        return inputError;
    };

    /**
     * @desc checks given field if value matches given email regEx
     * @param input
     * @param exp
     * @param inputError
     * @returns {boolean}
     */
    ruleEmail = (input, exp, inputError) => {
        if (!this.form.expression.email.test(input.value)) {
            inputError = true;
        }

        return inputError;
    };

    /**
     * @desc checks given field if value matches given phone number regEx
     * @param input
     * @param exp
     * @param inputError
     * @returns {boolean}
     */
    rulePhone = (input, exp, inputError) => {
        if (input.value.length > 0 && !this.form.expression.phone.test(input.value)) {
            inputError = true;
        }

        return inputError;
    };

    /**
     * @desc checks given field if field is checked
     * @param input
     * @param exp
     * @param inputError
     * @returns {boolean}
     */
    ruleChecked = (input, exp, inputError) => {
        if (!input.checked) {
            inputError = true;
        }

        return inputError;
    };

    /**
     * @desc checks given field if input item selected
     * @param input
     * @param exp
     * @param inputError
     * @returns {boolean}
     */
    ruleRadio = (input, exp, inputError) => {
        let radioGroup = Array.from(
            document.querySelectorAll(`[name="${input.name}"]`)
        );

        inputError = true;
        radioGroup.forEach((radio) => {
            if (radio.checked) {
                inputError = false;
            }
        });

        return inputError;
    };

    /**
     * @desc checks given field if option is selected
     * @param input
     * @param exp
     * @param inputError
     * @returns {boolean}
     */
    ruleSelected = (input, exp, inputError) => {
        let value = input.options[input.selectedIndex].value;

        if (value === "") {
            inputError = true;
        }

        return inputError;
    };

    /**
     * @desc checks given field if value matches given RegEx
     * @param input
     * @param exp
     * @param inputError
     * @returns {boolean}
     */
    ruleExp = (input, exp, inputError) => {
        exp = new RegExp(exp);

        if (!exp.test(input.value)) {
            inputError = true;
        }

        return inputError;
    };
}
