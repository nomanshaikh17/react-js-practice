import css from "../css/MenuComponent.module.css";
import FilterContainer from "./FilterContainer";
import ProjectContainer from "./ProjectContainer";
import { RiGalleryView2 } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { IoTodayOutline } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";

const MenuComponent = () => {
  return (
    <div className={css["menu-container"]}>
      <div className={css["left-inner-container"]}>
        <FilterContainer />
        <div className={`${css["filter-item"]} ${css["selected"]}`}>
          <RiGalleryView2 />
           <span>All</span>
        </div>
        <div className={css["filter-item"]}>
          <FaStar />
          <span>Starred</span>
        </div>
        <div className={css["filter-item"]}>
          <IoTodayOutline />
          <span>Today</span>
        </div>
        <div className={css["filter-item"]}>
          <BsCalendar4Week />
          <span>Week</span>
        </div>
        <ProjectContainer />
      </div>
    </div>
  );
};

export default MenuComponent;
