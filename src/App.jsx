import Mainpage from './pages/Mainpage';
import Profile from './pages/Profile';
import Addfood from './pages/Addfood';
import Analystics from './pages/Analystics';
import Saved from './pages/Saved';

import { Routes , Route } from "react-router-dom"

function App() {
  return (
    <main className="main-content">
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/addfood" element={<Addfood />}/>
          <Route path="/analystics" element={<Analystics />}/>
          <Route path="/saved" element={<Saved />}/>
          
        </Routes>
    </main>  
  );
}

export default App
