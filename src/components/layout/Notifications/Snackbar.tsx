import React from "react";

interface ISnackStates {
  [element: string]: { transform: string };
}

// Transition styling
const snackStates: ISnackStates = {
  entering: { transform: "translate3d(0, 120%, 0) scale(0.9)" },
  entered: { transform: "translate3d(0, 0, 0) scale(1)" },
  exiting: { transform: "translate3d(0, 120%, 0) scale(0.9)" },
  exited: { transform: "translate3d(0, 120%, 0) scale(0.9)" }
};

const Snackbar = ({
  onDismiss,
  transitionState
}: {
  onDismiss: any;
  transitionState: any;
}) => {
  return (
    <div className="w-screen lg:w-48 mb-10 px-2 pb-1">
      <div
        className="border rounded-sm border-gray-400 bg-gray-200 flex text-xs text-gray-600 p-2 justify-center dark:border-gray-700 dark:bg-gray-800 notification__snackbar"
        style={{ ...snackStates[transitionState] }}
      >
        Snack!
        <button onClick={onDismiss}>Test</button>
      </div>
    </div>
  );
};

export default Snackbar;
