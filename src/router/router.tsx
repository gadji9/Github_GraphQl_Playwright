import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Routes as Views } from "./Routes/routes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {Views.map((view) => (
          <Route
            key={view.path}
            path={view.path}
            element={
              <Suspense fallback={<div>...</div>}>
                <view.element />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
