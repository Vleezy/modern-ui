import React, { useState, useRef, MutableRefObject } from "react";
import { useSpring, animated } from "react-spring";

import OutsideClickHandler from "react-outside-click-handler";

interface ISearchbarProps {
  onChangeFunc: (value: string) => void;
}

const Searchbar = (props: ISearchbarProps) => {
  const { onChangeFunc } = props;

  const [expanded, setExpanded] = useState(false);
  const [focused, setFocused] = useState(false);

  // Animation styles for search bar using React Spring
  const searchExpandAnim = useSpring({
    maxHeight: expanded ? "100px" : "0px",
    opacity: expanded ? 1 : 0
  });

  const searchField = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setExpanded(false);
        setFocused(false);
      }}
    >
      <div className="flex w-full flex-wrap bg-gray-300 rounded text-sm dark:bg-gray-800">
        <button onClick={() => searchField.current.focus()} className="">
          <i
            className={`fas fa-search self-center p-2 text-sm rounded-l ${
              focused ? "text-blue-500" : "text-gray-500"
            }`}
            style={{ transition: "color 350ms" }}
          />
        </button>
        <input
          type="text"
          spellCheck="false"
          className="flex-1 py-1 px-1 pb-1 bg-transparent dark:text-gray-600 dark:placeholder-gray-600"
          placeholder="Search Habbos..."
          onFocus={() => {
            setExpanded(true);
            setFocused(true);
          }}
          onChange={e => onChangeFunc(e.target.value)}
          ref={searchField}
        />
        <animated.div
          style={searchExpandAnim}
          className="flex w-full overflow-hidden"
        >
          <div className="p-1 w-full flex-wrap flex">
            <h4 className="w-full font-semibold dark:text-gray-600">Filter</h4>
            <label
              htmlFor="filter-friends"
              className="text-xs dark:text-gray-600 flex"
            >
              <input
                id="filter-friends"
                type="checkbox"
                className="self-center mr-1"
              />
              Friends only
            </label>
          </div>
        </animated.div>
      </div>
    </OutsideClickHandler>
  );
};

export default Searchbar;
