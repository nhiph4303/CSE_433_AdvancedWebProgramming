import { Checklist } from './Checklist';
import './App.css';

function App() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Cách 1: Component Mặc Định</h1>
      <Checklist
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
        ]}
        id="id"
        primary="name"
        secondary="role"
      />

      <h1 className="text-2xl font-bold mt-10 mb-4">Cách 2: Giao diện bẻ lái (Render Props)</h1>
      <Checklist
        data={[
          { id: 3, name: 'Bill', role: 'Developer' },
          { id: 4, name: 'Tara', role: 'Developer' },
          { id: 5, name: 'Sara', role: 'UX' },
          { id: 6, name: 'Derik', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
        renderItem={(item) => (
          <li key={item.id} className="bg-white p-4 border-b-2 last:border-0 border-blue-500">
            <div className="text-xl font-medium text-blue-800 pb-1">
              🛠️ {item.name}
            </div>
            <div className="text-blue-500 text-sm italic">{item.role}</div>
          </li>
        )}
      />
    </div>
  );
}

export default App;
