import { useContext, useRef, useState } from "react";
import css from "../css/TaskForm.module.css";
import { FaStar } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import AppContext from "../store/AppContext";

const TaskForm = ({ showForm, addTask, nextTaskId }) => {

  const {projects} = useContext(AppContext);
  const taskHeading = useRef("");
  const taskDescrption = useRef("");
  const taskProject = useRef();
  const taskDate = useRef("");
  const [favorite,setFavorite] = useState(0);
  const [taskHeadingError, setHeadingError] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
    const heading = taskHeading.current.value;
    const description = taskDescrption.current.value;
    const project = taskProject.current.value;
    let date = taskDate.current.value;
    if (date === "") {
      date = new Date();
    } else {
      date = new Date(date);
    }
    if (heading == "") {
      setHeadingError("Title field required");
      return false;
    }
    addTask({
      id: nextTaskId,
      name: heading,
      note: description,
      project: parseInt(project),
      date: date,
      completed: 0,
      favorite: favorite,
    });
    taskHeading.current.value = "";
    taskDescrption.current.value = "";
    taskProject.current.value = "";
    taskDate.current.value = "";
    showForm(0);
  }

  function changeFavorite() {
    setFavorite(favorite === 0 ? 1 : 0);
  }
  return (
    <div className={css["task-form-container"]}>
      <form className={css["form"]} onSubmit={handleFormSubmit}>
        <div className={css["heading"]}>Add Task</div>
        <div>
          <input
            type="text"
            className={css["text-field"]}
            ref={taskHeading}
            placeholder="Task Heading"
          />
          {taskHeadingError != "" ? (
            <span className="error-text">{taskHeadingError}</span>
          ) : (
            ""
          )}
        </div>
        <div className={css["heading"]}>Note</div>
        <div>
          <textarea
            className={css["text-field"]}
            placeholder="type here"
            rows="5"
            ref={taskDescrption}
          ></textarea>
        </div>
        <div className={css["bottom-fields"]}>
          <div className={css["project-fields"]}>
            <div className={css["heading"]}>Project</div>
            <select
              className={css["select-dropdown"]}
              ref={taskProject}
              required
            >
              <option value="1">Select Project</option>
              {projects
                .filter((project) => project.id !== 1)
                .map((project, key) => (
                  <option key={key} value={project.id}>
                    {project.name}
                  </option>
                ))}
            </select>
          </div>
          <div className={css["date-fields"]}>
            <div className={css["heading"]}>Date</div>
            <input type="date" className={css["input-date"]} ref={taskDate} />
          </div>
          <div className={css["star-field"]}>
            <span
              className={`${css["task-star"]} ${favorite === 1 ? css["favorite"] : ""}`}
              onClick={changeFavorite}
            >
              <FaStar />
            </span>
          </div>
        </div>
        <div className={css['bottom-control']}>
          <div className={css["back-button"]} onClick={()=>showForm(0)}>
            <IoChevronBack />
          </div>
          <div className={css["add-btn"]}>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
