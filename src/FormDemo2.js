import React, { Component } from "react";
import alertify from "alertifyjs";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", city: "", password: "", description: "" };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to DB");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              onChange={this.onChangeHandler}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" onChange={this.onChangeHandler}>
              <option>Ankara</option>
              <option>Isparta</option>
              <option>İstanbul</option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
