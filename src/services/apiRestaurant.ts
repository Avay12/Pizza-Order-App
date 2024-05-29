const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}

interface MenuResponse {
  status: string;
  data: Pizza[];
}

interface Order {
  id: number;
  items: { pizzaId: number; quantity: number }[];
  total: number;
  status: string;
}

interface OrderResponse {
  status: string;
  data: Order;
}

export async function getMenu(): Promise<Pizza[]> {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data }: MenuResponse = await res.json();
  return data;
}

export async function getOrder(id: number): Promise<Order> {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { data }: OrderResponse = await res.json();
  return data;
}

export async function createOrder(newOrder: Partial<Order>): Promise<Order> {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed creating your order");
    const { data }: OrderResponse = await res.json();
    return data;
  } catch {
    throw new Error("Failed creating your order");
  }
}

export async function updateOrder(
  id: number,
  updateObj: Partial<Order>
): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed updating your order");
  } catch (err) {
    throw new Error("Failed updating your order");
  }
}
