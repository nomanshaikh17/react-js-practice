import css from "../css/MenuComponent.module.css";
import FilterContainer from "./FilterContainer";
import ProjectContainer from "./ProjectContainer";
import { RiGalleryView2 } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { IoTodayOutline } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";
import { useContext } from "react";
import AppContext from "../store/AppContext";

const MenuComponent = ({
  changeProject,
  changeFilter,
}) => {
  const  {selectedFilter} = useContext(AppContext);
  return (
    <div className={css["menu-container"]}>
      <div className={css["left-inner-container"]}>
        <FilterContainer />
        <div
          className={`${css["filter-item"]} ${
            selectedFilter == "all" ? css["selected"] : ""
          }`}
          onClick={() => {
            changeFilter("all");
          }}
        >
          <RiGalleryView2 />
          <span>All</span>
        </div>
        <div
          className={`${css["filter-item"]} ${
            selectedFilter == "starred" ? css["selected"] : ""
          }`}
          onClick={() => {
            changeFilter("starred");
          }}
        >
          <FaStar />
          <span>Starred</span>
        </div>
        <div
          className={`${css["filter-item"]} ${
            selectedFilter == "today" ? css["selected"] : ""
          }`}
          onClick={() => {
            changeFilter("today");
          }}
        >
          <IoTodayOutline />
          <span>Today</span>
        </div>
        <div
          className={`${css["filter-item"]} ${
            selectedFilter == "week" ? css["selected"] : ""
          }`}
          onClick={() => {
            changeFilter("week");
          }}
        >
          <BsCalendar4Week />
          <span>Week</span>
        </div>
        <ProjectContainer
          changeProject={changeProject}
        />
      </div>
    </div>
  );
};

export default MenuComponent;
