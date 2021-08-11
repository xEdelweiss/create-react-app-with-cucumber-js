Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario Outline:
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"
    Examples:
      | day      | answer |
      | Friday   | TGIF   |
      | Monday   | Nope   |
      | Saturday | Nope   |
      | anything | Nope   |
