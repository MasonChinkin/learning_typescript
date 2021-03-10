import { UserList } from './views/UserList'
import { Collection } from './models/Collection'
import { User, UserProps, URL } from './models/User'

const users = new Collection(URL, (json: UserProps) => {
  return User.buildUser(json)
})

console.log(users)

users.on('change', () => {
  const root = document.getElementById('root')

  if (root) {
    console.log('hello')
    new UserList(root, users).render()
  }
})

users.fetch()
