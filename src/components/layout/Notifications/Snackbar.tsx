import React from "react";

interface ISnackStates {
  [element: string]: { transform: string };
}

// Transition styling
const snackStates: ISnackStates = {
  entering: { transform: "translate3d(0, 220%, 0)" },
  entered: { transform: "translate3d(0, 0, 0)" },
  exiting: { transform: "translate3d(0, 220%, 0)" },
  exited: { transform: "translate3d(0, 220%, 0)" }
};

const Snackbar = ({
  onDismiss,
  transitionState,
  transitionDuration,
  children
}: {
  onDismiss: any;
  transitionState: any;
  transitionDuration: any;
  children: any;
}) => {
  return (
    <div className="w-screen lg:w-48 mb-10 px-2 pb-1 z-0">
      <div
        className="border rounded-sm border-gray-400 bg-gray-200 flex text-xs text-gray-600 p-2 justify-center dark:border-gray-700 dark:bg-gray-800 notification__snackbar"
        style={{ ...snackStates[transitionState] }}
      >
        {children}
        <button
          className="p-1 bg-gray-900 text-white rounded ml-2"
          onClick={onDismiss}
        >
          {transitionDuration}
          Close modal
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
