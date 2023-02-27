import { PlusCircle, XCircle } from "phosphor-react";

interface IncrementeDecrementButtonProps{
    increment: ()=> void
    decrement: ()=> void
    qtd: number
}

export function IncrementeDecrementButton(){

    function increment(){

    }
    function decrement(){

    }

    return (
        <div className="flex item-center justify-start gap-x-2 mt-1">
          <div className="flex items-center justify-center gap-x-1">
            <button onClick={decrement}>
              <XCircle size={30} weight="fill" color="red" />
            </button>
            <span className="text-white text-lg font-bold">{0} </span>
            <button onClick={increment}>
              <PlusCircle size={30} weight="fill" color="white" />
            </button>
          </div>
        </div>
    );
}