interface User {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user";
}

const users3: User[] = [
  { id: 1, username: "hanhnhi", email: "hanhnhi@example.com", role: "admin" },
  { id: 2, username: "abc", email: "abc@example.com", role: "user" },
  { id: 3, username: "xyz", email: "xyz@example.com", role: "user" },
];

interface UserListProps {
  title: string;
  users: User[];
}

function UserList({ title, users }: UserListProps): void {
  console.log(`${title}`);
  users.forEach((user) => {
    console.log(`ID: ${user.id} - Username: ${user.username} (${user.role})`);
  });
}

UserList({
  title: "User List",
  users: users3,
});
