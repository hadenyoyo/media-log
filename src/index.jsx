import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ViewLog from "./components/ViewLog";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/log/:id" element={<ViewLog />}/>
        </Routes>
    </BrowserRouter>
);