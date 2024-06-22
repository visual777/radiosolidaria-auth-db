import React from "react";
import Icon from "@/components/Icon/Icon";
import css from "./VideoItem.module.css";

const VideoItem = ({ video }) => {
  return (
    <li className={css.item}>
      <h2 className={css.title}>{video.title}</h2>
      <div className={css.containerBox}>
        <h3 className={css.category}>{video.category}</h3>
        <button type="button" className={css.deleteBtn}>
            <Icon name="icon-bin" className={css.iconDelete}/>
        </button>
      </div>
    </li>
  );
};

export default VideoItem;
