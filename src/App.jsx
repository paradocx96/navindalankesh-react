import {Route, Routes} from "react-router-dom";

import './assets/App.css';

import Homepage from "./pages/Homepage";
import Projects from "./pages/projects/projects"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </div>
    );
}

export default App;
