import './App.css';
import Menu from './components/Menu.tsx';
import Featured from './components/Featured.tsx';
import TrendingNow from './components/TrendingNow.tsx';
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
    <div style={{ backgroundImage: `url(/images/${allData?.featured.CoverImage})`}} className="bg-cover bg-right flex h-screen">
      <Menu />
      {allData &&
        <main className="pl-[158px] h-screen flex flex-col overflow-y-auto w-full">
          <Featured data={allData.featured} />
          <TrendingNow data={allData.trendingNow} />
        </main>
      }
    </div>
  );
}

export default App;
