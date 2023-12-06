import { useState } from "react";

import { Product, ProductInCart } from "../interfaces/interfaces";



export const useShoppingCart = () => {
    
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product } : { count: number, product: Product }) => {
        // console.log('onProductCountChange', count, product);

        setShoppingCart( oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[ product.id ] || { ...product, count: 0 };

            //? Elimina un objeto del objeto de objetos
            if ( count === 0 ) {
                const { [ product.id ]: toDelete, ...rest } = oldShoppingCart;
                console.log({ toDelete });
                
                return { ...rest };
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            };
        })
    }
    
    return {
        shoppingCart,
        // Functions
        onProductCountChange
    }
}

