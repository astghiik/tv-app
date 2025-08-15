import type { MovieType } from '../static/types.ts';
import Button from './reusable/Button.tsx';

type Props = {
  data: MovieType;
}

function Featured({ data }: Props) {
  return (
    <div style={{ backgroundImage: `url(/images/${data.CoverImage})`}} className="h-screen w-full py-16">
      <div className="text-gray-500 uppercase font-semibold mb-4 text-2xl">{data.Category}</div>
      <img src={`/images/${data.TitleImage}`} alt="" />
      <div className="text-2xl mt-6">
        <span>{data.ReleaseYear}</span> <span>{data.MpaRating}</span> <span>{data.Duration}</span>
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
