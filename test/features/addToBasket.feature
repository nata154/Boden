@basket
Feature: Add item to basket

  Scenario Outline: Login system
    Given I open "https://www.boden.co.uk/" url
    When I login system with login "<Login>" and password "<Password>"
    When I click search button
    When I enter item for search "Knitwear"
    When I add to my bag first item
    When I click basket button
    Then I expect name of item equals to chosen
    And I remove chosen item from bag

    Examples:
      | Login           | Password|
      | nata154@list.ru | qzwxec |