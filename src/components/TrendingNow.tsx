import Carousel from './reusable/Carousel.tsx';
import storageService from '../services/storage.ts';
import type { MovieType } from '../static/types.ts';

type Props = {
  data: MovieType[];
  onSelect: (item: MovieType) => void;
}

function TrendingNow({ data, onSelect }: Props) {
  const onItemSelect = (item: MovieType) => {
    storageService.reorderIds(item.Id);
    onSelect(item);
  }

  return (
    <div>
      <h2 className="text-2xl mb-3">Trending Now</h2>
      <Carousel>
        {data.map((item: MovieType) => (
          <button onClick={() => onItemSelect(item)} key={item.Id} type="button" className="block">
            <img src={`images/${item.CoverImage}`} alt=""/>
          </button>
        ))}
      </Carousel>
    </div>
  );
}

export default TrendingNow;
