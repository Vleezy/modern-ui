import FilterCheckbox from 'components/FilterCheckbox';
import Button from 'components/generic/Button';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { animated, useSpring } from 'react-spring';

interface ISearchbarProps {
  onChangeFunc: (value: string) => void;
  setGrid: (value: boolean) => void;
  grid: boolean;
}

const Searchbar = (props: ISearchbarProps) => {
  const { onChangeFunc, setGrid, grid } = props;

  const [expanded, setExpanded] = useState(false);

  // Animation styles for search bar using React Spring
  const searchExpandAnim = useSpring({
    maxHeight: expanded ? "100px" : "0px",
    opacity: expanded ? 1 : 0
  });

  const searchField = useRef() as MutableRefObject<HTMLInputElement>;

  const ESCAPE_KEY = 27;

  const handleEscKeyDown = (event: KeyboardEvent): void => {
    // Listen for escape key press
    if (event.keyCode !== ESCAPE_KEY) return;

    if (!expanded) {
      return;
    }

    setExpanded(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeyDown);
    return () => {
      document.removeEventListener("keydown", handleEscKeyDown);
    };
  }, [handleEscKeyDown]);

  return (
    <OutsideClickHandler onOutsideClick={() => setExpanded(false)}>
      <div className="flex w-full flex-wrap bg-gray-300 rounded text-sm dark:bg-gray-800">
        <button onClick={() => searchField.current.focus()}>
          <i
            className="fas fa-search self-center p-2 text-sm rounded-l text-gray-500"
            style={{ transition: "color 350ms" }}
          />
        </button>
        <input
          type="text"
          spellCheck="false"
          className="flex-1 py-1 px-1 pb-1 bg-transparent dark:text-gray-600 dark:placeholder-gray-600"
          placeholder="Search Habbos..."
          onFocus={() => setExpanded(true)}
          onChange={e => onChangeFunc(e.target.value)}
          ref={searchField}
        />
        <button className="text-sm px-2" onClick={() => setGrid(!grid)}>
          <i className={`fas fa-${grid ? "list" : "th"} text-gray-500`} />
        </button>
        <animated.div
          style={searchExpandAnim}
          className="flex w-full overflow-hidden"
        >
          <div className="p-1 w-full flex-wrap flex">
            <h4 className="w-full font-semibold dark:text-gray-600">
              Filter by:
            </h4>
            <div className="mr-1">
              <FilterCheckbox>Friends</FilterCheckbox>
            </div>
            <div className="mr-1">
              <FilterCheckbox>Online</FilterCheckbox>
            </div>
            <div className="mr-1">
              <FilterCheckbox>Friends</FilterCheckbox>
            </div>
          </div>
        </animated.div>
      </div>
    </OutsideClickHandler>
  );
};

export default Searchbar;
