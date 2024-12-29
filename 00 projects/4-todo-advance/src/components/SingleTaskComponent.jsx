import css from "../css/SingleTaskComponent.module.css";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

const SingleTaskComponent = ({
  task,
  updateTaskStatus,
  updateTaskFavorite,
}) => {
  return (
    <>
      <div className={css["task"]}>
        <div
          className={css["round"]}
          onClick={() => {
            updateTaskStatus(task.id, task.completed === 1 ? 0 : 1);
          }}
        >
          <input
            type="checkbox"
            checked={task.completed === 1}
            onChange={() => {}}
          />
          <label htmlFor="checkbox"></label>
        </div>
        <span
          className={`${css["task-text"]} ${
            task.completed == 1 ? css["task-completed"] : ""
          }`}
        >
          {task.name}
        </span>
        <span
          className={`${css["task-star"]} ${
            task.favorite == 1 ? css["favorite"] : ""
          }`}
          onClick={() => {
            updateTaskFavorite(task.id, task.favorite == 1 ? 0 : 1);
          }}
        >
          <FaStar />
        </span>
        <span className={css["task-bin"]}>
          <RiDeleteBinLine />
        </span>
      </div>
    </>
  );
};

export default SingleTaskComponent;
