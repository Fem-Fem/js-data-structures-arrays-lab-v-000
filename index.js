// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name)
  return drivers
}

function appendDriver(name) {
  return [...drivers.slice(0, 3), 'name']
}

function destructivelyPrependDriver(name) {
  drivers.unshift("name")
  // drivers
}

function PrependDriver(name) {
  drivers.unshift("name")
}

function destructivelyRemoveLastDriver()
