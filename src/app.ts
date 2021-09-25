abstract class Department {
  abstract describe(this: Department): void
  static fiscalYear = 2000
  protected employees: string[] = []
  constructor(
    protected id: number,
    public name: string,
    readonly age: number,
  ) {}
  init() {
    console.log(this.describe())
  }
  addEmployees(employees: string) {
    this.employees.push(employees)
  }

  printEmployees() {
    console.log(this.employees.length, this.employees)
  }

  static createEmployee(name: string) {
    return { name }
  }
}

class AccountingDepartment extends Department {
  private lastReport: string

  constructor(id: number, private reports: string[]) {
    // super for connect constarctor dad
    // when we use super all this is for constarcror dad ,now this.id = id constartcror dadchange with child
    super(1, 'amir', 2)
    this.id = id

    this.lastReport = reports[0]
  }
  // abstract
  describe() {
    return 'aFsHiN'
  }
}
//1 static
const employees1 = Department.createEmployee('afshin')
console.log(employees1, Department.fiscalYear)
//2 connct to constarctor dad with Super and chhnage this
const testProtect1 = new AccountingDepartment(12, ['afi'])
const testProtect2 = testProtect1.describe()

console.log(testProtect2)

//* $$$$$$$$ static $$$$$$$$$$
// noticed 1 ==> when you use static in your class  you can use on constructor becase constructor is not a static
// noticed 2 ==> when we use static else we don't need new for call it (Department.createEmployee('afshin'))
//* $$$$$$protected$$$$
// noticed 1 ==> protected use all class
// $$$$$$ abstract $$$$$$
// for had to  do this function on other child
// and we didnot write any thing in abstract class becases it is Responsible child
