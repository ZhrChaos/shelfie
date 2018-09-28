import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super()
        this.state = {
            img: "",
            product: "",
            price: 0
        }

        this.productInput = this.productInput.bind(this)
        this.baseState = this.state
    }

    imgInput(event) {
        this.setState({ img: event.target.value })
        console.log(this.state.img)
    }
    productInput(event) {
        this.setState({ product: event.target.value })
        console.log(this.state.product)
    }
    priceInput(event) {
        this.setState({ price: event.target.value })
        console.log(this.state.price)
    }
    resetForm() {
        this.setState(this.baseState)
    }

    render() {
        return (
            <form>
                <div>
                    Image URL:
                <input onChange={(event) => this.imgInput(event)}></input>
                    Product Name:
                <input onChange={(event) => this.productInput(event)}></input>
                    Price:
                <input onChange={(event) => this.priceInput(event)}></input>
                </div>
                <div>
                    <button onClick={this.resetForm}>Cancel</button>
                    {/* <input type="reset" value="Cancel"/> */}
                </div>
            </form>
        )
    }
}

export default Form