import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/reducer/counterSlice";
const App = () => {

  const {value} = useSelector( (s) => s.counter);
  const dispatch = useDispatch();
  
  return (
    <div className=" container bg-red-200 mt-5 m-auto p-10 w-[80%] ">
      <h1 className="text-3xl text-center text-red-900 font-bold ">
          Counter: {value}
      </h1>
      <div className="text-center mt-5">
        <button onClick={()=>dispatch(increment())} className="border-2 cursor-pointer text-red-900 mr-5 px-3 py-1 rounded-md ">Increment</button>
        <button onClick={()=>dispatch(decrement())} className="border-2 cursor-pointer text-red-900 mr-5 px-3 py-1 rounded-md ">Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(5))} className="cursor-pointer border-2 text-red-900 mr-5 px-3 py-1 rounded-md ">Increment By 5</button>
      </div>
    </div>
  );
};

export default App;
