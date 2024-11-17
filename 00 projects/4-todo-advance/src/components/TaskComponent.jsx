import css from "../css/TaskComponent.module.css";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";


const TaskComponent = () => {
  return (
    <div className={css["task-main-container"]}>
      <div className={css["inner-container"]}>
        <div className={css["task-list-main-div"]}>
          <div className={css["heading"]}>Tasks</div>
          <div className="task-list-div">
            <div className={css["task"]}>
              <div className={css["round"]}>
                <input type="checkbox" checked onChange={()=>{}} />
                <label htmlFor="checkbox"></label>
              </div>
              <span className={css["task-text"]}>Task 1</span>
              <span className={css["task-star"]}><FaStar /></span>
              <span className={css["task-bin"]}><RiDeleteBinLine />
              </span>
            </div>
          </div>
        </div>
        <div className={css["bottom-container"]}>
          <button className={css["add-button"]}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
