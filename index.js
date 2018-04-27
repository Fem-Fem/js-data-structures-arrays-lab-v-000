// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  drivers.push("Ralph")
}

function appendDriver() {
  return [...drivers.slice(0, 3), 'Broom']
}

function destructivelyPrependDriver() {
  drivers.unshift("Garfield")
  // drivers
}

function PrependDriver() {
  drivers.unshift("Ralph")
}

function destructivelyRemoveLastDriver()