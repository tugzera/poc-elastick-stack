import { init as initApm } from "@elastic/apm-rum";
import { useEffect } from "react";

import { test } from "./services/api";

const apm = initApm({
  serverUrl: "http://localhost:8200/",
  serviceName: "frontend",
  environment: "production",
  serviceVersion: "0.9",
  logLevel: "debug",
  distributedTracingOrigins: ["http://localhost:3333"],
});

const onClick = async () => {
  console.log("ENTRAAAAA");
  const res = await test();
  console.log("AKIIIIII", res);
};

function App() {
  useEffect(() => {
    const res = test();
    console.log("AQUI", res);
  });

  return (
    <button onClick={onClick}>Test</button>
    // <BrowserRouter>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/home">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/page">Page</Link>
    //       </li>
    //     </ul>

    //     <hr />

    //     <ApmRoute exact path="/home" component={HomePage} />
    //     <ApmRoute path="/page" component={Page} />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
