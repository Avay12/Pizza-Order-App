import { useNavigate, useRouteError } from "react-router-dom";

interface CustomError {
  data?: string;
  message?: string;
}

function Error() {
  const navigate = useNavigate();
  const error = useRouteError() as CustomError;
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
