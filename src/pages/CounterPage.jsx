import { Link, Outlet } from "react-router-dom";

const CounterPage = () => {
  return (
    <div>
      <div className="counterpage-btns">
        <Link className="btn" to={"/counter/custom-hook"}>
          Custom Hook
        </Link>
        <Link className="btn" to={"/counter/reducer"}>
          Reducer
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default CounterPage;
