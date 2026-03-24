import { Header } from "./Header";
import { Main } from "./MainSection";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <Main />
      </div>
    </AppProvider>
  );
}

export default App;
