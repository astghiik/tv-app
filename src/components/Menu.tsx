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
    <aside className="fixed z-50 group flex transition-all duration-300 w-closed-menu hover:w-opened-menu flex-col justify-between gap-8 left-0 h-full overflow-x-hidden overflow-y-auto hide-scrollbar">
      <div className="z-50 pt-9 flex flex-col justify-between gap-8 h-full overflow-x-hidden overflow-y-auto hide-scrollbar">
        <div>
          <div className="opacity-0 px-9 transition-opacity duration-300 group-hover:opacity-100 flex text-2xl font-semibold items-center gap-6 mb-5">
            <img src="https://static.wikia.nocookie.net/thesquidgame/images/5/51/Seong_Gi-hun_2020.jpg" alt="avatar" width="82" height="82" className="rounded-full object-cover h-[82px]"/>
            <span>Daniel</span>
          </div>
          <ul className="flex flex-col gap-4 transition-all duration-300 w-closed-menu group-hover:w-opened-menu">
            {menuItems.map((item: { label: string; icon: string }, i: number) => (
              <li key={i} className="w-full px-9">
                <a
                  href="#"
                  className={`w-full flex items-center gap-13 px-6 py-4 text-2xl group-hover:rounded-xl rounded-full transition-colors duration-300 cursor-pointer ${i === 1 ? 'bg-primary' : ''}`}
                >
                  <img src={item.icon} alt="" />
                  <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 leading-0 whitespace-nowrap">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-start gap-3 flex-col uppercase text-xl text-gray font-semibold pl-15 pb-9">
          <a href="#">language</a>
          <a href="#">get help</a>
          <a href="#">exit</a>
        </div>
      </div>
      <div className="hidden hover:hidden fixed -z-10 left-0 top-0 right-0 bottom-0 group-hover:block bg-[linear-gradient(90deg,#040404_0%,#040404FA_21%,#04040400_100%)]"></div>
    </aside>
  );
}

export default Menu;
