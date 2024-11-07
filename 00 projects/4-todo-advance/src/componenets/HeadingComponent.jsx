import css from "../css/HeadingComponent.module.css";
const HeadingComponent = () => {
  return (
    <div>
      <h1>
        <div className={css["to"]}>to</div>
        <div className={css["do"]}>do.</div>
      </h1>
    </div>
  );
};
export default HeadingComponent;
