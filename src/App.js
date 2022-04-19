import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableData from "./components/TableData";
import AddData from "./components/AddData";
import EditData from "./components/EditData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableData />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/edit/:rowindex" element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
