import { useReducer } from 'react';

type Item = {
  id: number;
  name: string;
  quantity: number;
};

type CartState = Item[];

type Action =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'INCREMENT'; payload: { id: number } }
  | { type: 'DECREMENT'; payload: { id: number } };

const initialState: CartState = [];

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload.id);
    case 'INCREMENT':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    case 'DECREMENT':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item,
      );
    default:
      return state;
  }
}

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const handleAdd = () => {
    const newItem: Item = { id: Date.now(), name: 'Product A', quantity: 1 };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2"> Shopping Cart</h1>
      <button onClick={handleAdd} className="mb-4 px-3 py-1 bg-blue-500 text-white rounded">
        Tambah Data Cart
      </button>

      {cart.length === 0 && <p>Keranjang Kosong</p>}
      <ul>
        {cart.map(item => (
          <li key={item.id} className="mb-2">
            {item.name} - Qty : {item.quantity}
            <div className="space-x-2 mt-1">
              <button
                onClick={() => dispatch({ type: 'INCREMENT', payload: { id: item.id } })}
                className="px-2 bg-green-500 text-white rounded"
              >
                +
              </button>
              <button
                onClick={() => dispatch({ type: 'DECREMENT', payload: { id: item.id } })}
                className="px-2 bg-yellow-500 text-white rounded"
              >
                -
              </button>
              <button
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
                className="px-2 bg-red-500 text-white rounded"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
