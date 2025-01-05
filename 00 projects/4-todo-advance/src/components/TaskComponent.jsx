import { useContext } from "react";
import css from "../css/TaskComponent.module.css";
import SingleTaskComponent from "./SingleTaskComponent";
import AppContext from "../store/AppContext";

const TaskComponent = ({
  showForm,
  tasks,
  updateTaskStatus,
  updateTaskFavorite,
  deleteTask,
}) => {
  const { selectedProject, selectedFilter } = useContext(AppContext);

  // Helper function to filter tasks based on conditions
  const filterTasks = (task) => {
    const currentDate = new Date();
    const taskDate = new Date(task.date);

    const isSameWeek = (date1, date2) => {
      const startOfWeek = (date) => {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
      };

      const startOfCurrentWeek = startOfWeek(new Date(date1));
      const startOfTaskWeek = startOfWeek(new Date(date2));

      return (
        startOfCurrentWeek.toDateString() === startOfTaskWeek.toDateString()
      );
    };

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
    } else if (selectedFilter === "today") {
      if (
        taskDate.toDateString() === currentDate.toDateString() &&
        (selectedProject === 1 || task.project === selectedProject)
      ) {
        return true;
      }
    } else if (selectedFilter === "week") {
      if (
        isSameWeek(taskDate, currentDate) &&
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
                  deleteTask={deleteTask}
                />
              ))}
          </div>
        </div>
        <div className={css["bottom-container"]}>
          <button className={css["add-button"]} onClick={() => showForm(1)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
