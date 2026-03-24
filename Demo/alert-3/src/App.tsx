import { Alert } from './Alert';
import './App.css';
import { PersonScore } from './PersonScore';

function App() {
  return (
    <div className="App">
      <Alert heading="Thông báo Lên Đồ Thành Công!" closable={true}>
        Nội dung bây giờ có cả nút Đóng, icon chấm than, và màu sắc tự thay đổi rồi nhé!
      </Alert>
    </div>
  );
}

export default App;
