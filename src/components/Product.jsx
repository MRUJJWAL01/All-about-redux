import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductActions";
import { deleteProduct } from "../store/reducer/ProductSlice";

const Product = () => {
  const {products} = useSelector((state) => state.products);
  console.log(products);
  const deleteHendler =(index)=>{
    dispatch(deleteProduct(index));

  }

  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getProduct());
    dispatch(asyncgetproducts());
  }, []);

  return (
    <div className=" container bg-red-200 mt-5 m-auto p-10 w-[60%]  ">
      <h1 className="text-3xl text-red-900 font-bold">Product List</h1>
      <ul className="mt-3">
        {products &&
          products.map((product, index) => {
            return (
              <li key={index}>
                {product.title}{" "}
                <span
                  onClick={() => deleteHendler(index)}
                  className="text-red-900 font-bold cursor-pointer"
                >
                  X
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Product;
