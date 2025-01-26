import { Link } from 'react-router-dom';

const Footer = () => {
     return (
          <footer className="bg-gray-800 text-white">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                         <div className="mb-4 md:mb-0">
                              <p>&copy; 2023 HoriZon. All rights reserved.</p>
                         </div>
                         <nav>
                              <ul className="flex space-x-4">
                                   <li>
                                        <Link to="/privacy" className="hover:text-blue-300">
                                             Privacy Policy
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to="/terms" className="hover:text-blue-300">
                                             Terms of Service
                                        </Link>
                                   </li>
                                   <li>
                                        <Link to="/contact" className="hover:text-blue-300">
                                             Contact Us
                                        </Link>
                                   </li>
                              </ul>
                         </nav>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;

