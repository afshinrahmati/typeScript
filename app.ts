// usually we use enum on folder types like ==> export enum Role{}
enum Role { ADMIN = 'admin', READ_ONLY = 100, AUTHOR = 'author' };
const person: { name: string, age: number, hobbies: string[], role: Role } = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Cooking', 'ReadBook'],
    role: Role.ADMIN
};
if (person.role === "admin"){
    console.log(Role.ADMIN);
    
}
console.log(person);
