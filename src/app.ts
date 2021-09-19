class Departmen {
  private employees: string[] = []
  constructor(private id: number, public name: string, readonly age: number) {}

  describe(this: Departmen) {
    console.log(
      'Hello function with out function',
      this.name + this.id + this.age,
    )
  }
  addEmployees(employees: string) {
    this.employees.push(employees)
    // it is wrong becase age is read only
    // this.age = 85
  }
  printEmployees() {
    console.log(this.employees.length, this.employees)
  }
}

const accounting = new Departmen(15, 'Afshin', 18)

accounting.addEmployees('afshin')
accounting.addEmployees('Max')
accounting.describe()
accounting.printEmployees()
