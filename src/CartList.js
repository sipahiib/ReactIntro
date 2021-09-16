import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units in Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.id}</td>
              <td>{item.product.categoryId}</td>
              <td>{item.product.productName}</td>
              <td>{item.product.unitPrice}</td>
              <td>{item.product.unitInStock}</td>
              <td>{item.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(item.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
