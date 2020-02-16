import React from "react";

interface ISwitchProps {
  onChange: () => void;
  checked: boolean;
}

const Switch = (props: ISwitchProps) => {
  const { onChange, checked } = props;

  return (
    <div className="inline-block float-right">
      <div className="relative">
        <input
          id="toogleA"
          type="checkbox"
          className="hidden"
          onChange={() => onChange()}
          checked={checked}
        />
        <div className="toggle__line w-10 h-5 bg-bg-secondary rounded-full " />
        <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow-md inset-y-0 left-0" />
      </div>
    </div>
  );
};

export default Switch;
