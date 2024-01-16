import React from 'react';
import SearchInput from './SearchInput';
import SelectFilter from './SelectFilter';

interface PageHeaderProps {
  pageTitle: string;
  pageSubTitle?: string;
  children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  pageSubTitle,
  children,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold tracking-wide">{pageTitle}</h2>
        <h3 className="text-sm text-gray-800/50">{pageSubTitle}</h3>
      </div>

      <div className="my-6 flex justify-between gap-4 flex-wrap md:flex-nowrap md:gap-6 lg:gap-12">
        {children}
      </div>
    </>
  );
};

export default PageHeader;
