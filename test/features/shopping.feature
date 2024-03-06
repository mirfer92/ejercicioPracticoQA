Feature: Shopping
  E2E testing for Shopping products in saucedemo webpage
  
  Background:
  Given I navigate to saucedemo webpage
    And I login as "standard" user


  Scenario: Shopping products in saucedemo
    When I add a "Sauce Labs Bolt T-Shirt" item to the cart
      And I add a "Test.allTheThings() T-Shirt (Red)" item to the cart
      And I validate the selected cart items
      And I make the checkout with data:
        | firstName   | John    |
        | lastName    | Doe     |
        | postalCode  | ABC-123 |
      And I validate items checked out:
        | Sauce Labs Bolt T-Shirt           |
        | Test.allTheThings() T-Shirt (Red) |
      And I finish the shopping checkout
    Then I validate the successful shopping confirmation