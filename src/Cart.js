import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products : [
                {
                    price: 25999,
                    title: 'Mobile',
                    qty: 11,
                    img: '',
                    id : 1
                },
                {
                    price: 65499,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id : 2
                },
                {
                    price: 6999,
                    title: 'Watch',
                    qty: 5,
                    img: '',
                    id : 3
                }
            ]
        };
    }

    handleIncreaseQuantity = (product) => {
        console.log('Hey please handle increase qty on this product', product);
        const {products} = this.state;

        let index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products: products
        });
    }

    handleDecreaseQuantity = (product) => {
        console.log('Hey please handle decrease qty on this product', product);
        const {products} = this.state;

        let index = products.indexOf(product);
        if(products[index].qty === 0) {
            return;
        }
        products[index].qty -= 1;

        this.setState({
            // products: products 
            products //same as above one
        });
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item)=> item.id!==id); //[{}]
        this.setState({
            products : items
        });
    }

    render() {
        return (
            <div className="cart">
                {
                    this.state.products.map((product) => {
                        return <CartItem 
                            product={product} 
                            key={product.id} 
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteProduct = {this.handleDeleteProduct}
                        />
                    })
                }
            </div>
        );
    }
}
export default Cart;