const users = ["alice", "bob", "charlie"];

interface UserObject {
    id: number;
    name: string;
}

function toUserObjects (arr: string[]): UserObject[] {
    return arr.map((name, index) => ({
        id: index + 1,
        name
    }));
}

console.log(toUserObjects(users));