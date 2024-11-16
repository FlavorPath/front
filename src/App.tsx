import React from "react";
import ErrorBoundary from "./utils/hooks/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <div>App</div>
      </ErrorBoundary>
    </>
  );
}

export default App;
