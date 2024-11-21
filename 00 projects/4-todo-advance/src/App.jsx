import './App.css'
import HeadingComponent from './components/HeadingComponent'
import MenuComponent from './components/MenuComponent'
import TaskComponent from './components/TaskComponent'
import TaskForm from './components/TaskForm'

function App() {

  return (
    <>
      <HeadingComponent/>
      <div className="mid-container">
          <MenuComponent/>
          {/* <TaskComponent/> */}
          <TaskForm/>
      </div>
    </>
  )
}

export default App
