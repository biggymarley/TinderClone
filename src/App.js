import React, { Suspense, useState } from "react";
import Loading from "./content/Loading/Loading";
import { createTheme, ThemeProvider } from '@mui/material/styles';
export const LogginContext = React.createContext(false);
function App() {
  const [Islogged, setIslogged] = useState(true);
  const Dashboard = React.lazy(() => Getdashboard());
  const HomeRoot = React.lazy(() => GetHomeRoot());

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fe3f61',
    },
  },
});
  return (
    <ThemeProvider theme={theme}>
    <Suspense fallback={<Loading />}>
      <LogginContext.Provider value={{ Islogged, setIslogged }}>
        <div className="fadein">{Islogged ? <Dashboard /> : <HomeRoot />}</div>
      </LogginContext.Provider>
    </Suspense>
    </ThemeProvider>
  );
}

export default App;

const Getdashboard = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./content/Dashboard/Dashboard.js")), 0);
  });
};

const GetHomeRoot = async () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./content/Home/HomeContent/HomeRoot")),
      0

    );
  });
};
