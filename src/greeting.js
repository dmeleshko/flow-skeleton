// @flow

function greetings(name?: string): string {
  return `Hello, ${name || "World"}!`
}

export default greetings
