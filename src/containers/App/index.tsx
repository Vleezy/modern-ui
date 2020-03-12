import * as React from "react";

/**
 * Dependencies
 */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { useAppDispatch } from "context/app.context";
import * as AppActions from "../../context/app.actions";

/**
 * Components
 */
import Me from "containers/MePage/Loadable";
import NewsArticle from "containers/NewsArticle";
import Login from "containers/Login";
import Profile from "containers/Profile";
import Settings from "containers/Settings/Settings";
import AccountSettings from "containers/Settings/AccountSettings";
import PageNotFound from "containers/PageNotFound";
import { ModalProvider } from "context/modal/modal.context";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(AppActions.fetchUser());
  }, [dispatch]);

  return (
    <React.StrictMode>
      <Router>
        <ModalProvider>
          <Switch>
            <Redirect exact path="/" to="/me" />

            <Route exact path="/me" component={Me} />
            <Route path="/community/news/:articleId" component={NewsArticle} />
            <Route path="/login" component={Login} />
            <Route path="/profile/:user" component={Profile} />

            <Route path="/settings" exact component={Settings} />
            <Route path="/settings/account" component={AccountSettings} />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </ModalProvider>
      </Router>
    </React.StrictMode>
  );
};
