$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/LoginDDT.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@scenario_outline"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User names test for user \u003cname\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" username and \"\u003cpassword\u003e\" password",
  "keyword": "When "
});
formatter.step({
  "name": "user name should be \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "credentials",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name"
      ]
    },
    {
      "cells": [
        "user187",
        "UserUser123",
        "Elenor Kreiger"
      ]
    },
    {
      "cells": [
        "user200",
        "UserUser123",
        "Meggie Macejkovic"
      ]
    },
    {
      "cells": [
        "storemanager52",
        "UserUser123",
        "Lorine Johns"
      ]
    },
    {
      "cells": [
        "storemanager66",
        "UserUser123",
        "Albin Lemke"
      ]
    },
    {
      "cells": [
        "salesmanager125",
        "UserUser123",
        "Deion Fadel"
      ]
    },
    {
      "cells": [
        "salesmanager140",
        "UserUser123",
        "Matteo Hegmann"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User names test for user Elenor Kreiger",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_outline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.users_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"user187\" username and \"UserUser123\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Elenor Kreiger\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test for user Meggie Macejkovic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_outline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.users_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"user200\" username and \"UserUser123\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Meggie Macejkovic\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test for user Lorine Johns",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_outline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.users_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"storemanager52\" username and \"UserUser123\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Lorine Johns\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test for user Albin Lemke",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_outline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.users_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"storemanager66\" username and \"UserUser123\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Albin Lemke\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test for user Deion Fadel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_outline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.users_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"salesmanager125\" username and \"UserUser123\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Deion Fadel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User names test for user Matteo Hegmann",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_outline"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "users is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.users_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"salesmanager140\" username and \"UserUser123\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user name should be \"Matteo Hegmann\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.stepdefinitions.LoginStepDefinitions.user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});