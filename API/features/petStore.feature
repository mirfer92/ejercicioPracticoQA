@API
Feature: Pet Store
  Test Scenario set for Pet Store API

  Scenario: Sending POST request to /pet endpoint with valid data adds a pet to the store
    Given I set the request payload as:
      | category.id   | 1               |
      | category.name | dog             |
      | photoUrls.0   | Mocha_Pic.jpg   |
      | tags.0.id     | 0               |
      | tags.0.name   | doggy           |
      | name          | Mocha           |
      | status        | available       |
    When I send a "POST" request to "/pet" endpoint with set payload
    Then I validate response status code is 200
      And I validate response data as:
        | id            | (id)            |
        | category.id   | 1               |
        | category.name | dog             |
        | photoUrls.0   | Mocha_Pic.jpg   |
        | tags.0.id     | 0               |
        | tags.0.name   | doggy           |
        | name          | Mocha           |
        | status        | available       |
      And I send a "GET" request to "/pet/(id)" endpoint
      And I validate response status code is 200
      And I validate response data as:
        | id            | (id)            |
        | category.id   | 1               |
        | category.name | dog             |
        | photoUrls.0   | Mocha_Pic.jpg   |
        | tags.0.id     | 0               |
        | tags.0.name   | doggy           |
        | name          | Mocha           |
        | status        | available       |


  @createPet
  Scenario: Sending PUT request to /pet endpoint with valid data updates a pet at store
    Given I set the request payload as:
      | id            | (id)            |
      | category.id   | 0               |
      | category.name | cat             |
      | name          | Honni           |
      | photoUrls.0   | myHoney.png     |
      | tags.0.id     | 10              |
      | tags.0.name   | kitty           |
      | status        | sold            |
    When I send a "PUT" request to "/pet" endpoint with set payload
    Then I validate response status code is 200
      And I validate response data as:
        | id            | (id)            |
        | category.id   | 0               |
        | category.name | cat             |
        | name          | Honni           |
        | photoUrls.0   | myHoney.png     |
        | tags.0.id     | 10              |
        | tags.0.name   | kitty           |
        | status        | sold            |
      And I send a "GET" request to "/pet/(id)" endpoint
      And I validate response status code is 200
      And I validate response data as:
        | id            | (id)            |
        | category.id   | 0               |
        | category.name | cat             |
        | name          | Honni           |
        | photoUrls.0   | myHoney.png     |
        | tags.0.id     | 10              |
        | tags.0.name   | kitty           |
        | status        | sold            |


  Scenario: Sending GET request to /pet/findByStatus endpoint with parameter "status=sold" includes a created pet
    Given I set the request payload as:
      | category.id   | 5           |
      | category.name | turtle      |
      | photoUrls.0   | tom.jpg     |
      | tags.0.id     | 4           |
      | tags.0.name   | cute        |
      | name          | Tommy       |
      | status        | sold        |
      And I send a "POST" request to "/pet" endpoint with set payload
      And I validate response status code is 200
    When I send a "GET" request to "/pet/findByStatus" endpoint with params:
      | status  | sold  |
    Then I validate response status code is 200
      And I validate response data array includes:
        | id            | (id)        |
        | category.id   | 5           |
        | category.name | turtle      |
        | photoUrls.0   | tom.jpg     |
        | tags.0.id     | 4           |
        | tags.0.name   | cute        |
        | name          | Tommy       |
        | status        | sold        |
    