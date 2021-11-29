import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./content/Loading/Loading";

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
    backgroundGraycolor:{
      main: "#f0f2f4"
    }
  },
});
  return (
    <ThemeProvider theme={theme}>
    <Suspense fallback={<Loading />}>
      <LogginContext.Provider value={{ Islogged, setIslogged }}>
      <BrowserRouter>
        <div className="fadein">{Islogged ? <Dashboard /> : <HomeRoot />}</div>
        </BrowserRouter>
      </LogginContext.Provider>
    </Suspense>
    </ThemeProvider>
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
