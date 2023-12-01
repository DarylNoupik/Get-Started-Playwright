# Playwright Test Automation Framework - Readme

This repository contains test scripts written in TypeScript using the Playwright test automation framework. The tests cover various aspects of the framework, including input data reading, the Page Object Model, and HTML reporting.

## General Instructions

1. **Website:**

   - Use the [Automation Exercise](https://www.automationexercise.com) website for testing.

2. **Automation Framework:**

   - Utilize the "Playwright" test automation framework for both UI and API automation.

3. **Programming Language:**

   - Use TypeScript for scripting.

4. **Test Principles:**
   - Implement the following framework principles:
     - Input data reading from an external file (your choice of file format).
     - Page Object Model (POM) for better test maintenance.
     - HTML reporting for clear and detailed test results.
     - Execution with Playwright's built-in reporters.
     - Command line options for executing tests on a variety of supported browsers.

## Task 1 - Test Scripts

### UI Test 1 - Register User

1. Open the Automation Exercise website.
2. Navigate to the Signup page.
3. Complete the signup form.
4. Assert whether the signup is successful.

### UI Test 2 - Login User

1. Perform an invalid login scenario.
   - Enter an invalid password.
   - Assert that login is not successful.
2. Perform a valid login scenario.
   - Enter a valid password.
   - Assert that login is successful.

### UI Test 3 - Add to Cart (Data-Driven Tests)

1. Prepare an external file for Data-Driven Tests containing information on products.
2. Add all products from the external file to the Cart.
3. Assert whether each added product in the Cart contains the text 'Blue'.
4. Assert whether no added product in the Cart contains the text 'Yellow'.

## Running the Tests

To execute the tests, use the following command-line options:

```bash
npm run test -- --browser=<browser-name>
```
