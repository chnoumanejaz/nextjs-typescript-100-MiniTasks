'use client';
import React, { useEffect, useState } from 'react';

interface SelectFilterProps {
  options: string[];
  label: string;
  data: any[];
  selectFor: 'filterBy' | 'sortBy';
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  selectValue?: string;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface selectedOptions {
  filterBy: string;
  sortBy: string;
}

const SelectFilter: React.FC<SelectFilterProps> = ({
  options,
  label,
  data,
  setData,
  selectFor,
  selectValue,
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedOption, setSelectedOption] = useState<selectedOptions>({
    filterBy: 'all',
    sortBy: 'all',
  });

  function handleSelectOption(e: React.ChangeEvent<HTMLSelectElement>) {
    if (selectFor === 'filterBy') {
      setSearchQuery('');
      setSelectedOption({ ...selectedOption, filterBy: e.target.value });
    } else {
      setSelectedOption({ ...selectedOption, sortBy: e.target.value });
      handleSortBy(e.target.value);
    }
  }

  function handleFilterBy() {
    let tempData = data;
    if (selectValue) {
      tempData = data.filter(
        item => item[selectValue] === selectedOption.filterBy
      );
    }
    setData(tempData);
  }

  function handleSortBy(value: string) {
    let selectedValue = value.toLowerCase();
    let tempData = data;

    if (selectedValue.includes('serial')) {
      tempData = data.toSorted((a, b) => a[selectedValue] - b[selectedValue]);
    } else {
      tempData = data.toSorted((a, b) =>
        a[selectedValue].localeCompare(b[selectedValue], 'en', {
          sensitivity: 'base',
        })
      );
    }
    setData(tempData);
  }

  useEffect(() => {
    if (searchQuery.trim().length === 1) {
      setSelectedOption({ filterBy: 'all', sortBy: 'all' });
    }
  }, [searchQuery, setSelectedOption]);

  useEffect(() => {
    handleFilterBy();
    // eslint-disable-next-line
  }, [selectedOption.filterBy]);

  return (
    <select
      className="w-full px-4 py-2 cursor-pointer bg-gray-50 border outline-none focus:ring-gray-500 focus:ring-2 rounded-md text-gray-600 transition-all"
      onChange={handleSelectOption}
      value={
        selectFor === 'filterBy'
          ? selectedOption.filterBy
          : selectedOption.sortBy
      }>
      <option value="all" disabled className="bg-gray-200 text-inherit text-sm">
        {label}
      </option>
      {options.map((option, index) => (
        <option key={option + index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
