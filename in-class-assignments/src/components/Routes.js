import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import First from './assignments/First';
import Four from './assignments/Four';
import Eight from './assignments/Eight';
import Eleven from './assignments/Eleven';
const Rout=()=>{
return(
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Dashboard/>}/>
    <Route exact path='/first' element={<First/>}/>
    <Route exact path='four' element={<Four/>}/>
    <Route exact path='/eight' element={<Eight/>}/>
    <Route exact path='/eleven' element={<Eleven/>}/>
  </Routes>
  </BrowserRouter>
)
}

export default Rout