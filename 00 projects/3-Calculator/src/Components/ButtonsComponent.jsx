import css from "./CssModulels/ButtonsComponent.module.css";
const ButtonsComponent = ({ buttons, btnClick }) => {
  return (
    <div className={css["btn-container"]}>
      {buttons.map((b, key) => (
        <button
          key={key}
          className={`${css["btn"]} ${key == 19 && css["equal-button"]}`}
          onClick={() => {
            btnClick(b, key);
          }}
        >
          {b}
        </button>
      ))}
    </div>
  );
};
export default ButtonsComponent;
