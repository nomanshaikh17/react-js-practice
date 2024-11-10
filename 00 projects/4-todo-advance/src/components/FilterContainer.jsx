import css from '../css/FilterContainer.module.css'
const FilterContainer = () => {
  return (
    <div className={css['filter-container']}>
      <div className={css['text']}>Filters</div>
      {/* <div className={css['toogle']}>
        <input type='checkbox' />
      </div> */}
    </div>
  );
};
export default FilterContainer;
