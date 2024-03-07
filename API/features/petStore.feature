Feature: Pet Store
  Test Scenario set for Pet Store API

  Scenario: Sending a GET request to /pet/{ID} retrieves registered pet's data
    When I send a "GET" request to "/pet/9223372036854590269" endpoint