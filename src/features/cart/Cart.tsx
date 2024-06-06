import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useAppDispatch, useTypedSelector } from '../../store';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const username = useTypedSelector((state) => state.user.username);
  const cart = useTypedSelector(getCart);
  const Dispatch = useAppDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="broder-b mt-3 divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => Dispatch(clearCart())}>
          clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
