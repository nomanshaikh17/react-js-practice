import './App.css'
import HeadingComponent from './components/HeadingComponent'
import MenuComponent from './components/MenuComponent'

function App() {

  return (
    <>
      <HeadingComponent/>
      <div className="mid-container">
          <MenuComponent/>
          <div className="left-container">test</div>
      </div>
    </>
  )
}

export default App
