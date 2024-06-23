import css from "./ButtonsCategory.module.css";

const ButtonsCategory = ({ setCategoryChoosen, categoryChoosen }) => {
  return (
    <div className={css.buttonsContainer}>
      <button type="button" onClick={() => setCategoryChoosen("radio")} className={categoryChoosen === 'radio' ? css.active : css.button}>
        Radio Solidaria
      </button>
      <button type="button" onClick={() => setCategoryChoosen("tv")} className={categoryChoosen === 'tv' ? css.active : css.button}>
        TV Solidaria
      </button>
      <button type="button" onClick={() => setCategoryChoosen("kids")} className={categoryChoosen === 'kids' ? css.active : css.button}>
        Solidaria Kids
      </button>
      <button type="button" onClick={() => setCategoryChoosen("miguel")} className={categoryChoosen === 'miguel' ? css.active : css.button}>
        Miguel Diez
      </button>
      <button type="button" onClick={() => setCategoryChoosen("ramon")} className={categoryChoosen === 'ramon' ? css.active : css.button}>
        Ramón Ubillos
      </button>
    </div>
  );
};

export default ButtonsCategory;
