'use client';

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
    
    const [sortBy, setSortBy] = useState("name");
   
    

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy == "name") {
            return a.name.localeCompare(b.name);
        }

        else if (sortBy == "category" ) {
            return a.category.localeCompare(b.category);
        }

        return 0;
    });

    
    


     
    return (
        <div>
            <div className="flex gap-2 mb-4">
                    <button
                    type="button"
                    disabled={sortBy == "name"}
                    onClick= {() => setSortBy("name")}
                    className="p-2 my-4 rounded font-bold bg-yellow-500"
                    >
                        Sort by Name
                    </button>

                    <button
                    type="button"
                    disabled={sortBy == "category"}
                    onClick= {() => setSortBy("category")}
                    className="p-2 my-4 rounded font-bold bg-yellow-500"
                    >
                        Sort by Category
                    </button>
            </div>

            <div>
                <ul>
                    {sortedItems.map(item => (
                        <li key={item.id}>
                            <Item
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            />
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}