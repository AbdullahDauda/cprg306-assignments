'use client';

export default ItemList;
import Item from "./item";
import itemsData from "./items.json"
import { useState } from "react";

function ItemList() {
    
    const [sortBy, setSortBy] = useState("name");
   
    let itemsCopy = [...itemsData];

    
        if (sortBy == "name") {
            itemsCopy.sort((a,b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }
        )
        }

        if (sortBy == "category") {
            itemsCopy.sort((a,b) => {
                if (a.category < b.category) return -1;
                if (a.category > b.category) return 1;
                return 0;
            }
        )
    
    }


     
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
                    {itemsCopy.map(item => (
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