import LoginPanel from "./components/Login/Login"
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}
export default App;
