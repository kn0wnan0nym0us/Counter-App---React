import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Counter from "./components/Counter";
import CounterReducer from "./components/CounterReducer";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="counter" element={<CounterPage />}>
          <Route path="custom-hook" element={<Counter />} />
          <Route path="reducer" element={<CounterReducer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
