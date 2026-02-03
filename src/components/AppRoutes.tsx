import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Sprint1 from "./sprint_1/Sprint1";
import Sprint2 from "./sprint_2/Sprint2";
export default function AppRoutes() {
    return (
        <>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sprint-1" element={<Sprint1 />} />
<Route path="/sprint-2" element={<Sprint2 />} />
</Routes>
        </>
    );
}