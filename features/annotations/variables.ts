let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// array
let colors: string[] = ['red', 'green', 'blue']
let myNums: number[] = [1, 2, 3]
let truths: boolean[] = [true, false]

// classes
class Car {}
let car: Car = new Car()

// object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
}

// function
const logNum: (i: number) => void = (i: number) => {
  console.log(i)
}

// when to use annotations
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json)

// future initialization
let orange: string
orange = 'true'

// variable whose type cannot be inferred
let numbers = [1,2,3]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}