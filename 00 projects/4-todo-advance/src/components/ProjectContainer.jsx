import css from "../css/ProjectContainer.module.css";
import { IoMdAdd } from "react-icons/io";
import { FaRegFolder } from "react-icons/fa6";

const ProjectContainer = ({ projects,changeProject,selectedProject }) => {


  return (
    <div className={css["projects-container"]}>
      <div className={css["project-heading"]}>
        <div className={css["text"]}>Projects</div>
        <div className={css["add-icon"]}>
          <IoMdAdd />
        </div>
      </div>
      {/* <div className={`${css["project-item"]} ${css["selected"]}`}>
        <FaRegFolder />
        <span>Test</span>
      </div> */}
      {projects.map((project,key) => (
        <div key={key} className={`${css["project-item"]} ${selectedProject==project.id ? css["selected"]: ''}`} onClick={()=>{
          changeProject(project.id);
        }}>
          <FaRegFolder />
          <span>{project.name}</span>
        </div>
      ))}
    </div>
  );
};
export default ProjectContainer;
