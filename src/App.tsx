import './App.css';
import Menu from './components/Menu.tsx';
import Featured from './components/Featured.tsx';
import TrendingNow from './components/TrendingNow.tsx';
import apiService from './services';
import { useEffect, useState } from 'react';
import type { MovieType } from './static/types.ts';

function App() {
  const [featuredData, setFeaturedData] = useState<MovieType>();
  const [trendingNowData, setTrendingNowData] = useState<MovieType[]>();

  useEffect(() => {
    apiService.getAllData().then(({ featured, trendingNow }: { featured: MovieType; trendingNow: MovieType[] }) => {
      setFeaturedData(featured);
      setTrendingNowData(trendingNow);
    })
  }, []);

  return (
    <div className="flex h-screen">
      <Menu />
      {featuredData && trendingNowData &&
        <main className="pl-[158px] h-screen flex flex-col overflow-y-auto w-full">
          <Featured data={featuredData} />
          <TrendingNow onSelect={(item: MovieType) => setFeaturedData(item)} data={trendingNowData} />
        </main>
      }
    </div>
  );
}

export default App;
