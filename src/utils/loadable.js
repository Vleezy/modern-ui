import React, { lazy, Suspense } from "react";

/**
 * React lazy and Suspense wrapper from src/utils/loadabale.js in react-boilerplate.
 */
const loadable = (importFunc, { fallback = null }) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
