import React from 'react';
import PageHeader from '../components/PageHeader';
import SolutionCard from '../components/card/SolutionCard';
import SearchInput from '../components/SearchInput';
import SelectFilter from '../components/SelectFilter';
import { solutions } from '@/assets/data/solutionsData';
import { extractUniqueValues } from '@/helpers';

const ComponentsPage = () => {
  return (
    <>
      <PageHeader
        pageTitle="All Solutions"
        pageSubTitle="Find out all the solutions at one place.">
        <div className="flex-grow w-full">
          <SearchInput placeholder="Search by name" />
        </div>
        <div className="flex gap-3 w-full">
          <SelectFilter
            options={extractUniqueValues(solutions, 'type')}
            label="Select by type"
          />
          <SelectFilter options={['Serials', 'Name']} label="Sort by" />
        </div>
      </PageHeader>

      <div className="flex gap-4 flex-wrap justify-center xl:justify-start">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} solution={solution} />
        ))}
      </div>
    </>
  );
};

export default ComponentsPage;
