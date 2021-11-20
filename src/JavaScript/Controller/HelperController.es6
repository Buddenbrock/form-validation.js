class HelperController {
    /**
     * @param options
     */
    constructor(options = {}) {
        this.form = options;
    }

    /**
     * @desc get form element
     * @returns {Element}
     */
    getForm = () => {
        return document.querySelector('.' + this.form.classes.formValidation);
    }

    /**
     * @desc get input fields
     * @returns {NodeListOf<HTMLElementTagNameMap[string]> | NodeListOf<Element> | NodeListOf<SVGElementTagNameMap[string]>}
     */
    getInputFields = () => {
        return this.form.element.querySelectorAll('input, textarea, select');
    }

    /**
     * @desc get submit button
     * @returns {any}
     */
    getSubmitButton = () => {
        return this.form.element.querySelector('button[type="submit"]');
    };

    /**
     * @desc get fieldset of given field
     * @param input
     * @returns {HTMLElement}
     */
    getFieldset = input => {
        let fieldset = input.parentElement;

        while (!fieldset.classList.contains(this.form.classes.fieldWrapper)) {
            fieldset = fieldset.parentElement;
        }

        return fieldset;
    };

    /**
     * @desc helper func for insert element after given element
     * @param newNode
     * @param existingNode
     */
    insertAfter = (newNode, existingNode) => {
        existingNode.parentNode.append(newNode);
    }

    /**
     * @desc add class on given element
     * @param element
     * @param classValue
     */
    addClassOnElement = (element, classValue) => {
        element.classList.add(classValue);
    };

    /**
     * @desc remove class on given element
     * @param element
     * @param classValue
     */
    removeClassOnElement = (element, classValue) => {
        element.classList.remove(classValue);
    };
}
