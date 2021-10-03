import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 25999,
            title: 'Mobile',
            qty: 1,
            img: ''
        };
    }

    render() {
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style= {styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}} > {title} </div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color: '#777'}}>Qty: {qty} </div>

                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img className="action-icons" alt = "add" src = "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"></img>
                        <img className="action-icons" alt = "minus" src = "https://cdn-icons-png.flaticon.com/512/1828/1828899.png"></img>
                        <img className="action-icons" alt = "delete" src = "https://cdn-icons-png.flaticon.com/512/3096/3096687.png"></img>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height : 140,
        width: 140,
        background : '#ccc',
        borderRadius: 10
    }
}

export default CartItem;