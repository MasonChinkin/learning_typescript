const add = (a: number, b: number): number => {
  return a + b
}

// auto inferrence thinks this returns void
const voidInference = (a: number, b: number) => {
  a + b
}

const mutliply = function divide(a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
  // can return null and undefined
}

const weirdThrowError = (message: string): never => {
  throw new Error(message)
}

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message)
  }

  return message
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}

logWeather(forecast)