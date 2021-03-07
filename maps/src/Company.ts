import faker from 'faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent() {
    return `
      <div>
        <h2>Company: ${this.companyName}</h2>
        <h3>CatchPhrase: ${this.catchPhrase}</h3>
      </div>
    `
  }
}
