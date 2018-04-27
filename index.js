// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function appendDriver(name) {
  return [...drivers.slice(0, 3), name]
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
  // drivers
}

function PrependDriver(name) {
  [name]
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
  drivers
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
  drivers
}

function removeLastDriver() {
  drivers.slice(0, 2)
}

function removeFirstDriver() {
  drivers.splice(1, 3)
}
