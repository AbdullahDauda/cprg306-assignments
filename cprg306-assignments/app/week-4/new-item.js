'use client';

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    
    function Increment() {
        if (quantity < 20) {
           setQuantity(quantity + 1) 
        } 
    }

    function Decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <form className="mx-auto my-4 justify-center flex space-x-4 bg-white w-45 p-2 ">
            <input 
            type="text" 
            className="text-black w-12 text-lg font-extrabold text-center border border-emerald-300 rounded"
            value= {quantity}
            onChange={(e) => {
                setQuantity(newValue);
            }}
            ></input>
            <button type="button" disabled={quantity >= 20} className="px-3 py-1 rounded font-extrabold text-lg text-white bg-emerald-300 hover:bg-emerald-600" onClick = {Increment}>+</button>
            <button type= "button" disabled={quantity <= 1} className="px-3 py-1 rounded font-extrabold text-lg text-white bg-emerald-300 hover:bg-emerald-600" onClick = {Decrement}>-</button>
        </form>
        
    )
}