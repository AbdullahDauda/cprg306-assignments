"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useState } from 'react';
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    const handleItemSelect = (item) => {
        let clearedName = item.name
            .split(",")[0]
            .replace(/[^\p{L}\p{N}\s]/gu)
            .trim();
        setSelectedItemName(clearedName);
    }

    const { user } = useUserAuth();
    if (!user) {
        return (
        <div>
            <h1> NOT LOGGED IN</h1>
            <p>You Must Sign-in to Access the Shopping List! </p>
        </div>
        );
    }

    return (
        <main className="m-auto w-4xl p-5 flex flex-row gap-8">
            <div className="w-1/2">
                <h1 className="text-4xl text-blue-500 font-bold">Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/> 
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className="w-1/2">
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    );
}