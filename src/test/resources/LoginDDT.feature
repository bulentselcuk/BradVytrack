@scenario_outline
  Feature: Login
    Scenario Outline: User names test for user <name>

      Given users is on the login page
      When user enters "<username>" username and "<password>" password
      Then user name should be "<name>"
      Examples: credentials
        | username        | password    | name              |
        | user187         | UserUser123 | Elenor Kreiger    |
        | user200         | UserUser123 | Meggie Macejkovic |
        | storemanager52  | UserUser123 | Lorine Johns      |
        | storemanager66  | UserUser123 | Albin Lemke       |
        | salesmanager125 | UserUser123 | Deion Fadel       |
        | salesmanager140 | UserUser123 | Matteo Hegmann    |