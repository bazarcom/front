import { useState, useEffect } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        onSearch(searchTerm);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Məhsul axtar..."
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
    />
  );
};

export default SearchInput;
