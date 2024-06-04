import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import type { Pizza } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData() as Pizza[];
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: Pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader(): Promise<Pizza[]> {
  const data = await getMenu();
  return data;
}

export default Menu;
