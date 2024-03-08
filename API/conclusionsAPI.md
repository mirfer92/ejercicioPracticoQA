# API Testing Exercice Conclusions

API Testing of: [PetStore API](https://petstore.swagger.io/)

* The objective of API Automated Tests design and implementation was reached successfully.

* Execution results
    * run only in **Windows 11 Home** operative system.

```bash
npm run api-test 

> automationqa@1.0.0 api-test
> cucumber-js ./API/features/**.feature

(node:29204) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
....errorResponse: {"code":404,"type":"unknown","message":"java.lang.NumberFormatException: For input string: \"9223372036854776000\""}
.F-..errorResponse: {"code":500,"type":"unknown","message":"something bad happened"}
.F----......

Failures:

1) Scenario: Sending POST request to /pet endpoint with valid data adds a pet to the store # API\features\petStore.feature:5
   √ Given I set the request payload as: # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:7
       | category.id   | 1             |
       | category.name | dog           |
       | photoUrls.0   | Mocha_Pic.jpg |
       | tags.0.id     | 0             |
       | tags.0.name   | doggy         |
       | name          | Mocha         |
       | status        | available     |
   √ When I send a "POST" request to "/pet" endpoint with set payload # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:20    
   √ Then I validate response status code is 200 # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:44
   √ And I validate response data as: # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:48
       | id            | (id)          |
       | category.id   | 1             |
       | category.name | dog           |
       | photoUrls.0   | Mocha_Pic.jpg |
       | tags.0.id     | 0             |
       | tags.0.name   | doggy         |
       | name          | Mocha         |
       | status        | available     |
   √ And I send a "GET" request to "/pet/(id)" endpoint # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:12
   × And I validate response status code is 200 # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:44
       AssertionError
           + expected - actual

           -404
           +200

           at World.<anonymous> (file:///C:/Users/Lenovo/repos/AutomationQA/API/support/step_definitions/commonStepDefs.js:45:40)
           at Object.run (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\user_code_runner.js:24:27)
           at Object.run (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\step_runner.js:51:59)
           at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
           at async TestCaseRunner.invokeStep (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:111:16)
           at async TestCaseRunner.runStep (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:260:26)
           at async C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:191:44
           at async TestCaseRunner.aroundTestStep (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:136:32)
           at async TestCaseRunner.runAttempt (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:174:13)
           at async TestCaseRunner.run (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:152:35)
   - And I validate response data as: # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:48
       | id            | (id)          |
       | category.id   | 1             |
       | category.name | dog           |
       | photoUrls.0   | Mocha_Pic.jpg |
       | tags.0.id     | 0             |
       | tags.0.name   | doggy         |
       | name          | Mocha         |
       | status        | available     |

2) Scenario: Sending PUT request to /pet endpoint with valid data updates a pet at store # API\features\petStore.feature:39
   √ Before # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\hooks\petHooks.js:5
   √ Given I set the request payload as: # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:7
       | id            | (id)        |
       | category.id   | 0           |
       | category.name | cat         |
       | name          | Honni       |
       | photoUrls.0   | myHoney.png |
       | tags.0.id     | 10          |
       | tags.0.name   | kitty       |
       | status        | sold        |
   √ When I send a "PUT" request to "/pet" endpoint with set payload # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:20     
   × Then I validate response status code is 200 # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:44
       AssertionError
           + expected - actual

           -500
           +200

           at World.<anonymous> (file:///C:/Users/Lenovo/repos/AutomationQA/API/support/step_definitions/commonStepDefs.js:45:40)
           at Object.run (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\user_code_runner.js:24:27)
           at Object.run (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\step_runner.js:51:59)
           at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
           at async TestCaseRunner.invokeStep (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:111:16)
           at async TestCaseRunner.runStep (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:260:26)
           at async C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:191:44
           at async TestCaseRunner.aroundTestStep (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:136:32)
           at async TestCaseRunner.runAttempt (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:174:13)
           at async TestCaseRunner.run (C:\Users\Lenovo\repos\AutomationQA\node_modules\@cucumber\cucumber\lib\runtime\test_case_runner.js:152:35)
   - And I validate response data as: # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:48
       | id            | (id)        |
       | category.id   | 0           |
       | category.name | cat         |
       | name          | Honni       |
       | photoUrls.0   | myHoney.png |
       | tags.0.id     | 10          |
       | tags.0.name   | kitty       |
       | status        | sold        |
   - And I send a "GET" request to "/pet/(id)" endpoint # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:12
   - And I validate response status code is 200 # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:44
   - And I validate response data as: # file:\C:\Users\Lenovo\repos\AutomationQA\API\support\step_definitions\commonStepDefs.js:48
       | id            | (id)        |
       | category.id   | 0           |
       | category.name | cat         |
       | name          | Honni       |
       | photoUrls.0   | myHoney.png |
       | tags.0.id     | 10          |
       | tags.0.name   | kitty       |
       | status        | sold        |

3 scenarios (2 failed, 1 passed)
20 steps (2 failed, 5 skipped, 13 passed)
0m02.361s (executing steps: 0m02.327s)
```

* 3 tests executed: 1 passed, 2 failed; some problems were detected by Automated Test.

* Test results by Scenario:

    * **Sending POST request to /pet endpoint with valid data adds a pet to the store**
        * Status: Failed
        * Scenario failed at step: "I validate response status code is 200"
        * Reason: 404 was gotten after trying to validate the response by sending GET request to "/pet/{id}"; where {id} was saved from the previous POST response.
        * Conclusion: After manual revision, the "id" generated by sending a POST request to add a pet to the store was **9223372036854776000** which is too big to be assigned as pet "id". Therefore, when trying to use it sending GET request to "/pet/{id}", it throw a **java.lang.NumberFormatException**.
        * Test results: Bug detected by automated test.
        
    
    * **Sending PUT request to /pet endpoint with valid data updates a pet at store**
        * Status: Failed
        * Scenario failed at step: "I validate response status code is 200"
        * Reason: 500 was gotten after trying to validate the response by sending PUT request to "/pet"; where {id} was saved from the previous hook which sent POST to add a pet.
        * Conclusion: After manual revision, the "id" generated by sending a POST request to add a pet to the store was **9223372036854776000**.
        * Test results: Bug detected by automated test.

* To-Do items:
    * Add cucumber HTML reports.
    * Provide environment variables support.
    * Add logging utilities.
    * Pending execution in Linux and Mac operative systems.
