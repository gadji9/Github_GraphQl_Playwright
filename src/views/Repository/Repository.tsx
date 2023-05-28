import { FunctionComponent } from "react";

import DefaultLayout from "@/layouts/DefaultLayout";

import RepositoryBlock from "@/components/Blocks/Pages/Repository/Repository";

const Repository: FunctionComponent = () => {
  return (
    <>
      <DefaultLayout>
        <div className="w-full h-full flex flex-column justify-center items-center">
          <RepositoryBlock />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Repository;
