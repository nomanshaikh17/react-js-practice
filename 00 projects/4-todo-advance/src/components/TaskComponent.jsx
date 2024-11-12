import css from "../css/TaskComponent.module.css";

const TaskComponent = () => {
  return (
    <div className={css["task-main-container"]}>
      <div className={css["inner-container"]}>
        <div className={css['task-list-main-div']}>
          <div className={css['heading']}>Tasks</div>
          <div className="task-list-div">
            <div className={css['task']}>Task 1</div>
          </div>
        </div>
        <div className={css['bottom-container']}><button className={css['add-button']}>Add</button></div>
      </div>
    </div>
  );
};

export default TaskComponent;
