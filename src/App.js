import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: [{
        img: "https://images-na.ssl-images-amazon.com/images/I/81bRHR82h2L._SX425_.jpg",
        product: "Elgato Stream Deck",
        price: 149.99
      },
      {
        img: "https://images-na.ssl-images-amazon.com/images/I/81T5LcIMbKL._SX425_.jpg",
        product: "Elgato Stream Deck Mini",
        price: 99.99
      },
      {
        img: "https://www.elgato.com/sites/default/files/2017-07/camlink-packaging_720-min.png",
        product: "Elgato Cam Link",
        price: 124.99
      }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Header />
        </header>
        <div className="App-intro">
          <Dashboard items={this.state.products}/>
          {/* {this.state.products.map((item, id) => { return <Dashboard key={id} products={item} className="product"/>
          })} */}
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
