import './App.css';
import Menu from './components/Menu.tsx';
import Featured from './components/Featured.tsx';
import TrendingNow from './components/TrendingNow.tsx';
import sortBy from './utils/sortBy.ts';
import apiService from './services/api.ts';
import storageService from './services/storage.ts';
import { useEffect, useState } from 'react';
import type { MovieType } from './static/types.ts';

function App() {
  const [featuredData, setFeaturedData] = useState<MovieType>();
  const [trendingNowData, setTrendingNowData] = useState<MovieType[]>();

  useEffect(() => {
    apiService.getAllData().then(({ featured, trendingNow }: { featured: MovieType; trendingNow: MovieType[] }) => {
      setFeaturedData(featured);
      const trendingOrder = storageService.getIdsOrder();

      if (trendingOrder) {
        const trendingView = sortBy(trendingNow, JSON.parse(trendingOrder), 'Id');
        setTrendingNowData(trendingView.slice(0, 50));
      } else {
        const trendingView = trendingNow.sort((a: MovieType, b: MovieType) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
        storageService.setIdsOrder(trendingView.map(item => item.Id));
        setTrendingNowData(trendingView.slice(0, 50));
      }
    })
  }, []);

  return (
    <div className="flex h-screen">
      <Menu />
      {featuredData && trendingNowData &&
        <main className="pl-closed-menu h-screen flex flex-col overflow-y-auto w-full">
          <Featured data={featuredData} />
          <TrendingNow onSelect={(item: MovieType) => setFeaturedData(item)} data={trendingNowData} />
        </main>
      }
    </div>
  );
}

export default App;
