import React, { useState } from "react";
import Me from "./Me";

const MeContainer = () => {
  const [currentTab, setCurrentTab] = useState("NEWS");
  return <Me></Me>;
};

export default MeContainer;
