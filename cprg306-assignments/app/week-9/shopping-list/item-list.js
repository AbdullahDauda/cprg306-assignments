"use client";
import Item from './item';
import { useState } from "react";

export default function ItemList({ items, onItemSelect }){

    const [sortBy, setSortBy] = useState("name");

    let sortedItems = [...items];
    sortedItems.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name); 
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category); 
        }
        return 0; 
    });

    return (
        <div>
            <div className="flex gap-2 mt-2">
                <button type="button" className={`p-2 rounded-3xl w-32 font-bold text-white ${sortBy === "name" ? "bg-blue-900" : "bg-gray-300 text-white"}`} onClick={() => setSortBy("name")}>Sort by Name</button>
                <button type="button" className={`p-2 rounded-3xl w-32 font-bold text-white ${sortBy === "category" ? "bg-blue-900" : "bg-gray-300 text-white"}`}onClick={() => setSortBy("category")}>Sort by Category</button>
            </div>

            <div>
                {sortedItems.map((item) => (
                    <Item key={item.id} item={item} onSelect={() => onItemSelect(item)} />
                ))}
            </div>
        </div>
    );
}