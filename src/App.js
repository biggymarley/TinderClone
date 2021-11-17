import React, { Suspense, useState } from "react";
import Loading from "./content/Loading/Loading";
export const LogginContext = React.createContext(false);
function App() {
  const [Islogged, setIslogged] = useState(false);
  const Dashboard = React.lazy(() => Getdashboard());
  const HomeRoot = React.lazy(() => GetHomeRoot());

  return (
    <Suspense fallback={<Loading />}>
      <LogginContext.Provider value={{ Islogged, setIslogged }}>
        <div className="fadein">{Islogged ? <Dashboard /> : <Dashboard />}</div>
      </LogginContext.Provider>
    </Suspense>
  );
}

export default App;

const Getdashboard = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./content/Dashboard/Dashboard.js")), 2000);
  });
};

const GetHomeRoot = async () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./content/Home/HomeContent/HomeRoot")),
      2000
    );
  });
};
