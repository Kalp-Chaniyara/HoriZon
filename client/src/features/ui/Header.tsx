import { UserButton } from '@clerk/clerk-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

type NavItem = {
     label: string;
     to: string;
};

const navItems: NavItem[] = [
     { label: 'Home', to: '/' },
     { label: 'About', to: '/about' },
];

const Header = () => {

     const { isSignedIn, isLoaded } = useUser();

     const navigate = useNavigate();

     const [isOpen, setIsOpen] = useState(false);

     return (
          <header className="bg-white shadow-md sticky top-0 z-50">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex justify-between items-center py-4">
                         <div className="flex items-center">
                              <Link to="/" className="flex items-center space-x-2">
                                   <span className="text-xl font-semibold text-blue-600">HoriZon</span>
                              </Link>
                         </div>
                         <div className="hidden md:flex items-center space-x-6">
                              <nav>
                                   <ul className="flex space-x-6">
                                        {navItems.map((item) => (
                                             <li key={item.label}>
                                                  <Link
                                                       to={item.to}
                                                       className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                                                  >
                                                       {item.label}
                                                  </Link>
                                             </li>
                                        ))}
                                   </ul>
                              </nav>
                              {!isLoaded ? (
                                   <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                              ) : isSignedIn ? (
                                   <UserButton />
                              ) : (
                                   <button
                                        onClick={() => navigate('/sign-in')}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
                                   >
                                        Sign In
                                   </button>
                              )}
                         </div>
                         <div className="md:hidden">
                              <button
                                   onClick={() => setIsOpen(!isOpen)}
                                   className="text-gray-600 hover:text-blue-600 focus:outline-none transition duration-300 ease-in-out"
                              >
                                   <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                        {isOpen ? (
                                             <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                        ) : (
                                             <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                        )}
                                   </svg>
                              </button>
                         </div>
                    </div>
                    {isOpen && (
                         <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                              <nav className="mt-4">
                                   <ul className="space-y-4">
                                        {navItems.map((item) => (
                                             <li key={item.label}>
                                                  <Link
                                                       to={item.to}
                                                       className="block text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out"
                                                  >
                                                       {item.label}
                                                  </Link>
                                             </li>
                                        ))}
                                        {isSignedIn ? (
                                             <li>
                                                  {/* <button
                                                       onClick={() => navigate('/profile')}
                                                       className="block text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                                                  >
                                                       Profile
                                                  </button> */}
                                                  <UserButton />
                                             </li>
                                        ) : (
                                             <li>
                                                  <button
                                                       onClick={() => navigate('/sign-in')}
                                                       className="block text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                                                  >
                                                       Sign In
                                                  </button>
                                             </li>
                                        )}
                                   </ul>
                              </nav>
                         </div>
                    )}
               </div>
          </header>
     );
};

export default Header;

