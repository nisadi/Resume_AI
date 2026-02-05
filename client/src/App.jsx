import { Routes, Route } from "react-router-dom"
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {
  

  return (
    <>
      <Routes>
          <Route path='/' element={<ResumeBuilder/>}/>
      </Routes>
    </>
  );
}

export default App
