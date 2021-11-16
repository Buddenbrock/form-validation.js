class HelperController {
    constructor(options = {}) {
        this.form = options;
    }

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
