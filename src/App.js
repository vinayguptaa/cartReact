import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products : [
            {
                price: 25999,
                title: 'Mobile',
                qty: 11,
                img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
                id : 1
            },
            {
                price: 65499,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
                id : 2
            },
            {
                price: 6999,
                title: 'Watch',
                qty: 5,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80',
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

  getCartCount = () => {
    let count = 0;

    const {products} = this.state;
    products.forEach((product) => count += product.qty);

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;
    let total = 0;

    products.forEach((product) => total += product.qty*product.price);

    return total;
  }

  render(){
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products={this.state.products} 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style={{padding:10, fontSize: 20}} >TOTAL: Rs. {this.getCartTotal()}/-</div>
      </div> 
    );
  }
}

export default App;