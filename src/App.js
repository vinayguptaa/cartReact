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

  getCartCount = () => {
    let count = 0;

    const {products} = this.state;
    products.forEach((product) => count += product.qty);

    return count;
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
      </div> 
    );
  }
}

export default App;