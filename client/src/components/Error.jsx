import { useRouteError } from "react-router-dom";

// error component
const Error = () => {
  const err = useRouteError();

  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2>Looks like your requested resource doesn't exist.</h2>
      <p>{err.status + " Error: " + err.statusText} </p>
    </div>
  );
};

export default Error;
