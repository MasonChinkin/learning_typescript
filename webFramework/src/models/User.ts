import { ApiSync } from './ApiSync'
import { Attributes } from './Attributes'
import { Collection } from './Collection'
import { Eventing } from './Eventing'
import { Model } from './Model'

export const URL = 'http://localhost:3000/users'

export interface UserProps {
  id?: number
  name?: string
  age?: number
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync(URL)
    )
  }

  isAdminUser(): boolean {
    return this.get('id') === 1
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(URL, (json: UserProps) =>
      User.buildUser(json)
    )
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }
}
