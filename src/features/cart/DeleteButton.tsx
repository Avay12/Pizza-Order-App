import { useAppDispatch } from '../../store';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

interface props {
  pizzaId: number;
}

function DeleteButton({ pizzaId }: props) {
  const Dispatch = useAppDispatch();
  return (
    <Button type="small" onClick={() => Dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteButton;
