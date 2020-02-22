import { useState, useEffect } from "react";

const useFetch = (url: string, options: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
      } catch (err) {
        setError(err);
      }
    })();
  }, [url]);

  return { response, error };
};

export default useFetch;
