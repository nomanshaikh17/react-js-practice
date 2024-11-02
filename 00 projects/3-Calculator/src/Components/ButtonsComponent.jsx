import css from './CssModulels/ButtonsComponent.module.css'
const ButtonsComponent = ({ buttons }) => {
  return (
    <div className={css['btn-container']}>
      {buttons.map((b,key) => (
        <button key={key} className={css['btn']}>{b}</button>
      ))}
    </div>
  );
};
export default ButtonsComponent;
