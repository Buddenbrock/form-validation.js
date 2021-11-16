![layout][logo-form-validation]

[logo-form-validation]: src/Images/logo.svg

# FormValidation.js
![GitHub licenze](https://img.shields.io/github/license/buddenbrock/form-validation.js?style=for-the-badge)
![GitHub release](https://img.shields.io/github/package-json/version/buddenbrock/form-validation.js?style=for-the-badge)
![Last commit](https://img.shields.io/github/last-commit/buddenbrock/form-validation.js?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/buddenbrock/form-validation.js?style=for-the-badge)

Javascript for adding a frontend form validation

## Installation
### Using npm
```sh
npm -i @buddenbrock/form-validation.js --save
```

### Using yarn
```sh
yarn add @buddenbrock/form-validation.js
```

## How to use
Take a look at the small example in the demo folder

### Add script bundle to your footer script block

```html

<script src="node_modules/@buddenbrock/form-validation.js/public/JavaScript/formValidation.min.js"></script>
```

### Add options
Define your options. These given options are defaults.
````javascript
    let formValidation = new FormValidation({
        // class settings
        classes: {
            formValidation: "validate", // Define forms whitch shoul validate
            invalidField: "invalid",  // Add to fieled if input is not valid
            fieldWrapper: "form-group", // Add input wrapper class
            error: "error", // Add error message class
            hideError: "d-none", // Class for hiding error message
        },

        // error messages
        errorFallbackMessage: "Please check this field",

        // field expressions
        expression: {
            email: /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i,
            phone: /^[0-9]{2,5}( )?([0-9]{4,9})$/i,
            password: {
                passwordExp: /^0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]$/i,
                passwordMinLen: 6,
                passwordMaxLen: 20,
            },
        },

        // google recaptcha
        recaptcha: {
            disabled: false, // Enable/Disable validation for google recaptcha
            class: "g-recaptcha",
        }
    });
````

### Options for data-rule
- required
- minlen
- email
- phone
- checked
- radio
- selected
- regExp
- recaptcha

### DOM-Syntax of input fields
<!-- @TODO: Add dom syntax -->
<!-- @TODO: Add infos for using TYPO3-EXT:recaptcha -->

For DOM syntax of fields take a look into demo page

## Donation
This is free, open-source software. If you'd like to support the development of future projects, or say thanks for this one, you can [donate](https://www.paypal.me/buddenbrock).

## License
GPL-3.0 &copy; [@buddenbrock/form-validation.js](https://github.com/Buddenbrock/form-validation.js/blob/master/LICENSE)
