import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectVideosYoutube,
  selectVideosRadio,
} from "@/redux/video/selectors";

export const useVideos = () => {
  const videosRadio = useSelector(selectVideosRadio);
  const isLoading = useSelector(selectIsLoading);
  const videosYoutube = useSelector(selectVideosYoutube);

  return {
    videosYoutube,
    videosRadio,
    isLoading
  };
};
