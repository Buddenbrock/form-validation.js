# @buddenbrock/form-validation.js
![GitHub licenze](https://img.shields.io/github/license/buddenbrock/form-validation.js?style=for-the-badge)
![GitHub release](https://img.shields.io/github/package-json/version/buddenbrock/form-validation.js?style=for-the-badge)
![Last commit](https://img.shields.io/github/last-commit/buddenbrock/form-validation.js?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/buddenbrock/form-validation.js?style=for-the-badge)

JavaScript for adding a frontend form validation

## Table of content
- [How to install](#how-to-install)
    - [Add package](#add-package)
        - [Using npm](#using-npm)
        - [Using Yarn](#using-yarn)
    - [Add script bundle to your footer script block](#add-script-bundle-to-your-footer-script-block)
        - [Using NPM or Yarn](#using-npm-or-yarn)
        - [Using CDN](#using-cdn)
    - [How to use](#how-to-use)
        - [Initialise class](#initialise-class)
        - [Add options](#add-options)
            - [Settings](#settings)
        - [Options for data-rule](#options-for-data-rule)
        - [DOM-Syntax of input fields](#dom-syntax-of-input-fields)
            - [Input - no validation](#input---no-validation)
            - [Input - required](#input---required)
            - [Input - minlen](#input---minlen)
            - [Input - phone](#input---phone)
            - [Input - email](#input---email)
            - [Input - email verification (not ready yet)](#input---email-verification)
            - [Input - regExp](#input---regexp)
            - [Input - checkbox](#input---checkbox)
            - [Input - checkbox group (not ready yet)](#input---checkbox-group)
            - [Input - radiobox](#input---radiobox)
            - [Textarea](#textarea)
            - [Select](#select)
            - [FriendlyCaptcha](#friendlycaptcha)
            - [Google Recaptcha](#google-recaptcha)
    - [Future features](#future-features)
    - [Donation](#donation)
    - [License](#license)

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
<script src="https://unpkg.com/@buddenbrock/form-validation.js@1.1.0/public/JavaScript/formValidation.min.js"></script>
```

## How to use
### Initialise class
```javascript
let formValidation = new FormValidation();
```

### Add options
Defining your options by adding settings array to init class. These options are supported. Not redefined options will be set by default values.

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
```javascript
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
```

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
First  if a form should validate you have to add the validation class you add in `classes.formValidation` in init class

```html
<form class="validation"> [...] </form>
```

Next You have to wrap every form field by div container like the following examplels.

#### Input - no validation
```html
<div class="form-group">
    <label for="field-1">no validation</label>
    <input id="field-1" type="text"/>
</div>
```

#### Input - required
```html
<div class="form-group">
    <label for="field-2">rule: required</label>
    <input id="field-2" type="text" data-rule="required" data-msg="Error message"/>
</div>
```

#### Input - minlen
```html
<div class="form-group">
    <label for="field-3">rule: minlen:5</label>
    <input id="field-3" type="text" data-rule="minlen:5" data-msg="Error message"/>
</div>
```

#### Input - phone
```html
<div class="form-group">
    <label for="field-4">rule: phone</label>
    <input id="field-4" type="tel" data-rule="phone" data-msg="Error message"/>
</div>
```

#### Input - email
```html
<div class="form-group">
    <label for="field-5">rule: email</label>
    <input id="field-5" type="email" data-rule="email" data-msg="Error message"/>
</div>
```

#### Input - email verification (not ready yet)
```html
<div class="form-group">
    <label for="field-6">rule: email-verify</label>
    <input id="field-6" type="email" data-rule="email-verify" data-msg="Error message"/>
</div>
```

#### Input - regExp
```html
<div class="form-group">
    <label for="field-11">rule: regExp:/[^a-zA-Z]+/gm</label>
    <input id="field-11" type="email" data-rule="regExp:/[^a-zA-Z]+/gm" data-msg="Error message"/>
</div>
```

#### Input - checkbox
```html
<div class="form-group">
    <input id="field-7" type="checkbox" data-rule="checked" data-msg="Check the checkbox">
    <label for="field-7">rule: checked</label>
</div>
```

#### Input - checkbox group (not ready yet)
```html
<div class="form-group">
    <ul>
        <li>
            <input id="field-8-1" type="checkbox" name="field-8" data-rule="checked" data-msg="Check the checkbox" value="1">
            <label for="field-8-1">rule: checked</label>
        </li>
        <li>
            <input id="field-8-2" type="checkbox" name="field-8" data-rule="checked" data-msg="Check the checkbox" value="1">
            <label for="field-8-2">rule: checked</label>
        </li>
        <li>
            <input id="field-8-3" type="checkbox" name="field-8" data-rule="checked" data-msg="Check the checkbox" value="1">
            <label for="field-8-3">rule: checked</label>
        </li>
    </ul>
</div>
```

#### Input - radiobox
```html
<div class="form-group form-group-radio">
    <ul>
        <li>
            <input id="field-9-1" type="radio" name="field-9" data-rule="radio" data-msg="Check one radio" value="1">
            <label for="field-9-1">rule: radio</label>
        </li>
        <li>
            <input id="field-9-2" type="radio" name="field-9" data-rule="radio" data-msg="Check one radio" value="0">
            <label for="field-9-2">rule: radio</label>
        </li>
        <li>
            <input id="field-9-3" type="radio" name="field-9" data-rule="radio" data-msg="Check one radio" value="0">
            <label for="field-9-3">rule: radio</label>
        </li>
    </ul>
</div>
```

#### Textarea
```html
<div class="form-group">
    <label for="field-11">rule: required</label>
    <textarea id="field-11" data-rule="required" data-msg="Insert a Text"></textarea>
</div>
```

#### Select
```html
<div class="form-group">
    <label for="field-10">rule: selected</label>
    <select id="field-10" data-rule="selected" data-msg="Add an valid email adress">
        <option disabled selected></option>
        <optgroup label="Group 1">
            <option>Option 1.1</option>
            <option>Option 1.2</option>
        </optgroup>
        <optgroup label="Group 2">
            <option>Option 2.1</option>
            <option>Option 2.2</option>
        </optgroup>
    </select>
</div>
```

#### FriendlyCaptcha
```html
<div class="form-group">
    <div class="frc-captcha" data-sitekey="XYZ"></div>
</div>
```

#### Google Recaptcha
```html
<div class="form-group">
    <label for="contactForm-35-recaptcha-1"></label>
    <input id="field-13" type="hidden" data-rule="recaptcha" data-msg="Bitte bestätigen Sie, dass Sie kein Roboter sind." value="">
    <div class="g-recaptcha" data-field-id="field-13" data-sitekey="XYZ" data-callback="recaptchaCallback" data-expired-callback="recaptchaExpiredCallback"></div>
</div>
```

## Future features
- Definition of required fields independent of the validation
- New validation rules for email verification, url, date, datetime, time, month, number, range, color, password, password verification and files

## Donation
This is free, open-source software. If you'd like to support the development of future projects, or say thanks for this one, you can [donate](https://www.paypal.me/buddenbrock).

## License
GPL-3.0 &copy; [@buddenbrock/form-validation.js](https://github.com/Buddenbrock/form-validation.js/blob/master/LICENSE)
