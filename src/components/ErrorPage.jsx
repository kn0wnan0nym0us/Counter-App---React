import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error--heading">Ooops... Page Not Found!</h1>
      <Link to={"/"}>
        <button className="btn">Return Home</button>
      </Link>
    </div>
  );
};
export default ErrorPage;
