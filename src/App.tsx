import "./App.css";
import LoginComponent from "./pages/login"
import NotFound from "./pages/notFound"
import Home from "./pages/home"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yourName" element={<LoginComponent/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;