import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './Components/SingnIn';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
