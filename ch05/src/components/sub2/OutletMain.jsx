import { Link, Route, Routes } from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Parent from "./Parent";

export default function OutletMain() {
  return (
    <div className="OutletMain">
      <h4>중첩 라우팅</h4>
      <p>
        <Link to="/parent">parent</Link>&nbsp;
        <Link to="/parent/child1">child1</Link>&nbsp;
        <Link to="/parent/child2">child2</Link>&nbsp;
      </p>

      <Routes>
        <Route path="/parent" element={<Parent />}>
          <Route path="/parent/child1" element={<Child1 />} />
          <Route path="/parent/child2" element={<Child2 />} />
        </Route>
      </Routes>
    </div>
  );
}
