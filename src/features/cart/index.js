import React from "react";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {props.cart.map(item => {
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}

function mapsStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapsStateToProps,
  map
)(Cart);
