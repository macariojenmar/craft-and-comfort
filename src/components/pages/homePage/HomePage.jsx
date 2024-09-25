import React, { Fragment } from "react";
import { Banner } from "./Banner";
import AppLayout from "../../../layouts/AppLayout";
import { FurnitureList } from "../../ui/list/FurnitureList";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <AppLayout>
        <FurnitureList showTitle={false}/>
      </AppLayout>
    </Fragment>
  );
};

export default HomePage;