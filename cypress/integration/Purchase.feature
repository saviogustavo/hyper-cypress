Feature: Purchase Page

Scenario: As a user, I am able to buy a product
    Given I am at the Home Page 
    When I click on a product
    When I click on Add to cart button
    When I click on the cart link on the top of the page
    When I click on the Place Order button
    When I fill in all the required fields
    When I click on Purchase button
    Then I can see the Purchase confirmation
