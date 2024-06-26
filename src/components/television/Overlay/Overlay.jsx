import css from "./Overlay.module.css";

const Overlay = () => {
  return (
    <div className={css.overlay}>
        <p className={css.text}>Haz click en España o Argentina para reproducir</p>
    </div>
  );
};

export default Overlay;
