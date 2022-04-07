import "./App.css";
import Choice from "./Pages/ChoicePage/Choice.jsx";
import Landing from "./Pages/LandingPage/Landing.jsx";
import Furniture from "./Pages/Furniture/Furniture.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route path="/Choice" element={<Choice />}></Route>
          <Route path="/furniture/*" element={<Furniture />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
