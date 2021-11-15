import React, { Suspense } from "react";
import Loading from './Loading/Loading';

function App() {
  const HomeRoot = React.lazy(async () => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(import("./content/Home/HomeContent/HomeRoot")),
        1000
      );
    });
  });

  return (
    <Suspense fallback={<Loading />}>
      <HomeRoot />
    </Suspense>
  );
}

export default App;
