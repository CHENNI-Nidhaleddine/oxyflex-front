import {AiFillDelete,AiFillEdit} from "react-icons/ai"
function SuiviBouteille({index,service,quantite,capacite,reste}){
    return (
        <div className={`${index%2===0? 'bg-[#fff]':'bg-[#f7faff]'}  border-2 border-[#d8e2eb] grid grid-cols-5  text-lg py-2 rounded-xl mx-2 my-1 pl-3`}>
        <div>{service}</div>
        <div>{quantite}</div>
        <div>{capacite}</div>
        <div className={`${reste<30? 'bg-[#f00]': reste<50? 'bg-[#ff7800]':'bg-[#1bc167]'} rounded-full text-[#fff] font-bold px-5 py-1 w-fit m-auto`}>{reste}%</div>
        <div className="flex items-center justify-center text-3xl text-[#8e9195] ">
            <button className="mr-3 hover:text-[#000]"><AiFillDelete/></button>
            <button className="ml-3 hover:text-[#000]"><AiFillEdit/></button>
        </div>
        </div>
    )
}
export default SuiviBouteille;