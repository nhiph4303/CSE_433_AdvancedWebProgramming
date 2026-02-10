interface User {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user";
}

const users: User[] = [
  { id: 1, username: "hanhnhi", email: "hanhnhi@example.com", role: "admin" },
  { id: 2, username: "abc", email: "abc@example.com", role: "user" },
  { id: 3, username: "xyz", email: "xyz@example.com", role: "user" },
];

function getUserInfo(Users: User[]): void {
    Users.forEach((user) => {
        console.log(`Username: ${user.username}, Email: ${user.email}, Role: ${user.role}`);
    });
}
console.log(getUserInfo(users));
