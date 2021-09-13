// [number,string] ==> tuple
// srting[] ==> array
const person: { name: string, age: number,hobbies:string[],role:[number,string] } = {
    name: 'Maximilian',
    age: 30,
    hobbies:['Cooking','ReadBook'],
    role:[1,"superAdmin"]
};
// with push you can Bypass rules the type array
person.role.push("admin")
console.log(person);
