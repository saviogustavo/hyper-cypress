Feature: Login

Scenario: As a user, I can log in successfully
    Given I am at the landing page
    When I click on the login link on the top of the page
    When I type a valid username on the pop up box
    When I type a valid password on the pop up box
    When I click the Login button 
    Then I can see my username on the top of the Home Page

Scenario: As a user, I can't log in when fill in only the Password field
    Given I am at the landing page
    When I click on the login link on the top of the page
    When I type a valid password on the pop up box
    When I click the Login button 
    Then I can see a "Please fill out Username and Password." message

Scenario: As a user, I can't log in when fill in only the Username field
    Given I am at the landing page
    When I click on the login link on the top of the page
    When I type a valid username on the pop up box
    When I click the Login button 
    Then I can see a "Please fill out Username and Password." message

Scenario: I can't login without having signed up before
    Given I am at the landing page
    When I click on the login link on the top of the page
    When I type an invalid username on the pop up box
    When I type an invalid password on the pop up box
    When I click the Login button 
    Then I can see a "User does not exist." message