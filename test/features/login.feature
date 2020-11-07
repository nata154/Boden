@login
Feature: Log in

  Scenario Outline: Login system
    Given I open "https://www.boden.co.uk/" url
    Then I login system with login "<Login>" and password "<Password>"
    Then Page title should be "Boden UK | Women's, Men's, Boys', Girls' & Baby Clothing and Accessories"

    Examples:
      | Login           | Password|
      | nata154@list.ru | qzwxec |