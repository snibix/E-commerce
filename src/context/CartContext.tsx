import type { ReactNode } from "react";
import React, { createContext, useContext, useReducer } from "react";
// Types pour les produits du panier
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

// Type pour l'état du panier
interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Types pour les actions
type CartAction =
  | { type: "ADD_TO_CART"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

// Type pour le contexte
interface CartContextType {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// Création du contexte
const CartContext = createContext<CartContextType | undefined>(undefined);

// Fonction pour calculer le total
const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Fonction pour calculer le nombre d'articles
const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

// Reducer pour gérer les actions du panier
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      let newItems: CartItem[];
      if (existingItem) {
        // Si le produit existe déjà, augmenter la quantité
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Sinon, ajouter le nouveau produit avec quantité 1
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }

    case "REMOVE_FROM_CART": {
      const newItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }

    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        // Si la quantité est 0 ou négative, supprimer l'article
        const newItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          items: newItems,
          total: calculateTotal(newItems),
          itemCount: calculateItemCount(newItems),
        };
      }

      const newItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }

    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };

    default:
      return state;
  }
};

// État initial du panier
const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

// Props pour le CartProvider
interface CartProviderProps {
  children: ReactNode;
}

// Provider du contexte
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Fonctions helper pour simplifier l'utilisation
  const addToCart = (product: Omit<CartItem, "quantity">) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value: CartContextType = {
    cart,
    dispatch,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Hook personnalisé pour utiliser le contexte
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
