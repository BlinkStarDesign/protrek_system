import logo from './logo.svg';
import './App.css';
import Login from './componets/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './componets/Signup';


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
       </Routes>    
    </BrowserRouter>
  )
}

export default App;
