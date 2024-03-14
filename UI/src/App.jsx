import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import './App.css'
const App = () => {
  return (
    <body>
      <Header />
      <Outlet />
    </body>
  )
}

export default App