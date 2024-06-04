import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

interface CustomError {
  data?: string;
  message?: string;
}

function Error() {
  const error = useRouteError() as CustomError;
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
