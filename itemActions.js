import {
  ADD_ITEMS,
  GET_ITEMS,
  DELETE_ITEM,
  DETAILS,
  INCREASE_ITEM,
  DECREASE_ITEM,
  TOTAL_ITEMS,
} from "./Types";

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};
export const AddToCart = (id) => (dispatch) => {
  dispatch({
    type: ADD_ITEMS,
    payload: id,
  });
};
export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};
export const increaseItem = (id) => (dispatch) => {
  // console.log(`increase :${id}`);
  dispatch({
    type: INCREASE_ITEM,
    payload: id,
  });
};

export const decreaseItem = (id) => (dispatch) => {
  // console.log(`DECREASE :${id}`);
  dispatch({
    type: DECREASE_ITEM,
    payload: id,
  });
};
export const getTotals = () => (dispatch) => {
  dispatch({
    type: TOTAL_ITEMS,
  });
};

export const getDetails = () => (dispatch) => {
  dispatch({
    type: DETAILS,
  });
};
