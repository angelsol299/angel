const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
    const cartItem = itemcart(cart, item)
    return cartItem === undefined
    ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "REMOVE":
      const firstMatchIndex = state.indexOf(action.payload);
      return state.filter((item, index) => index !== firstMatchIndex);

    default:
      return state;
  }
};

export default cartReducer;
