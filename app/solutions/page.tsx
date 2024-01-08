'use client';
import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import SolutionCard from '../../components/card/SolutionCard';
import SearchInput from '../../components/SearchInput';
import SelectFilter from '../../components/SelectFilter';
import { solutions } from '@/assets/data/solutionsData';
import { extractUniqueValues } from '@/helpers';
import { solutionsType } from '@/types';
import CustomErrorMessage from '../../components/CustomErrorMessage';

const ComponentsPage = () => {
  const [filteredData, setFilteredData] = useState<solutionsType[]>(solutions);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <PageHeader
        pageTitle="All Solutions"
        pageSubTitle="Find out all the solutions at one place.">
        <div className="flex-grow w-full">
          <SearchInput
            placeholder="Search by name"
            data={solutions}
            setData={setFilteredData}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="flex gap-3 w-full">
          <SelectFilter
            options={extractUniqueValues(solutions, 'type')}
            label="Select by type"
            data={solutions}
            setData={setFilteredData}
            selectFor="filterBy"
            selectValue="type"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <SelectFilter
            options={['Serial', 'Title']}
            label="Sort by"
            data={filteredData}
            setData={setFilteredData}
            selectFor="sortBy"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </PageHeader>

      <div className="flex gap-4 flex-wrap justify-center xl:justify-start">
        {filteredData.length > 0 ? (
          filteredData.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))
        ) : (
          <CustomErrorMessage
            message="Nothing found"
            subMessage="No data found for your query"
            showResetBtn
            query={searchQuery}
            resetMessage="Remove search query"
            setQuery={setSearchQuery}
          />
        )}
      </div>
    </>
  );
};

export default ComponentsPage;
