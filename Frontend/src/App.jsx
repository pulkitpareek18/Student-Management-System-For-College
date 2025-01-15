import AddStudent from './pages/AddStudent';
import Home from './Home'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AllStudent from './pages/AllStudent';
import Navbar from './components/Navbar';
import StudentInfo from './pages/StudentInfo';
import UpdateStudent from './pages/UpdateStudent';
import ExportToExcel from './pages/ExportToExcel';

function App() {

  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route index element={<Home/>}/>
      <Route path='addStudent' element={<AddStudent/>}/>
      <Route path='allStudent' element={<AllStudent/>}/>
      <Route path='studentInfo/:email' element={<StudentInfo/>}/>
      <Route path='updateStudent/:email' element={<UpdateStudent/>}/>
      <Route path='export' element={<ExportToExcel/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
