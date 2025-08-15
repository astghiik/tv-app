import './App.css';
import Menu from './components/Menu.tsx';
import Featured from './components/Featured.tsx';
import apiService from './services';
import { useEffect, useState } from 'react';
import type { MovieType } from './static/types.ts';

function App() {
  const [allData, setAllData] = useState<{ featured: MovieType; trendingNow: MovieType[] }>();

  useEffect(() => {
    apiService.getAllData().then((data: { featured: MovieType; trendingNow: MovieType[] }) => {
      setAllData(data);
    })
  }, []);

  return (
    <div className="flex h-screen">
      <Menu />
      {allData &&
        <main className="pl-[158px] h-screen overflow-y-auto w-full">
          <Featured data={allData.featured} />
        </main>
      }
    </div>
  );
}

export default App;
