import React, { FunctionComponent } from "react";

import DefaultLayout from "layouts/DefaultLayout";

import RepositoriesTable from "@/components/Blocks/Tables/Repositories/Repositories";

const Repositories: FunctionComponent = () => {
  return (
    <DefaultLayout>
      <div className="w-full h-full flex justify-center items-center">
        <RepositoriesTable />
      </div>
    </DefaultLayout>
  );
};

export default Repositories;
