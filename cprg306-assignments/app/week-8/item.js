
export default function Item({name, quantity, category, onSelect}) {


    return (
    <ul onClick={() => onSelect(name)} className="bg-yellow-500 my-4 p-2 w-100 rounded hover:bg-yellow-700">
        <li className="text-white text-2xl font-bold"> {name} <br/> </li>
        <li className="text-white text-lg"> Buy {quantity} in {category} </li>
    </ul>
    )

}