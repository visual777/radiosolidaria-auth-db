"use client";

import { useState, useEffect } from "react";
import AddNew from "./AddNew/AddNew";
import AllVideos from "./AllVideos/AllVideos";
import AddVideoForm from "./AddVideoForm/AddVideoForm";
import css from "./DashboardMain.module.css";

const DashboardMain = () => {
  const [showModal, setShowModal] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/allVideos', {
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
      .then(response => response.json())
      .then(dataVideo => setVideos(dataVideo.data));
  }, []);

  return (
    <div>
      <h1 className={css.title}>Administrador de Solidaria Media</h1>
      <AddNew setShowModal={setShowModal}/>
      <AllVideos videos={videos}/>
      {showModal && <AddVideoForm setShowModal={setShowModal} />}
    </div>
  );
};

export default DashboardMain;
