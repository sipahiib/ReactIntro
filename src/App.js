import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo from "./FormDemo";
import FormDemo2 from "./FormDemo2";

class App extends Component {
  changeCategory = (e) => {
    this.setState({ currentCategory: e.categoryName });
    this.getProducts(e.id);
  };

  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (e) => {
    let url = "http://localhost:3000/products";
    if (e) {
      url += "?categoryId=" + e;
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res }));
  };
  addToCart = (e) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === e.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: e, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(e.productName + " added to cart");
  };

  removeFromCart = (e) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== e.id);
    this.setState({ cart: newCart });
    alertify.error(e.productName + " removed from cart");
  };
  render() {
    let infoCategory = { baslik: "Category List", baskaBisey: "deneme" };
    let infoProduct = { baslik: "Product List" };

    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={infoCategory}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={infoProduct}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  )}
                ></Route>
                <Route path="/form1" component={FormDemo}></Route>
                <Route path="/form2" component={FormDemo2}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
