import { Watch } from "react-loader-spinner";

const LoaderVideos = () => {
  return (
    <>
      <Watch
        visible={true}
        height="100"
        width="100"
        radius="48"
        color="var(--white-color)"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=''
      />
    </>
  );
};

export default LoaderVideos;
