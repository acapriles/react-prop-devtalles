import { useEffect, useRef, useState } from "react";

import { Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs ) => {

    const [ counter, setCounter ] = useState( value );

    //? Eliminar este "useRef" si es usa el método 2 del ShoppingPage 
    const isControlled = useRef( !!onChange );

    const increaseBy = ( value: number ) => {

        //? Eliminar este "IF" si es usa el método 2 del ShoppingPage 
        if ( isControlled.current ) {
            return onChange!({ count: value, product });
        }

        const newValue = Math.max( counter + value, 0 );
        setCounter( newValue );

        //? Si la función existe entonces puede ser llamada  
        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter( value );
    }, [ value ]);
    

    return {
        counter,
        // Functions
        increaseBy
    }
}
