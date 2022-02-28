import { useEffect } from "react";

import { password } from "../services/api";

export const HomePage = () => {
  useEffect(() => {
    password();
  }, []);

  return (
    <>
      <h1>Home Works</h1>
    </>
  );
};
