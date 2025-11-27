"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {

        event.preventDefault();
        let item = { name, quantity, category };
        console.log(item);
        const newItem = {
        id: Math.floor(Math.random() * 10000),
        name: name,
        quantity: quantity,
        category: category,
    };
    
    onAddItem(newItem);

            setName("");       
            setQuantity(0);     
            setCategory("Produce");
    };

    const handleNewName = (e) => {
        const newName = e.target.value;
            setName(newName);
    }

    const handleNewCategory = (e) => {
        const newCategory = e.target.value;
            setCategory(newCategory);
    }

    const increment = () => {
        if (quantity < 20) {
            setQuantity (quantity + 1);
        }
        
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity - 1);
        }
    }

    return (
        <div className=" bg-white p-5 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="name" className="text-black"></label> 
                <input type="text" id="name" className="rounded-xl p-2 text-black w-auto outline-1" value={name} onChange={(event) => handleNewName(event)} required placeholder="Item Name"/>

                <div className="flex justify-center items-center">
                    <p className="bg-white m-2 p-2 rounded-3xl w-10 font-bold text-black text-center outline-1">{quantity}</p>
                    <button type="button" className="bg-blue-500 p-2 mr-2 rounded-3xl w-20 hover:bg-blue-300 font-bold text-white disabled:cursor-not-allowed disabled:bg-blue-300" onClick={decrement} disabled={quantity === 1}>-</button>
                    <button type="button" className="bg-blue-500 p-2 rounded-3xl w-20 hover:bg-blue-300 font-bold text-white disabled:cursor-not-allowed disabled:bg-blue-300" onClick={increment} disabled={quantity === 20}>+</button>
                </div>

                <label htmlFor="category" className="text-black text-center"></label>
                <select id="category" className="rounded-xl p-2 text-black w-auto outline-1" value={category} onChange={(event) => handleNewCategory(event)} required>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>

                <button type="submit" className="border m-2 bg-red-500 text-white p-3 text-1">Add Item</button>

            </form>
        </div>
        
    );
    




}
