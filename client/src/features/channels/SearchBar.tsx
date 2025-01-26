import { Search } from "lucide-react";

interface SearchBarProps {
     searchQuery: string;
     setSearchQuery: (query: string) => void;
     handleSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, handleSearch }) => {
     return (
          <form onSubmit={(e) => { e.preventDefault(); handleSearch(searchQuery); }} className="mb-4">
               <div className="relative">
                    <input
                         type="text"
                         placeholder="Search channels..."
                         value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)}
                         className="w-full pl-10 bg-blue-700 text-white placeholder-blue-300 border-blue-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" size={18} />
               </div>
          </form>
     );
};

export default SearchBar;
