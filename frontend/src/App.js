import { init as initApm } from "@elastic/apm-rum";
import { useEffect } from "react";

import { create, password, test } from "./services/api";

function App() {
  useEffect(() => {
    initApm({
      serviceName: "front",
      serverUrl: "http://localhost:8200",
      logLevel: "debug",
    });
  }, []);

  return (
    <>
      <button onClick={password}>Password</button>
      <button onClick={create}>Create</button>
      <button onClick={test}>Test</button>
    </>
  );
}

export default App;

// import { ApmRoute } from "@elastic/apm-rum-react";

// import { HomePage, Page } from "./components";

// function App() {
//   return (
//     <>
//       <ApmRoute path="/home" component={HomePage} />
//       <ApmRoute path="/page" component={Page} />
//     </>
//   );
// }

// export default App;
