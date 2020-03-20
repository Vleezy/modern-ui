import React from 'react';

interface IFilterBoxProps {
  children: React.ReactNode;
}

const FilterCheckbox = (props: IFilterBoxProps) => {
  const { children } = props;

  return (
    <label className="filter-checkbox">
      <input type="checkbox" className="opacity-0 absolute h-0 w-0" />
      <div className="filter-checkbox__inner px-2 py-1 border border-gray-400 rounded">
        <span className="text-sm text-gray-600">{children}</span>
      </div>
    </label>
  );
};

export default FilterCheckbox;
