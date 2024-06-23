import React from "react";
import Icon from "@/components/Icon/Icon";
import css from "./VideoItem.module.css";

const VideoItem = ({ video, refreshVideos }) => {
  const { _id } = video;

 const handleDelete = async () => {
    try {
      const res = await fetch(`/api/delete?id=${_id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log("Video deleted successfully");
        refreshVideos();
      } else {
        console.log("An error occurred while deleting the video");
      }
    } catch (error) {
      console.log(error);
    }
 };

  return (
    <li className={css.item}>
      <h2 className={css.title}>{video.title}</h2>
      <div className={css.containerBox}>
        <h3 className={css.category}>{video.category}</h3>
        <button type="button" className={css.deleteBtn} onClick={handleDelete}>
            <Icon name="icon-bin" className={css.iconDelete}/>
        </button>
      </div>
    </li>
  );
};

export default VideoItem;
