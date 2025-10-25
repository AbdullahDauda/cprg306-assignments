'use client';

import ItemList from "./item-list.js"
import NewItem from "./new-item.js"
import itemsData from "./items.json"
import { useState } from "react"


export default function Page() {

    const [items, setItems] = useState(itemsData)

    const handleAddItem = (newItem) => {
        setItems([...items, newItem])
    }
    return (


    <main className="mx-auto max-w-md p-4">
        <h1 className="text-4xl font-bold">Shopping List</h1>

        <NewItem onAddItem = {handleAddItem}/>

        <ItemList items={items} />
    </main>
    )
}