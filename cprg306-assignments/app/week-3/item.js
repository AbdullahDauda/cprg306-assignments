export default Item;
function Item({name, quantity, category}) {


    return (
    <ul className="bg-sky-50 my-4 p-2 w-96">
        <li className="text-black text-2xl"> {name} <br/> </li>
        <li className="text-black text-lg"> Buy {quantity} in {category} </li>
    </ul>
    )

}