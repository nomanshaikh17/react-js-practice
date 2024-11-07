import css from "../css/HeadingComponent.module.css";
const HeadingComponent = () => {
  return (
    <div className={css["header-div"]}>
        <div className={css["to"]}>to</div>
        <div className={css["do"]}>do.</div>
    </div>
  );
};
export default HeadingComponent;
