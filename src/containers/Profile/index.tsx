import React from "react";
import { RouteComponentProps, withRouter, useParams } from "react-router-dom";
import MainLayout from "components/layout/MainLayout/MainLayout";

type TParams = { id: string };

const Profile = ({ match }: RouteComponentProps<TParams>) => {
  const router = useParams();
  console.log(router);
  return <MainLayout></MainLayout>;
};

export default withRouter(Profile);
