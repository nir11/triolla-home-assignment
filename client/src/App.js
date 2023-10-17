import { Route, Routes } from "react-router-dom";
import { NoteList } from "./pages/note-list/note-list";
import { CreateNote } from "./pages/create-note/create-note";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Routes>
        <Route index element={<NoteList />} />
        <Route path="new-note" element={<CreateNote />} />
      </Routes>
    </div>
  );
}

export default App;
