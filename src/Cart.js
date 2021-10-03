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

    render() {
        return (
            <div className="cart">
                {
                    this.state.products.map((product) => {
                        return <CartItem product={product} key={product.id}/>
                    })
                }
            </div>
        );
    }
}
export default Cart;