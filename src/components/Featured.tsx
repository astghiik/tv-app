import type { MovieType } from '../static/types.ts';
import Button from './reusable/Button.tsx';
import formatDuration from '../utils/formatDuration.ts';

type Props = {
  data: MovieType;
}

function Featured({ data }: Props) {
  return (
    <div className="bg-cover h-full w-full py-16">
      <h1 className="text-gray uppercase font-semibold mb-4 text-2xl">{data.Category}</h1>
      <img src={`/images/${data.TitleImage}`} alt="" />
      <div className="text-2xl mt-6">
        <span>{data.ReleaseYear}</span> <span>{data.MpaRating}</span> <span>{formatDuration(+data.Duration)}</span>
      </div>
      <p className="text-2xl mt-4">{data.Description}</p>
      <div className="flex gap-4 mt-7">
        <Button color="secondary" onClick={() => {}}>▶ Play</Button>
        <Button onClick={() => {}}>More Info</Button>
      </div>
    </div>
  );
}

export default Featured;
