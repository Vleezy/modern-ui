import { useState, useEffect } from "react";

const useTest = (initialVariable: string): string => {
  let number = 1;
  number++;
  const [variable, setVariable] = useState(initialVariable + number);

  return variable;
};

export default useTest;
