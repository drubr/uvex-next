import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Product } from "@/interfaces";
import { products } from "@/data";

export function useCart() {
  const pathname = usePathname();
  const [cart, setCart] = useState<{
    products: Product[];
    miniCartOpen: boolean;
    cartDrawerOpen: boolean;
  }>({
    products: [...products],
    miniCartOpen: false,
    cartDrawerOpen: false,
  });

  useEffect(() => {
    if (pathname) closeMiniCart();
  }, [pathname]);

  const closeMiniCart = () => {
    setCart((prevState) => {
      return { ...prevState, miniCartOpen: false };
    });
  };

  const toggleMiniCart = () => {
    setCart((prevState) => {
      return { ...prevState, miniCartOpen: !prevState.miniCartOpen };
    });
  };

  const addProduct = (product: Product) => {
    setCart((prevState) => {
      return {
        ...prevState,
        products: [...prevState.products, product],
      };
    });
  };

  const deleteProduct = (productId: string) => {
    setCart((prevState) => {
      return {
        ...prevState,
        products: prevState.products.filter(
          (product) => product.id.toString() !== productId,
        ),
      };
    });
  };

  const total = useCallback(() => {
    return cart.products
      .reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.variants[0].price,
        0,
      )
      .toFixed(2);
  }, [cart.products]);

  return {
    ...cart,
    total: total(),
    toggleMiniCart,
    addProduct,
    deleteProduct,
  };
}
