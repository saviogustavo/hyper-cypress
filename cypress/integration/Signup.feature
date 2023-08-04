Feature: Sign Up

Scenario: I can Sign Up successfully
    Given I am at the home page
    When I click on the Sign Up link on the top of the page
    When I type a valid username on the pop up box
    When I type a valid password on the pop up box
    When I click on the Sign Up button
    Then I can see the Sign Up successful message

Scenario: Sign up user that already exists
    Given I am at the home page
    When I click on the Sign Up link on the top of the page
    When I type a valid username on the pop up box
    When I type a valid password on the pop up box
    When I click on the Sign Up button
    Then I can see the Sign Up message saying the user already exists

Scenario: Sign up failing after filling only the Username field
    Given I am at the home page
    When I click on the Sign Up link on the top of the page
    When I type a valid username on the pop up box
    When I click on the Sign Up button
    Then I can see a "Please fill out Username and Password." message

Scenario: Sign up failing after filling only the Username field
    Given I am at the home page
    When I click on the Sign Up link on the top of the page
    When I type a valid password on the pop up box
    When I click on the Sign Up button
    Then I can see a "Please fill out Username and Password." message