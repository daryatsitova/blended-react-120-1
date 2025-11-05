interface User {
    name: string;
    age: number;
}


const user: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

function addUser(newUser: User): User[] {
    user.push(newUser);
    return user;
}

addUser({ name: "Charlie", age: 35 });

addUser({ name: "Charlie",});