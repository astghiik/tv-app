import Carousel from './reusable/Carousel.tsx';
import type { MovieType } from '../static/types.ts';

type Props = {
  data: MovieType[];
}

function TrendingNow({ data }: Props) {
  return (
    <div>
      <h2 className="text-2xl mb-3">Trending Now</h2>
      <Carousel>
        {data.map((item: MovieType) => (
          <div>
            <img src={`images/${item.CoverImage}`} alt=""/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TrendingNow;
