interface Reportable {
  // name: string
  // year: number
  // broken: boolean
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `
      Name: ${this.name}
      Year: ${this.year}
      Broken? ${this.broken}
    `
  },
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `
      color: ${this.color}
      carbonated: ${this.carbonated}
      sugar: ${this.sugar}
    `
  },
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
console.log('______')
printSummary(drink)
