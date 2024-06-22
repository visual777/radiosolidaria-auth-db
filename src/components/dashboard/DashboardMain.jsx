"use client";

import { useState } from "react";
import AddNew from "./AddNew/AddNew";
import AllVideos from "./AllVideos/AllVideos";
import AddVideoForm from "./AddVideoForm/AddVideoForm";
import css from "./DashboardMain.module.css";

const DashboardMain = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1 className={css.title}>Administrador de Solidaria Media</h1>
      <AddNew setShowModal={setShowModal}/>
      <AllVideos />
      {showModal && <AddVideoForm setShowModal={setShowModal} />}
    </div>
  );
};

export default DashboardMain;
