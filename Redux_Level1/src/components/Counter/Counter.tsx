import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/Store/Store";
import { decrement, increment } from "../../app/Features/Counter/CounterSlice";

const Counter = () => {

    const {count} = useSelector((state: RootState)=>state.counter)
    const dispatch = useDispatch()

    

    return (
        <>

            <div className="w-80 bg-white h-40 rounded-xl p-1 text-center grid justify-center items-center">
                
                {
                    count > 0 ? <h1 className="font-bold text-[#FF55BB]">COUNT: {count}</h1> : <h1 className="font-bold">COUNT: {count}</h1>
                }

                <div className="h-full grid grid-flow-col justify-center items-center gap-2">
                    <button onClick={()=> dispatch(increment())} className="btn bg-yellow-400 p-2 rounded-xl font-bold">Increment</button>
                    <button onClick={()=> dispatch(decrement())} className="btn bg-red-400 p-2 rounded-xl font-bold">Decrement</button>
                </div>
            </div>

        </>
    );
};

export default Counter;