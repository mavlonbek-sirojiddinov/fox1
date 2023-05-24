import './App.css';
import Home from "./page/home/Home";
import { Route, Routes } from 'react-router-dom'
import "../src/assets/Global.css"

function App() {
  return (
    <div className="">
      <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
