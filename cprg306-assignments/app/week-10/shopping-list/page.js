"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import {getItems, addItem } from "../_services/shopping-list-service"
export default function Page() {
    const { user } = useUserAuth();
    
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = async (newItem) => {
        const id = await addItem(user.uid, newItem);

        const itemWithId = { id, ...newItem };
        setItems((prevItems) => [...prevItems, itemWithId]);
    }

    const handleItemSelect = (item) => {
        let clearedName = item.name
            .split(",")[0]
            .replace(/[^\p{L}\p{N}\s]/gu)
            .trim();
        setSelectedItemName(clearedName);
    }

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);
    
    
    if (!user) {
        return (
        <div>
            <h1> NOT LOGGED IN</h1>
            <p>You Must Sign-in to Access the Shopping List! </p>
        </div>
        );
    }

    async function loadItems() {
        const data = await getItems(user.uid);
        setItems(data);
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