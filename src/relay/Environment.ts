// @ts-ignore
const { Environment, Network, RecordSource, Store } = require("relay-runtime");

// import { Environment, Network, RecordSource, Store } from "react-relay";

const source = new RecordSource();

const API_ENDPOINT =
  process.env.API_ENDPOINT || "http://localhost:5000/graphql";

const fetchQuery = (operation: any, variables: any) => {
  return fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(res => res.json());
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(source)
});

export default environment;
