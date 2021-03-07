"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([11, -3, 5, 3]);
numbersCollection.sort();
console.log(numbersCollection.data);
var characterCollection = new CharactersCollection_1.CharacterCollection('sdflgjkbsdfklgb');
characterCollection.sort();
console.log(characterCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(1010);
linkedList.add(130);
linkedList.add(-3);
linkedList.sort();
console.log(linkedList.print());
