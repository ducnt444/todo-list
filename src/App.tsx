import TaskList from "./pages/TaskList";
import styles from "./App.module.scss";
import { useEffect } from "react";
import { setInitialTasks } from "./services/LocalStorageServices";
import Popup from "./components/Misc/Popup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";

function App() {
  useEffect(() => {
    setInitialTasks();
  }, []);

  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/add" element={<AddTask />}></Route>
          <Route path="/" element={<TaskList />}></Route>
        </Routes>
        <Popup />
      </div>
    </Router>
  );
}

export default App;
