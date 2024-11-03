import css from './CssModulels/OutputComponent.module.css';

const OutputComponent = ({output}) => {
  return (
    <div className={css['display-div']}>
      <input type="text" className={css['input-field']} value={output} readOnly/>
    </div>
  );
};
export default OutputComponent;
