# cypress-cucumber

End-to-End Automation Test Framework with BDD

# Installation

Clone the directory and run

```
npm install
npm run test
```
# Step definitions

put your step definitions in cypress/support/step_definitions

Examples: cypress/support/step_definitions/facebook.js

```
/* global Given, When, Then */
const url = 'https://www.facebok.com';

Given('I open Facebook page', () => {
    cy.visit(url);
});

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title)
});
```
Since, Given/When/Then are on global scope. Please use

```
/* global Given, When, Then */
```
For more information please visit: https://docs.cypress.io/api/commands/as.html

# Spec/Feature files

Your feature files in cypress/integration:
Example: cypress/integration/facebook.feature

```
Feature: The Facebook Page
I want to open a social network Page

Scenario: Opening a social network page
    Given I open Facebook page
    Then I see "Facebook" in the title
```
# Cucumber Expressions
We use https://docs.cucumber.io/cucumber/cucumber-expressions/ to parse your .feature file, please use that document as your reference

# Credits
This is based on the framework https://cypress.io and https://cucumber.io. The preprocessor to integrate both the frameworks are from https://github.com/TheBrainFamily/cypress-cucumber-preprocessor. Many thanks to the TheBrainFamily for the wonderful job.


# report generation

There are two kinds of reports generated
- Multiple Cucumber HTML Reporter (https://github.com/wswebcreation/multiple-cucumber-html-reporter)
- Cucumber html report (https://www.npmjs.com/package/cucumber-html-reporter)

Fire below command to generate the multiple cucumber html report
```
node cucumber-multiple-html-reporter.js
```

Fire below command to generate the Cucumber html report
```
node cucumber-html-reporter.js
```
