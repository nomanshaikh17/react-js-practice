import css from './CssModulels/OutputComponent.module.css';

const OutputComponent = () => {
  return (
    <div className={css['display-div']}>
      <input type="text" className={css['input-field']} />
    </div>
  );
};
export default OutputComponent;
