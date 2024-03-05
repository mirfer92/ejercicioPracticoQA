Feature: Shopping
  E2E testing for Shopping products in saucedemo webpage

  Scenario: Shopping products in saucedemo
    Given I navigate to saucedemo webpage
      And I login with "standard_user" and "secret_sauce"
    #TODO: improve credential usage
    
    #When I search for text "You did it!!"
    #Then I see google could find "You did it!! - Google Search"