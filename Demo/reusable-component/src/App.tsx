import { CheckList } from "./CheckList";

function App() {
  return (
    <>
      {/* user management */}
      <CheckList
        data={[
          { id: 1, name: "A", role: "Admin" },
          { id: 2, name: "B", role: "Staff" },
          { id: 3, name: "A1", role: "Admin" },
          { id: 4, name: "B1", role: "Staff" },
          { id: 5, name: "A2", role: "Admin" },
          { id: 6, name: "B2", role: "Staff" },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: "300px",
          maxHeight: "380px",
          overflowY: "auto",
        }}

        renderItem={(item) => <div>{item.name} - {item.role}</div>}
      />
      {/* Contact management */}
      {/* <CheckList
        data={[
          { id: 1, name: "A", content: "You are a handsome guy" },
          { id: 2, name: "B", content: "Call me later" },
        ]}
        id="id"
        primary="name"
        secondary="content"
      /> */}
    </>
  );
}

export default App;
