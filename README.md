# API Automated Testing in JavaScript project 🧪🛠️

This project is to generate test cases related to page https://restful-booker.herokuapp.com

The project has been created as part of Automated Testing in JavaScript program from EPAM campus.

The main purpose of the project is to validate the API respose as should be, the tests to performed are:

1. GET bookings using firstName and lastName as filters.
2. GET booking using date as filter.
3. POST a new book.
4. GET a booking through an id.
5. PUT a current booking.
6. DELETE an existing booking.

**Libraries and Framework**
Chai, Joi and Axios.

**Script to run the tests** _npm test_

## Tests

### GET bookings by filters

The first 2 tests are located in `booking.filters.test.js` file. This file is divided in two test scenarios:

1. GET bookings using the firstName and lastName as filters.
2. GET bookings using the date as filter.

The last 4 tests are located in `booking.flow.test.js` file. This file is created to validate the correct behaviour of the API.

1. CREATE a new booking.
2. GET an existing booking.
3. PUT, update the information from an existing booking.
4. DELETE an existing booking.

## Structure

- The base of the project is `config.js` file, in this are declared the **basic authentication** and the **baseURL**.
- The CRUD methods are located in the `bookingApi.js` within _apis_ folder. The file declare the methods **PUT, GET, POST and DELETE**
- An special file was created to run the first test from `booking.flow.test.js`. Within the data folder is `bookingFactory.js` file which contain a method that creates a new booking.
- For the schemas _JOI library_ was implemented in the file `bookingSchemas.js`. The use parameters are:
  - firstName
  - lastName
  - totalPrice
  - depositPaid
  - bookingDates (checkIn and checkOut)
  - additionalNeeds (optional)
- The use of assertions is with chai. The `assertions.js` is located in _utils_ folder.

## Formartters

### Prettier

To maintain a good formarting in this repository Prettier is applied.
<br><br><b>Configuration and Installation</b><br><br>
<em>Installation.</em> `npm install --save-dev --save-exact prettier`<br><br>
<em>Configuration.</em> `node --eval "fs.writeFileSync('.prettierrc','{}\n')"`, this command create <b>.prettierrc</b> file which provide the instruccion to the IDE that Prettier is in use.
`node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"` this create <b>.prettierignore</b> file to provide the instructions of which files shouldn't be formatted.

<b><em>How to run Prettier</em></b>
You may run the command `npm run prettier`. Which script is configurated in `package.json` file.

```json
"scripts": {
  "prettier": "npx prettier . --write",
}
```

### EsLint

EsLint provide support fixing syntax errors in JavaScript.
<br><br><b>Configuration and Installation</b><br><br>

<em>Installation.</em> `npm init @eslint/config@latest`<br><br>
<em>Configuration.</em> Once the installation command is run, a couple of questions will be displayed to configure EsLint and will be saved in `eslint.config.js` file.

You may apply several rules in the project. Below are the selected rules for this project:

```js
rules: {
      "no-duplicate-imports": "warn",
      "no-unexpected-multiline": "warn",
      "no-const-assign": "warn",
      "no-func-assign": "warn",
    },
```

More rules may be found in <a href=https://eslint.org/docs/latest/rules>EsLint Rules Reference</a>

<b><em>How to run EsLint</em></b>
You may run the command `npm run eslint`. Which script is configurated in `package.json` file.

```json
"scripts": {
  "eslint": "npx eslint"
}
```

#### Notes

To avoid conflict between Prettier and EsLint it is neccesary set up an extra configuration in `eslint.config.js` file.

```js
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  // rest of the code...
  eslintConfigPrettier,
]);
```

In case you need run both Prettier and EsLint, you can use `npm run check` command.

```json
"scripts": {
  "check": "npx prettier . --write && npx eslint"
}
```
