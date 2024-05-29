import { formatCurrency } from "../../utils/helpers";
type item = {
  pizzaId: number;
  name: string;
  quantity: number;
  totalPrice: number;
};

function CartItem({ item }: item) {
  const { name, quantity, totalPrice } = item;
  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
