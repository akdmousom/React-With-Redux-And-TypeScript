
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue } from "../../app/Features/CountSlice/CountSlice";
import { RootState } from "../../app/Store/store";
const Counter = () => {

const {count} = useSelector((state:RootState)=>state.counter)
const dispatch = useDispatch()


    return (
        <>

            <div className="w-90 bg-white h-40 rounded-xl p-1 text-center grid justify-center items-center">
                
                <h1 className="font-bold">COUNT: {count}</h1>

                <div className="h-full grid grid-flow-col justify-center items-center gap-2">
                    <button onClick={()=> dispatch(increment()) } className="btn bg-yellow-400 p-2 rounded-xl font-bold">Increment</button>
                    <button onClick={()=> dispatch(decrement()) }className="btn bg-red-400 p-2 rounded-xl font-bold">Decrement</button>
                    <button onClick = {()=> dispatch(incrementByValue(5))}className="btn bg-cyan-600 p-2 rounded-xl font-bold">Increment By 5</button>
                </div>
            </div>

        </>
    );
};

export default Counter;