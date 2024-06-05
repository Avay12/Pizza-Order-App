import { useTypedSelector } from '../../store';

function Username() {
  const userName = useTypedSelector((state) => state.user.username);

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default Username;
