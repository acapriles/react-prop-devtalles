import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';


const product = {
    id: '1',
    title: 'Product One',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <ProductCard product={ product } >
                    <ProductImage />
                    <ProductTitle/>
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={ product } >
                    <ProductCard.Image />
                    <ProductCard.Title title={ 'Test' }/>
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}
