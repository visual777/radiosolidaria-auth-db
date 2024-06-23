"use client";

import { useState, useEffect } from "react";
import AddNew from "./AddNew/AddNew";
import AllVideos from "./AllVideos/AllVideos";
import AddVideoForm from "./AddVideoForm/AddVideoForm";
import css from "./DashboardMain.module.css";
import ButtonsCategory from "./ButtonsCategory/ButtonsCategory";

const DashboardMain = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryChoosen, setCategoryChoosen] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if(!categoryChoosen) return;
    fetch(`/api/dashboard?category=${categoryChoosen}`)
      .then(response => response.json())
      .then(data => setVideos(data.data));
  }, [categoryChoosen]);

  const refreshVideos = () => {
    fetch(`/api/dashboard?category=${categoryChoosen}`)
      .then(response => response.json())
      .then(data => setVideos(data.data));
  };

  return (
    <div>
      <h1 className={css.title}>Administrador de Solidaria Media</h1>
      <AddNew setShowModal={setShowModal}/>
      <ButtonsCategory setCategoryChoosen={setCategoryChoosen} categoryChoosen={categoryChoosen}/>
      <AllVideos videos={videos} refreshVideos={refreshVideos}/>
      {showModal && <AddVideoForm setShowModal={setShowModal} refreshVideos={refreshVideos}/>}
    </div>
  );
};

export default DashboardMain;
