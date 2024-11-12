import './App.css'
import HeadingComponent from './components/HeadingComponent'
import MenuComponent from './components/MenuComponent'
import TaskComponent from './components/TaskComponent'

function App() {

  return (
    <>
      <HeadingComponent/>
      <div className="mid-container">
          <MenuComponent/>
          <TaskComponent/>
      </div>
    </>
  )
}

export default App
