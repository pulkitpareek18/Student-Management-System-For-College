import AddStudent from './pages/AddStudent';
import Home from './Home'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='addStudent' element={<AddStudent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
