import iconSearch from '../assets/icons/search.png';
import iconHome from '../assets/icons/home.png';
import iconShows from '../assets/icons/shows.png';
import iconMovies from '../assets/icons/movies.png';
import iconGenres from '../assets/icons/genres.png';
import iconWatchLater from '../assets/icons/watch-later.png';

const menuItems: { label: string; icon: string }[] = [
  { label: 'Search', icon: iconSearch },
  { label: 'Home', icon: iconHome },
  { label: 'TV Shows', icon: iconShows },
  { label: 'Movies', icon: iconMovies },
  { label: 'Genres', icon: iconGenres },
  { label: 'Watch Later', icon: iconWatchLater },
];

function Menu() {
  return (
    <aside className="p-9 fixed">
      <ul className="menu-ul flex flex-col gap-4 transition-all duration-300 w-[78px] group hover:w-[270px] hover:before:content-['']">
        {menuItems.map((item: { label: string; icon: string }, i: number) => (
          <li key={i} className="w-full">
            <a
              href="#"
              className={`w-full flex items-center gap-13 p-6 text-2xl group-hover:rounded-xl rounded-full transition-colors duration-300 cursor-pointer ${i === 1 ? 'bg-primary' : ''}`}
            >
              <img src={item.icon} alt="" />
              <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 leading-0 whitespace-nowrap">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Menu;
