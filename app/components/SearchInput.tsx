import { Icon } from '@iconify/react/dist/iconify.js';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface SearchInputProps {
  placeholder: string;
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  data,
  searchQuery,
  setSearchQuery,
  setData,
}) => {
  // Search query handler
  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    let tempData = data;
    tempData = data.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(tempData);

    // eslint-disable-next-line
  }, [searchQuery, data, setData]);

  return (
    <div className="flex items-center flex-grow relative w-full">
      <Icon
        icon="ic:sharp-search"
        height={24}
        width={24}
        className="absolute left-2 text-gray-500"
      />
      <input
        className="w-full flex-grow pr-4 pl-10 py-2 bg-gray-50 border outline-none rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-gray-500 text-gray-600 transition-all"
        type="search"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchQuery}
      />
    </div>
  );
};

export default SearchInput;
