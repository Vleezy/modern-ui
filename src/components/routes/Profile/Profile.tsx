import React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import MainLayout from "components/layout/MainLayout";

type TParams = { id: string };

const Profile = ({ match }: RouteComponentProps<TParams>) => {
  return <MainLayout></MainLayout>;
};

export default withRouter(Profile);
