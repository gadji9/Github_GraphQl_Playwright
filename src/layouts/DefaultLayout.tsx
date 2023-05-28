import { FunctionComponent } from "react";

import { ReactFN } from "../types/global";

const DefaultLayout: FunctionComponent<ReactFN> = ({ children }) => {
  return (
    <>
      <div className="h-screen w-screen bg-white flex overflow-auto">
        <div className="w-full h-full px-5 pt-6 lg:py-10 lg:pl-10 bg-white ">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
