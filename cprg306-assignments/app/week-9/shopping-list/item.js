"use client";

export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;

  return (
    <section onClick={() => onSelect(item)} className="bg-blue-900 my-4 p-2 w-90 hover:bg-gray-300">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p> Buy {quantity} in {category} </p>
    </section>
  );
}