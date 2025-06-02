import { HashRouter, NavLink } from 'react-router-dom';
import { AppRoutes } from './routes';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded transition-colors duration-300 font-medium ${isActive ? 'bg-blue-800 text-white shadow-lg' : 'text-white hover:bg-blue-700 dark:text-gray-100 dark:hover:bg-blue-800'} focus:outline-none focus:ring-2 focus:ring-blue-400`;

const App = () => {
  return (
    <HashRouter>
      <header className="w-full flex justify-start py-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 shadow-lg mb-8 animate-fade-in dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
        <nav className="flex gap-6 w-full max-w-5xl mx-auto px-4">
          <NavLink to="/" end className={navLinkClass} aria-label="Home">Hello</NavLink>
          <NavLink to="/about" className={navLinkClass} aria-label="About">About</NavLink>
        </nav>
      </header>
      <main id="main-content" className="flex-1 flex flex-col items-center justify-center animate-fade-in bg-gradient-to-br from-white via-gray-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 min-h-[60vh] w-full transition-colors duration-500">
        <AppRoutes />
      </main>
    </HashRouter>
  );
};

export { App };
