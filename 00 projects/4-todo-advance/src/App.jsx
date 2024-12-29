import { useState } from "react";
import "./App.css";
import HeadingComponent from "./components/HeadingComponent";
import MenuComponent from "./components/MenuComponent";
import TaskComponent from "./components/TaskComponent";
import TaskForm from "./components/TaskForm";

function App() {
  const projects = [
    { id: 1, name: "default" },
    { id: 2, name: "test" },
  ];
  
  const [showForm, setshowForm] = useState(0);
  const [selectedProject, setSelectedProject] = useState(1);
  const [selectedFilter, setSelectedfilter] = useState("all");
  const [tasks, updateTasks] = useState([
    { id: 1, name: "Task 1", note: "task 1 note", project: 1, completed: 0,favorite:1 },
    { id: 2, name: "Task 2", note: "task 2 note", project: 1, completed: 1,favorite:1 },
    { id: 3, name: "Task 3", note: "task 3 note", project: 2, completed: 1,favorite:0 },
    { id: 4, name: "Task 4", note: "task 4 note", project: 2, completed: 0,favorite:1 },
  ]);
  function changeFormDisplay(value) {
    setshowForm(value);
  }
  function changeProject(value) {
    setSelectedProject(value);
  }
  function changeFilter(value) {
    setSelectedfilter(value);
  }

  function updateTaskStatus(taskId,status){
    updateTasks(tasks.map((task)=>(taskId==task.id ? {...task,completed:status} : task)));
  }

  function updateTaskFavorite(taskId,favorite){
    console.log("update")
    updateTasks(tasks.map((task)=>(taskId==task.id ? {...task,favorite:favorite} : task)));
  }
  return (
    <>
      <HeadingComponent />
      <div className="mid-container">
        <MenuComponent
          projects={projects}
          changeProject={changeProject}
          selectedProject={selectedProject}
          changeFilter={changeFilter}
          selectedFilter={selectedFilter}
        />
        {showForm ? (
          <TaskForm showForm={changeFormDisplay} />
        ) : (
          <TaskComponent
            showForm={changeFormDisplay}
            projects={projects}
            selectedProject={selectedProject}
            selectedFilter={selectedFilter}
            tasks={tasks}
            updateTaskStatus={updateTaskStatus}
            updateTaskFavorite={updateTaskFavorite}
          />
        )}
      </div>
    </>
  );
}

export default App;
