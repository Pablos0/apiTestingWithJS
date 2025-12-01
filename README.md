# API Automated Testing in JavaScript project  🧪🛠️

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

**Script to run the tests** *npm test*

## Tests

### GET bookings by filters 

The first 2 tests are located in ```booking.filters.test.js``` file. This file is divided in two test scenarios: 
1. GET bookings using the firstName and lastName as filters. 
2. GET bookings using the date as filter.

The last 4 tests are located in ```booking.flow.test.js``` file. This file is created to validate the correct behaviour of the API.
1. CREATE a new booking.
2. GET an existing booking. 
3. PUT, update the information from an existing booking. 
4. DELETE an existing booking. 

## Structure

- The base of the project is ```config.js``` file, in this are declared the **basic authentication** and the **baseURL**. 
- The CRUD methods are located in the ```bookingApi.js``` within *apis* folder. The file declare the methods **PUT, GET, POST and DELETE**
- An special file was created to run the first test from ```booking.flow.test.js```. Within the data folder is ```bookingFactory.js``` file which contain a method that creates a new booking. 
- For the schemas *JOI library* was implemented in the file ```bookingSchemas.js```. The use parameters are:
    - firstName
    - lastName
    - totalPrice
    - depositPaid
    - bookingDates (checkIn and checkOut)
    - additionalNeeds (optional)
- The use of assertions is with chai. The  ```assertions.js``` is located in *utils* folder.
