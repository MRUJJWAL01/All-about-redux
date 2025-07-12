import axios from "axios";
import { getProduct } from "../reducer/ProductSlice";

export const asyncgetproducts = ()=> async(dispatch,getstate)=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(getProduct(response.data));
        
    } catch (error) {
        console.log(error);
        
        
    }
}