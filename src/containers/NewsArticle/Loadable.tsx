import React from "react";

import loadable from "utils/loadable";

import HovercraftSpinner from "components/shared/spinners/HovercraftSpinner";

export default loadable(() => import("./index"), {
  fallback: <HovercraftSpinner />
});
