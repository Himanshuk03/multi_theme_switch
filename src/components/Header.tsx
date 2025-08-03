import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <>
      {/* Marquee section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm py-1 overflow-hidden">
        <div className="animate-marquee-left-to-right px-6">
          <i className="fa-solid fa-phone fa-shake fa-sm" style={{ color: 'red' }}></i>
          &nbsp;Contact us at: +91 9876543210 &nbsp;|&nbsp;
          <i className="fa-solid fa-envelope fa-fade"></i>
          &nbsp;Email: support@shoptime.com
        </div>
      </div>

      {/* Navigation Bar */}
      <header style={{backgroundImage: 'linear-gradient(to right, #527dc2ff, #1662dcff, #93c5fd)' }} className="h-[60px] shadow-md w-full fixed top-[26px] left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
          
          <div className="text-[30px] font-bold text-black dark:text-white">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity duration-300 ml-[15px] no-underline">
              🌗 Theme Switcher
            </Link>
          </div>

          {/* Navigation part */}
          <div className="flex space-x-6">
            <nav
              aria-label="Main Navigation"
              className="flex items-center text-[30px] text-black dark:text-white font-medium">
              <Link to="/" className="relative group mr-[15px] no-underline">
                Home
                <span className="absolute bottom-[-6px] left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link to="/about" className="relative group mr-[15px] no-underline">
                About
                <span className="absolute bottom-[-6px] left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link to="/contact" className="relative group mr-[15px] no-underline">
                Contact
                <span className="absolute bottom-[-6px] left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <div className="ml-6 mr-[15px]">
                <ThemeSwitcher />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
