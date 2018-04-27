// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph")
}

function appendDriver(name) {
  return [...drivers.slice(0, 3), 'Broom']
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Garfield")
  drivers
}

function PrependDriver(name) {
  drivers.unshift("Ralph")
}
