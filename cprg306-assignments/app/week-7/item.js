
export default function Item({name, quantity, category}) {


    return (
    <ul className="bg-yellow-500 my-4 p-2 w-96 rounded">
        <li className="text-white text-2xl font-bold"> {name} <br/> </li>
        <li className="text-white text-lg"> Buy {quantity} in {category} </li>
    </ul>
    )

}