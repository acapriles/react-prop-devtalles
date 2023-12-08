import { useEffect, useRef, useState } from "react";

import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {
    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMounted = useRef( false );

    console.log(initialValues?.count, isMounted.current);

    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0 );

        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues?.maxCount );
        }

        setCounter( newValue );

        //? Si la función existe entonces puede ser llamada  
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    
    // useEffect(() => {
    //     isMounted.current = true;
    // }, []);

    useEffect(() => {

        if ( !isMounted.current ) return;

        // isMounted.current = true;
        console.log('first2', isMounted.current, value);

        setCounter( value );
    }, [ value ]);

    
    

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,
        // Functions
        increaseBy,
        reset,
    }
}
