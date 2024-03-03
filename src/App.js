
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Application from './component/Application';
import InterestRate from './component/InterestRate';
import Contanct from './component/Contanct';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    
       <Route path="/interest" element={<InterestRate/>}/>
       <Route path="/application" element={<Application/>}/>
     <Route path="/contanct" element={<Contanct/>}/>
     
    </Routes>
   
  );
}

export default App;
