class Departmen {
  name: string
  constructor(n: string) {
    this.name = n
  }

  describe(this: Departmen) {
    console.log('Hello function with out function', this.name)
  }
}

// when we use constructor for use this we should use new
const accounting = new Departmen('Afshin')
console.log(accounting)
// function
accounting.describe() // this a fu
// How to install prettier
// 1 ==> npm install prettier -D --save-exact
// 2 ==>. click right then choose format document with then  configh defult formater then choose
// How to install eslint
// 1 ==> go to this webSite https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code
// 2 ==> all the code in file .eslintsrc is exist you should use
