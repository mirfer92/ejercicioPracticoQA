# E2E Testing Exercice Conclusions

E2E Testing of: [Saucedemo sample page](https://www.saucedemo.com/)

* The objective of UI Automated Test design and implementation was reached successfully.

* Execution results
    * run in **Chrome, Firefox and Edge** browsers.
    * credentials: **standard_user/secret_sauce**.
    * run only in **Windows 11 Home** operative system.

```bash
npm run ui-test 

> automationqa@1.0.0 ui-test
> cucumber-js ./UI/features/**.feature

(node:26072) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
The browser was not set at "data/config.json" file; running tests in Chrome by default.

DevTools listening on ws://127.0.0.1:52863/devtools/browser/a368eaed-6789-4f15-bf16-e060ec0c6684
...........

1 scenario (1 passed)
9 steps (9 passed)
0m05.471s (executing steps: 0m05.450s)
```

* 1 of 1 tests passed; no problems found by Automated Test.

* The main E2E functionallity works correctly, the message "Thank you for your order!" was gotten successfully!.

* To-Do items:
    * Add cucumber HTML reports.
    * Provide environment variables support.
    * Add logging utilities.
    * Pending execution in Linux and Mac operative systems.
