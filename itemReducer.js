import {
  ADD_ITEMS,
  GET_ITEMS,
  ELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  DETAILS,
  TOTAL_ITEMS,
  DELETE_ITEM,
} from "../actions/Types";

const initialState = {
  items: [
    {
      _id: 1,
      title: "Samsung M10",
      description: "Black in color",
      price: "10000",
      img: "./images/samsung1.jpg",
      count: 1,
      isInCart: false,
    },
    {
      _id: 2,
      title: "BOAT STORM",
      description: "SMART WATCHES",
      price: "2999",
      img: "../images/smart.jpg",
      count: 1,
      isInCart: false,
    },
    {
      _id: 3,
      title: "Samsung M10",
      description: "Black in color",
      price: "10000",
      img: "../images/samsung1.jpg",
      count: 1,
      isInCart: false,
    },
  ],
  cart: [],
  isOpen: false,
  total: 0,
  shipping: 10,
};
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };

    case ADD_ITEMS:
      let check = state.cart.find((item) => item._id === action.payload);
      if (!check) {
        let items = state.items.filter((item) => item._id === action.payload);
        let itemsCart = [...state.cart, ...items];
        return {
          ...state,
          cart: itemsCart,
        };
      } else {
        let items = state.items.filter((item) => item._id === action.payload);

        items.forEach((item) => {
          item.isInCart = true;
        });

        return {
          ...state,
        };
      }
    case DELETE_ITEM:
      const filterCart = state.cart.filter(
        (item) => item._id === action.payload
      );

      return {
        ...state,
        cart: filterCart,
      };
    case INCREASE_ITEM:
      let incResults = state.cart.map((item) => {
        if (item._id === action.payload) {
          item = { ...item, count: item.count + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: incResults,
      };
    case DECREASE_ITEM:
      let decResults = state.cart.map((item) => {
        if (item._id === action.payload) {
          item = {
            ...item,
            count: item.count === 1 ? (item.count = 1) : item.count - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: decResults,
      };

    case DETAILS:
      return {
        ...state,
      };
    case TOTAL_ITEMS:
      const totals = state.cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);

      return {
        ...state,
        total: totals,
      };

    default:
      return state;
  }
};

export default itemReducer;
// import {
//   ADD_TO_CART,
//   // REMOVE_FROM_CART,
//   // ADD_QUANTITY,
//   // SUB_QUANTITY,
//   // EMPTY_CART,
//   UPDATE_CART_UNITS,
// } from "../ActionTypes";
// import products from "../data";

// // const initialState = [
// //   {},
// //   // addedProduct [],
// // ];
// const initialState = [
//   {
//     id: 1,
//     title: "Samsung M10",
//     description: "Black in color",
//     price: "10000",
//     src: "./images/samsung1.jpg",
//     units: 1,
//   },
// ];
// const cartReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case ADD_TO_CART: {
//       const product = action.payload;
//       const cart = state;
//       const existingProductIndex = findProductIndex(cart, product.id);
//       const updatedCart = (existingProductIndex) =>
//         0 ? updateProductUnits(cart, product) : [...cart, product];
//       return updatedCart;
//     }
//     case UPDATE_CART_UNITS: {
//       const payload = action.payload;
//       const cart = state;

//       const existingProductIndex = findProductIndex(cart, payload.id);
//       if (existingProductIndex >= 0) {
//         let product = cart[existingProductIndex];
//         product.units = payload.units;
//         cart[existingProductIndex] = product;
//       }
//       return [...cart];
//     }
//   }

//   return state;
// };
// const findProductIndex = (cart, productID) => {
//   return cart.findIndex((p) => p.id === productID);
// };
// const updateProductUnits = (cart, product) => {
//   const productIndex = findProductIndex(cart, product.id);

//   const updatedCart = [...cart];
//   const existingProduct = updatedCart[productIndex];

//   const updatedUnitsProduct = {
//     ...existingProduct,
//   };
// };
// export { cartReducer };
