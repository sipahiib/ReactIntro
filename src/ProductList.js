import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class ProductList extends Component {
  
  render() {
    return (
      <div>
        <h3>
          {this.props.info.baslik}-{this.props.currentCategory}
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitInStock}</td>
                  <td>
                    <Button onClick={()=>this.props.addToCart(product)} color="info">Add to Cart</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </h3>
      </div>
    );
  }
}
