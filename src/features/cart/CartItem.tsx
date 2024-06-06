import { useTypedSelector } from '../../store';
import { formatCurrency } from '../../utils/helpers';
import { getCurrentQuantityById } from './cartSlice';
import DeleteButton from './DeleteButton';
import UpdateItemQuantity from './UpdateItemQuantity';
interface props {
  item: {
    pizzaId: number;
    name: string;
    quantity: number;
    totalPrice: number;
  };
}

function CartItem({ item }: props) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useTypedSelector(getCurrentQuantityById(pizzaId));

  return (
    <li
      className="py-3 sm:flex sm:items-center sm:justify-between"
      key={pizzaId}
    >
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />

        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
