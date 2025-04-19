import Kodnest from "./components/Kodnest";
import Interview from "./components/Interview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Kodnest />}></Route>
        <Route path="/interview" element={<Interview />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
