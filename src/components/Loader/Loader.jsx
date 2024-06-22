import { Watch } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <Watch
        visible={true}
        height="100"
        width="100"
        radius="48"
        color="var(--white-color)"
        ariaLabel="watch-loading"
        wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
