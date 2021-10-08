// type intersection
type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  starDate: Date
}

type ElevatedEmployee = Admin & Employee

const user1: ElevatedEmployee = {
  name: 'afshin',
  privileges: ['WebSeveloper'],
  starDate: new Date(),
}

console.log(user1)

// guard ==> in
type unKnownEmployee = Employee | Admin

function printEmployeeInformation(emp: unKnownEmployee) {
  console.log(`${emp.name} Name`)
  if ('privileges' in emp) {
    console.log(`${emp.privileges} privileges`)
  }

  if ('starDate' in emp) {
    console.log(`${emp.starDate} StartDate`)
  }
}
