Feature: End to end Ecommerce validation

    @Smoke
    Scenario: Ecommerce products delivery
    Given I am on the home page
    When I navigate to the shop page
    Then the shop is displayed successfully

    Scenario: Ecommerce fill form
    Given I am on the home page
    When I fill the user form
    Then I see the form got submitted successfully

