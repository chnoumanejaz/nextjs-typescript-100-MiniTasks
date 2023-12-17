'use client';
import React, { useState } from 'react';

interface SelectFilterProps {
  options: string[];
  label: string;
}

const SelectFilter: React.FC<SelectFilterProps> = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState<string>('all');

  return (
    <select
      className="w-full px-4 py-2 cursor-pointer bg-gray-50 border outline-none focus:ring-gray-500 focus:ring-2 rounded-md text-gray-600 transition-all"
      onChange={e => setSelectedOption(e.target.value)}
      value={selectedOption}>
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
