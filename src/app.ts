//  interface Just for Highlighting Type we casn't give value
interface Person {
  name: string
  age: number
  greet(phrase: string): void
}

let user1: Person

user1 = {
  name: 'Afshin',
  age: 21,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  },
}
user1.greet('Hi i a m')
//  STEP 2: what Difference interface and type
//  Type Perso n = {name:string,age:number,greet(x:string)} we can use union inb type
// and intersfaces are obvious AND we can use interface on class
// class x implements Person{}

class Persons implements Person {
  name: string
  age = 21
  constructor(n: string) {
    this.name = n
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}
let user2: Person
user2 = new Persons('Afi')
user2.greet('Salam')
console.log(user2)
