import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
