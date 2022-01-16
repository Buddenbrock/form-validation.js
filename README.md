# @buddenbrock/form-validation.js
![GitHub licenze](https://img.shields.io/github/license/buddenbrock/form-validation.js?style=for-the-badge)
![GitHub release](https://img.shields.io/github/package-json/version/buddenbrock/form-validation.js?style=for-the-badge)
![Last commit](https://img.shields.io/github/last-commit/buddenbrock/form-validation.js?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/buddenbrock/form-validation.js?style=for-the-badge)

JavaScript for adding a frontend form validation

## How to install
### Add package
#### Using npm
```sh
npm -i @buddenbrock/form-validation.js --save
```

#### Using yarn
```sh
yarn add @buddenbrock/form-validation.js
```

### Add script bundle to your footer script block
#### Using NPM or Yarn
```html
<script src="./public/JavaScript/formValidation.min.js"></script>
```

#### Using CDN
```html
<script src="https://unpkg.com/@buddenbrock/ad-lightbox.js@0.1.2/public/JavaScript/formValidation.min.js"></script>
```

## How to use
### Add options
Defining your options by adding settings array to class init. These options are supported. Not redefined options will be set by default values.

#### Settings

| Property                              | Description                                                  | Options | Default                                                                                 |
|:--------------------------------------|:-------------------------------------------------------------|:--------|:----------------------------------------------------------------------------------------|
| `classes.formValidation`              | define forms which should validate                           | string  | validate                                                                                |
| `classes.invalidField`                | add to field if input is not valid                           | string  | invalid                                                                                 |
| `classes.fieldWrapper`                | add input wrapper class                                      | string  | form-group                                                                              |
| `classes.error`                       | add error message class                                      | string  | error                                                                                   |
| `classes.hideError`                   | class for hiding error message                               | string  | d-none                                                                                  |
| `errorFallbackMessage`                | fallback error message if not defined in dom                 | string  | Please check this field                                                                 |
| `expression.email`                    | validation expression for email fields                       | regEx   | /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i                                              |
| `expression.phone`                    | validation expression for phone number fields                | regEx   | /^[0-9]{2,5}( )?([0-9]{4,9})$/i                                                         |
| `expression.password.passwordExp`     | validation expression for password fields (not in use)       | regEx   | /^0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]$/i |
| `expression.password.passwordMinLen`  | min length of valid password in pasword fileds (not in use)  | int     | 6                                                                                       |
| `expression.password.passwordMaxLen`  | max length of valid password in pasword fileds (not in use)  | int     | 20                                                                                      |
| `recaptcha.disabled`                  | enable od disable validation for google recaptcha            | boolean | true                                                                                    |
| `recaptcha.className`                 | class name of google recaptcha wrapper                       | string  | g-recaptcha                                                                             |
| `friendlyCaptcha.disabled`            | enable od disable validation for friendly captcha            | boolean | true                                                                                    |
| `friendlyCaptcha.className`           | class name of friendly captcha wrapper                       | string  | frc-captcha                                                                             |
| `friendlyCaptcha.inputClassName`      | class name of friendly captcha input field                   | string  | frc-captcha-solution                                                                    |

### Example
````javascript
    let formValidation = new FormValidation({
        // class settings
        classes: {
            formValidation: "validate",
            invalidField: "invalid",
            fieldWrapper: "form-group",
            error: "error",
            hideError: "d-none",
        },

        // error messages
        errorFallbackMessage: "Please check this field",

        // field expressions
        expression: {
            email: /^[^\s()<>@,;:\/]+@\w[\w.-]+\.[a-z]{2,}$/i,
            phone: /^[0-9]{2,5}( )?([0-9]{4,9})$/i,
        },

        // google recaptcha
        recaptcha: {
            disabled: true,
            className: "g-recaptcha",
        },

        // friendly captcha
        friendlyCaptcha: {
            disabled: true,
            className: "frc-captcha",
            inputClassName: "frc-captcha-solution"
        }
    });
````

### Options for data-rule
- required
- minlen:X
- email
- phone
- checked
- radio
- selected
- regExp
- recaptcha
- friendlyCaptcha

### DOM-Syntax of input fields
<!-- @TODO: Add dom syntax -->
<!-- @TODO: Add infos for using TYPO3-EXT:recaptcha -->

For DOM syntax of fields take a look into demo page

## Future features
- Better and more detailed documentation of use
- Definition of required fields independent of the validation
- New validation rules for email verification, url, date, datetime, time, month, number, range, color, password, password verification and files

## Donation
This is free, open-source software. If you'd like to support the development of future projects, or say thanks for this one, you can [donate](https://www.paypal.me/buddenbrock).

## License
GPL-3.0 &copy; [@buddenbrock/form-validation.js](https://github.com/Buddenbrock/form-validation.js/blob/master/LICENSE)
