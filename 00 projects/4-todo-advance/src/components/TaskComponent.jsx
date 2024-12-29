import css from "../css/TaskComponent.module.css";
import SingleTaskComponent from "./SingleTaskComponent";


const TaskComponent = ({showForm,projects,selectedProject,selectedFilter,tasks,updateTaskStatus,updateTaskFavorite}) => {
  return (
    <div className={css["task-main-container"]}>
      <div className={css["inner-container"]}>
        <div className={css["task-list-main-div"]}>
          <div className={css["heading"]}>Tasks</div>
          <div className="task-list-div">
            <SingleTaskComponent selectedFilter={selectedFilter} selectedProject={selectedProject} tasks={tasks} updateTaskStatus={updateTaskStatus} updateTaskFavorite={updateTaskFavorite}/>
          </div>
        </div>
        <div className={css["bottom-container"]}>
          <button className={css["add-button"]} onClick={()=>{
            showForm(1);
          }}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
