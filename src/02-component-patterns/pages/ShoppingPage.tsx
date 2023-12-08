import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';


const product = products[0];


export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            
            <ProductCard
                key={ product.id }
                className='bg-dark text-white'
                product={ product }
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />

                            <button onClick={ reset }>Reset</button>
                            <button onClick={ () => increaseBy( -2 ) }>-2</button>
                            {
                                !isMaxCountReached && <button onClick={ () => increaseBy( +2 ) }>+2</button>
                            }
                            
                            <span>{ count }</span>
                        </>        
                    )
                }
            </ProductCard>
        </div>
    )
}
