import css from "./ButtonsCategory.module.css";

const ButtonsCategory = ({ setCategoryChoosen }) => {
  return (
    <div className={css.buttonsContainer}>
      <button type="button" onClick={() => setCategoryChoosen("radio")}>
        Radio Solidaria
      </button>
      <button type="button" onClick={() => setCategoryChoosen("tv")}>
        TV Solidaria
      </button>
      <button type="button" onClick={() => setCategoryChoosen("kids")}>
        Solidaria Kids
      </button>
      <button type="button" onClick={() => setCategoryChoosen("miguel")}>
        Miguel Diez
      </button>
      <button type="button" onClick={() => setCategoryChoosen("ramon")}>
        Ramón Ubillos
      </button>
    </div>
  );
};

export default ButtonsCategory;
