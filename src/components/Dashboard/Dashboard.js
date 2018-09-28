import React, { Component } from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        }

    }



    render() {
        console.log(this.props)
        return (

            <div className="products">
                Dashboard

                    {this.props.items.map((items,i) => {
                    return <div >
                        <Product key={i} products={items.product} price={items.price} image={items.img} />
                        </div>
                        })}
            </div>
        )
    }
}
        

export default Dashboard