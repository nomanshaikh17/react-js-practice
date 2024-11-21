import css from "../css/TaskForm.module.css";
import { FaStar } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";

const TaskForm = () => {
  return (
    <div className={css["task-form-container"]}>
      <div className={css["form"]}>
        <div className={css["heading"]}>Add Task</div>
        <div>
          <input type="text" className={css["text-field"]} />
        </div>
        <div className={css["heading"]}>Note</div>
        <div>
          <textarea
            className={css["text-field"]}
            placeholder="type here"
          ></textarea>
        </div>
        <div className={css["bottom-fields"]}>
          <div className={css["notes-fields"]}>
            <div className={css["heading"]}>Note</div>
            <select className={css["select-dropdown"]}>
              <option value=""></option>
              <option value="">Test</option>
              <option>Default</option>
            </select>
          </div>
          <div className={css["date-fields"]}>
            <div className={css["heading"]}>Date</div>
            <input type="date" className={css["input-date"]} />
          </div>
          <div className={css["star-field"]}>
            <span className={css["task-star"]}>
              <FaStar />
            </span>
          </div>
        </div>
        <div>
            <div className={css['back-button']}><IoChevronBack/></div>
            <div className={css['add-btn']}><button>Add</button></div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
