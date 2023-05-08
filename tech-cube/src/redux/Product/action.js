import axios from 'axios';
import {
  SINGLE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from './actionType';

export const getProducts = dispatch => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get('http://localhost:8080/products')
    .then(res => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};



export const singleProductfunc=(id)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  axios.get(`https://gopi.onrender.com/products/${id}`)
          .then((res)=>{
            console.log("**From Product Action.jsx",res.data);
              dispatch({type:SINGLE_PRODUCT_SUCCESS,payload:res.data})
          })
          .catch((err)=>{
              dispatch({type:PRODUCT_FAILURE})
          })
  }