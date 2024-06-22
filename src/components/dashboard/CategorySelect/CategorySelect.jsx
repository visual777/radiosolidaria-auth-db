import Select from "react-select";
import { categories } from "@/app/lib/categories";

const CategorySelect = ({ category, setCategory }) => {
  const handleCategory = (e) => setCategory(e?.value);
  const selectValue =
    category === null
      ? null
      : categories.find((option) => option.value === category);

  return (
    <>
      <Select
        value={selectValue}
        onChange={handleCategory}
        options={categories}
        placeholder={"Categoria"}
        maxMenuHeight={100}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid var(--accent-color)",
            minWidth: "300px",
            width: "100%",
            maxWidth: "600px",
            height: "40px",
            background: "var(--white-color)",
            borderRadius: "12px",
            boxShadow: "none",
            fontSize: "16px",
            outline: "none",
            fontWeight: "500",
            lineHeight: "1.29",
            letterSpacing: "-0.03em",
            color: "var(--white-color)",
            cursor: "pointer",
            "&::placeholder": {
              color: "var(--accent-color)",
            },
            "&:hover": {
              borderColor: "var(--white-color)",
            },
            "&:focus-within": {
              borderColor: "var(--white-color)",
              outline: "none",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "1.25",
            background: "transparent",
            cursor: "pointer",
            color: state.isFocused
              ? "var(--accent-color)"
              : "var(--dark-blue)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "12px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "var(--accent-color)",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
            height: "auto",
            borderRadius: "12px",
          }),
        }}
      />
    </>
  );
};

export default CategorySelect;
