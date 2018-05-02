// @flow

import greetings from "../src/greeting"

test("greetings", () => {
  const name = "Dmitriy"
  expect(greetings()).toBe("Hello, World!")
  expect(greetings(name)).toBe("Hello, Dmitriy!")
})
