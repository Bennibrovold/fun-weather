import { Helmet } from "react-helmet";

import Template from "./template/";

import "./default.scss";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fun Weather.</title>
      </Helmet>
      <Template>
        {/* all routes in application to our pages serves in Routes Component */}
        <Main />
      </Template>
    </>
  );
}

export default App;
