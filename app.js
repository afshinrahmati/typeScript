// [number,string] ==> tuple
// srting[] ==> array
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Cooking', 'ReadBook'],
    role: [1, "superAdmin"]
};
person.role.push("admin");
console.log(person);
