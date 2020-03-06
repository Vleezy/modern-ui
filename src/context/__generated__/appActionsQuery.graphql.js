/**
 * @flow
 * @relayHash 979b3df31c5535d2977b50e56a60e076
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appActionsQueryVariables = {|
  userID: number
|};
export type appActionsQueryResponse = {|
  +user: {|
    +username: string,
    +look: string,
  |}
|};
export type appActionsQuery = {|
  variables: appActionsQueryVariables,
  response: appActionsQueryResponse,
|};
*/


/*
query appActionsQuery(
  $userID: Int!
) {
  user(id: $userID) {
    username
    look
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userID",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "userID"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "look",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "appActionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "appActionsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "appActionsQuery",
    "id": null,
    "text": "query appActionsQuery(\n  $userID: Int!\n) {\n  user(id: $userID) {\n    username\n    look\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8436af423bcfcc58eec563c00f88bc99';

module.exports = node;
