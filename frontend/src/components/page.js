import { useEffect } from "react";

import { test } from "../services/api";

export const Page = () => {
  useEffect(() => {
    test();
  }, []);

  return (
    <>
      <h1>Page Works</h1>
    </>
  );
};
