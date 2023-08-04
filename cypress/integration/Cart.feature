Feature: Cart Page

Scenario: As a user, I am able to access my Cart Page
    Given I am at the Home Page 
    When I click on the cart link on the top of the page 
    Then I am redirected to the Cart Page

Scenario: As a user, I can Add a product to my cart
    Given I am at the Home Page 
    When I click on a product
    When I click on Add to cart button
    Then The product will be added to my cart
