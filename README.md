![layout][logo-form-validation]

[logo-form-validation]: src/logo.svg

# FormValidation.js
![GitHub licenze](https://img.shields.io/github/license/Buddenbrock/form-validation.js?style=for-the-badge)
![GitHub release](https://img.shields.io/github/package-json/version/Buddenbrock/form-validation.js?style=for-the-badge)
![Last commit](https://img.shields.io/github/last-commit/buddenbrock/form-validation.js?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/Buddenbrock/form-validation.js?style=for-the-badge)

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

### Add script bundle to your footer script block
```html
<script src="./src/form-validation.js"></script>
```

### Add options
Define your options. These given options are defaults.
````javascript
    let formValidation = new FormValidation({
        formValidationClass: "validate", // Define forms for validation
        filedInvalideClass: "invalid", // Add to filed if input is not valid
    
        // field expressions
        emailExp: /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i,
        phoneExp: /^[0-9]{2,5}( )?([0-9]{4,9})$/i,
        passwordExp: /^0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]$/i,
        passwordMinLen: 6,
        passwordMaxLen: 20,
    
        // Google recaptcha
        recaptcha: true, // Enable/Disable validation for google recaptcha
        recaptchaClass: ".g-recaptcha",
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
- regexp
- recaptcha

## Donation
This is free, open-source software. If you'd like to support the development of future projects, or say thanks for this one, you can [donate](https://www.paypal.me/buddenbrock).

## License
GPL-3.0 &copy; [@buddenbrock/form-validation.js](https://github.com/Buddenbrock/form-validation.js/blob/master/LICENSE)