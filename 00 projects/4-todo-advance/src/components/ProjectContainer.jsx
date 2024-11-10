import css from "../css/ProjectContainer.module.css";
import { IoMdAdd } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa6";

const ProjectContainer = () => {
  return (
    <div className={css["projects-container"]}>
      <div className={css["project-heading"]}>
        <div className={css["text"]}>Projects</div>
        <div className={css["add-icon"]}>
          <IoMdAdd />
        </div>
      </div>
      <div className={`${css["project-item"]} ${css["selected"]}`}>
        <FaRegFolder />
        Test
      </div>
      <div className={css["project-item"]}>
        <FaRegFolder />
        Default
      </div>
    </div>
  );
};
export default ProjectContainer;
