import Icon from "@/components/Icon/Icon";
import css from "./Overlay.module.css";

const Overlay = () => {
  return (
    <div className={css.overlay}>
        <p className={css.text}>Haz click en España o Argentina para reproducir</p>
        <Icon name='icon-one-finger-click' className={css.icon}/>
    </div>
  );
};

export default Overlay;
