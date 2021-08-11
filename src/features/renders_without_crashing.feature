Feature: App Displays Learn React
  Everybody wants to know if my React Component App can display the words: Learn React

  Scenario: App Render
    Given the DOM
    When I render a React component called: "App"
    Then my app should contain the words: "Learn React"

  Scenario: Counter Render
    Given the DOM
    When I render a React component called: "Counter"
    Then my app should contain the words: "value: 0"
    When I click on "add"
    Then my app should contain the words: "value: 1"
