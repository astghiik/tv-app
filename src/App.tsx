import './App.css';
import Menu from './components/Menu.tsx';

function App() {
  return (
    <div className="flex h-screen">
      <Menu />
      <main className="pl-[800px]">
        main
      </main>
    </div>
  );
}

export default App;
