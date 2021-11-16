import React, { Suspense } from "react";
import Loading from './content/Loading/Loading';

function App() {
  const HomeRoot = React.lazy(async () => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(import("./content/Home/HomeContent/HomeRoot")),
        2000
      );
    });
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className='fadein'>
      <HomeRoot />
      </div>
    </Suspense>
  );
}

export default App;
