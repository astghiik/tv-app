import iconSearch from '../assets/icons/search.png';
import iconHome from '../assets/icons/home.png';
import iconShows from '../assets/icons/shows.png';
import iconMovies from '../assets/icons/movies.png';
import iconGenres from '../assets/icons/genres.png';
import iconWatchLater from '../assets/icons/watch-later.png';
import { useState } from 'react';

const menuItems: { label: string; icon: string }[] = [
  { label: 'Search', icon: iconSearch },
  { label: 'Home', icon: iconHome },
  { label: 'TV Shows', icon: iconShows },
  { label: 'Movies', icon: iconMovies },
  { label: 'Genres', icon: iconGenres },
  { label: 'Watch Later', icon: iconWatchLater },
];

function Menu() {
  const [active, setActive] = useState<number>(1);

  return (
    <aside className="h-screen overflow-y-auto p-8 fixed w-full">
      <ul className="menu-ul flex flex-col gap-4 transition-all duration-300 w-[150px] group hover:w-[800px] hover:before:content-['']">
        {menuItems.map((item: { label: string; icon: string }, i: number) => (
          <li key={i}>
            <button
              onClick={() => setActive(i)}
              type="button"
              className={`w-full flex items-center gap-4 p-4 text-2xl rounded-xl transition-colors duration-300 cursor-pointer ${
                active === i ? 'bg-primary' : ''
              }`}
            >
              <img src={item.icon} alt="" />
              <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 leading-0">
            {item.label}
          </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Menu;
