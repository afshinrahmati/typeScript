var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "author";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Cooking', 'ReadBook'],
    role: Role.ADMIN
};
if (person.role === "admin") {
    console.log(Role.ADMIN);
}
console.log(person);
