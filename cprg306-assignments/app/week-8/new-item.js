'use client';

import { useState } from "react";

export default function NewItem({ onAddItem }) {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    
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

    const handleSubmit = (event) => {
        event.preventDefault();


        const newItem = {
            id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
            name,
            quantity,
            category,
        };

        onAddItem(newItem);
        console.log(newItem);

        setQuantity(1);
        setName("");
        setCategory("produce");
    }



    return (
        <form onSubmit={handleSubmit} className="mx-auto my-4 gap-3 flex flex-col justify-content rounded text-black bg-white w-100 p-4 ">

            {/*Name Field*/}
            <input
            type="text"
            value= {name}
            onChange={(e) => {
                setName(e.target.value)
            }}
            required
            placeholder="Item Name"
            className="border border-yellow-500 rounded p-2"
            ></input>

            {/* Quantity Field */}
            <div className="flex space-x-24 ">
                <input 
                type="text" 
                className="text-black w-12 text-lg font-extrabold text-center border border-yellow-500 rounded"
                value= {quantity}
                onChange={(e) => {
                    setQuantity(quantity);
                }}
                ></input>
            
                <button type="button" disabled={quantity >= 20} className="px-3 py-1 rounded font-extrabold text-lg text-white bg-yellow-500 hover:bg-yellow-700" onClick = {Increment}>+</button>
                <button type= "button" disabled={quantity <= 1} className="px-3 py-1 rounded font-extrabold text-lg text-white bg-yellow-500 hover:bg-yellow-700" onClick = {Decrement}>-</button>
            </div>

            {/* Category Field */}
            <select
            value= {category}
            onChange={(e) => {
                setCategory(e.target.value);
            }}
            className="border text-black border-yellow-500 rounded p-2"
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen_foods">Frozen Foods</option>
                <option value="canned_goods">Canned Goods</option>
                <option value="dry_goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="others">Others</option>
            </select>

            <button
            type="submit"
            className="p-2 bg-yellow-500 text-white rounded-lg"
            >
                Add Item
            </button>
        </form>
        
    )
}
