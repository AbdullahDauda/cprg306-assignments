export default Item;
function Item({name, quantity, category}) {


    return (
    <ul class="bg-slate-800 my-4 p-2 w-96">
        <li class="font-bold text-2xl"> {name} <br/> </li>
        <li class="text-lg"> Buy {quantity} in {category} </li>
    </ul>
    )

}