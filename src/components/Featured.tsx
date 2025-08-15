import Button from './reusable/Button.tsx';
import formatDuration from '../utils/formatDuration.ts';
import { useEffect, useRef, useState } from 'react';
import type { MovieType } from '../static/types.ts';

type Props = {
  data: MovieType;
}

function Featured({ data }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoShow, setVideoShow] = useState<boolean>(false);

  useEffect(() => {
    setVideoShow(false);
    const timer = setTimeout(() => {
      setVideoShow(true);

      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => {});
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="h-full w-full py-16">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-cover bg-top-right -z-10" style={{backgroundImage: `url(/images/${data.CoverImage})`}}>
        {videoShow && (
          <video ref={videoRef} autoPlay muted loop className="min-w-full min-h-full fixed">
            <source src={data.VideoUrl} type="video/mp4"/>
            Your browser does not support HTML5 video.
          </video>
        )}
      </div>

      <h1 className="text-gray uppercase font-semibold mb-4 text-2xl">{data.Category}</h1>
      {data.TitleImage ? <img src={`/images/${data.TitleImage}`} alt="" /> : <h2 className="text-7xl font-bold">{data.Title}</h2>}
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
