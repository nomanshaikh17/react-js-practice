import css from "../css/TaskComponent.module.css";
import SingleTaskComponent from "./SingleTaskComponent";

const TaskComponent = ({
  showForm,
  projects,
  selectedProject,
  selectedFilter,
  tasks,
  updateTaskStatus,
  updateTaskFavorite,
}) => {
  // Helper function to filter tasks based on conditions
  const filterTasks = (task) => {
    if (selectedFilter === "all") {
      if (selectedProject === 1 || task.project === selectedProject) {
        return true;
      }
    } else if (selectedFilter === "starred") {
      if (
        task.favorite === 1 &&
        (selectedProject === 1 || task.project === selectedProject)
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className={css["task-main-container"]}>
      <div className={css["inner-container"]}>
        <div className={css["task-list-main-div"]}>
          <div className={css["heading"]}>Tasks</div>
          <div className="task-list-div">
            {tasks
              .filter(filterTasks) // Use the filter function to handle conditions
              .map((task, key) => (
                <SingleTaskComponent
                  task={task}
                  updateTaskStatus={updateTaskStatus}
                  updateTaskFavorite={updateTaskFavorite}
                  key={key}
                />
              ))}
          </div>
        </div>
        <div className={css["bottom-container"]}>
          <button
            className={css["add-button"]}
            onClick={() => showForm(1)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
