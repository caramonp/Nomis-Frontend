import React, { useContext } from "react";

import Context from "../context";

const Text = () => {
  const value = useContext(Context);
  console.log("value ", value);
  return <h1> hola </h1>;
};

export default Text;
