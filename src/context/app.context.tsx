import { IUser } from 'models/user/IUser';
import * as React from 'react';

/**
 * Types to be dispatched
 */
type Types = "setUser" | "setHomeTab" | "setThemeColor";

/**
 * Action type
 */
export type Action = {
  type: Types;
  value: any;
};

/**
 * Context State
 */
type State = Partial<{
  user: IUser;
  currentHomeTab: string;
  themeColor: string;
}>;

type Dispatch = (action: Action) => void;

/**
 * Context Providers
 */
const AppStateContext = React.createContext<State | undefined>(undefined);
const AppDispatchContext = React.createContext<Dispatch | undefined>(undefined);

/**
 * Reducer
 */
const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.value };

    case "setHomeTab":
      return { ...state, currentHomeTab: action.value };

    case "setThemeColor":
      return { ...state, themeColor: action.value };
    default:
      throw new Error(`Action ${action.type} not found.`);
  }
};

interface IAppProviderProps {
  children: React.ReactNode;
  customState?: Partial<State>;
}

export const AppProvider = (props: IAppProviderProps) => {
  const { children, customState } = props;

  const [state, dispatch] = React.useReducer(appReducer, {
    user: undefined,
    currentHomeTab: process.env.REACT_APP_DEFAULT_TAB ?? "",
    themeColor: localStorage.getItem("themeColor") || ""
  });

  return (
    <AppStateContext.Provider value={customState ?? state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = React.useContext(AppStateContext);

  if (context === undefined)
    throw new Error("useAppState must be used within a AppProvider.");

  return context;
};

export const useAppDispatch = () => {
  const context = React.useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider.");
  }

  return context;
};

export const useApp = (): [State, Dispatch] => {
  return [useAppState(), useAppDispatch()];
};
