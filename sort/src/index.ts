import { CharacterCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([11, -3, 5, 3])
numbersCollection.sort()
console.log(numbersCollection.data)

const characterCollection = new CharacterCollection('sdflgjkbsdfklgb')
characterCollection.sort()
console.log(characterCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(1010)
linkedList.add(130)
linkedList.add(-3)
linkedList.sort()
console.log(linkedList.print())
